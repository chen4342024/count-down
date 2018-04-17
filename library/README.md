# count-down
一个简单的工具，倒计时，用于发送短信验证码的时候可以使用





### 安装

```javascript
npm install --save zzc-count-down
```



### 使用

```
import CountDown from 'zzc-count-down';

let countDown = new CountDown({
	//每次计时都会回调，每秒一次
	count: second => {
		console.log(second);
	},
	// 计时结束的时候回调
	end: second => {
		console.log("count down end");
	},
});

countDown.start(60); //开始计时

```

## 方法

#### start(second) 

开始计时，从传入的second开始倒数

#### pause 

暂停计时

#### resume

继续计时

#### reset

重置计时为0

## 事件

#### count

计时变化的时候回调，每秒回调一次，接收参数：秒数

#### end

计时结束的时候回调





