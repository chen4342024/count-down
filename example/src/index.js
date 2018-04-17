// import CountDown from 'zzc-count-down';
import CountDown from '../../library/dist/main';

function addClickEvent(className, func) {
	let el = document.querySelectorAll(`.${className}`);
	el[0].addEventListener('click', func, false);
}

let countDown = new CountDown({
	count: second => {
		document.querySelectorAll('.J-countDownNum')[0].innerText = second;
	},
	end: second => {
		document.querySelectorAll('.J-countDownNum')[0].innerText = '结束';
	},
});

function initClick() {
	addClickEvent('J-start', () => {
		countDown.start(30);
	});
	addClickEvent('J-pause', () => {
		countDown.pause();
	});
	addClickEvent('J-resume', () => {
		countDown.resume();
	});
	addClickEvent('J-reset', () => {
		countDown.reset();
	});
}

initClick();