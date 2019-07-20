//注册全局过滤器
import Vue from 'vue'
var timeHander=function(value){
				//当前时间
	var startTime=value;
	var currTime=(new Date()).getTime();
	var totalTime=currTime-startTime;
	var Y=parseInt(totalTime/parseInt(1000*60*60*24*365));
	totalTime=totalTime%parseInt(1000*60*60*24*365);
	var M=parseInt(totalTime/parseInt(1000*60*60*24*30));
	totalTime=totalTime%parseInt(1000*60*60*24*30);
	var D=parseInt(totalTime/parseInt(1000*60*60*24));
	totalTime=totalTime%parseInt(1000*60*60*24);
	var h=parseInt(totalTime/parseInt(1000*60*60));
	totalTime=totalTime%parseInt(1000*60*60);
	var s=parseInt(totalTime/parseInt(1000*60));
	if(Y>0){
		return Y+'年前发布';
	}
	else if(M>0){
		return M+'月前发布';
	}
	else if(D>0){
		return D+'天前发布';
	}
	else if(h>0){
		return h+'小时前发布';
	}
	else if(s>0){
		return s+'分钟前发布';
	}
	else{
		return '刚刚发布';
	}
}


export {timeHander}