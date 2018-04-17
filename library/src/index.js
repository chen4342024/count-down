import { noop } from './util';

/**
 * 倒计时的状态
 */
const CountDownStatus = {
	COUNTING: 'counting',
	PAUSE: 'pause',
	NONE: 'none',
};

/**
 * 倒计时
 */
class CountDown {
	//将倒计时挂在类上
	static Status = CountDownStatus;

	//默认的配置
	static defaultOptions = {
		count: noop,
		end: noop,
		status: CountDownStatus.NONE,
	};

	constructor(options) {
		this.options = { ...CountDown.defaultOptions, ...options };
		this.status = CountDown.Status.NONE;
	}

	/**
	 * 开始倒计时
	 * @param seconds 秒数
	 */
	start(seconds) {
		clearTimeout(this.timeoutId);
		this.seconds = seconds;
		this.status = CountDown.Status.COUNTING;
		this.next();
	}

	/**
	 * 下一秒
	 */
	next() {
		let { count } = this.options;
		if (this.seconds > 0) {
            count(this.seconds);
			this.seconds--;
			this.timeoutId = setTimeout(() => {
				this.next(this.seconds);
			}, 1000);
		} else {
            let { end } = this.options;
			end(this.seconds);
		}
	}

	/**
	 * 暂停计时器
	 */
	pause() {
		clearTimeout(this.timeoutId);
		this.status = CountDown.Status.PAUSE;
	}

    /**
     * 继续倒计时
     */
	resume() {
		if (this.status === CountDown.Status.PAUSE) {
			this.status = CountDown.Status.COUNTING;
			this.next();
		}
	}

	/**
	 * 重置计时器
	 */
	reset() {
		clearTimeout(this.timeoutId);
		this.seconds = 0;
		this.status = CountDown.Status.NONE;
		let { end } = this.options;
		end(this.seconds);
	}
}

export default CountDown;
