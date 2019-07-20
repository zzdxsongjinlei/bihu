//币乎网站api界面，比较容易维护，有些数据取不到

import request from './request.js'

//用户详情页获取用户详情
export const getUserDetail =function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/api/content/show/userHomePage',
		method:'post',
		data:data
	});
}
//获取用户精选文章
export const getUserChoices =function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/bihu/users/'+data,
		method:'get'
	});
}

//用户详情页使用获取最热文章
export const getUserHotArtList=function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/api/content/show/hotArtList',
		method:'post',
		data:data
	});
}


//首页和模块页获取最热文章	，首页界面使用
export const getHotArtList=function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/api/content/show/hotArtList',
		method:'post',
		data:data
	});
}
//最热文章详情页，评论，文章详情页使用
export const getArticleComment =function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/bihu/comment/listrootcomment?secret=',
		method:'post',
		data:data
	});
}
//最热文章详情页，使用，获取文章的信息
export const getArticleContent =function(data){
	return request({
		url:data,
		method:'get'
	});
}
//最热文章详情页使用，获取文章的信息
export const getArticle =function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/api/content/show/getArticle2?secret=',
		method:'post',
		data:data
	});
}



//首页获取微文，首页已经使用
export const getShortContents=function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/bihu/shortContents/hots',
		method:'get',
		params:data
	});
}

//首页获取更多标签页，首页已经使用
export const getQueryBoardList=function(){
	return request({
		url:'https://be02.bihu.com/bihube-pc/api/content/queryBoardList',
		method:'post'
	});
}


//微文详情页使用，获取微文的内容
export const getShortContent =function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/bihu/shortContent/'+data,
		method:'get'
	});
}
//微文详情页使用，获取微文的评论
export const getShortComment =function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/bihu/comment/listrootcomment?secret=',
		method:'post',
		data:data
	});
}
//搜索界面，header界面已经使用
export const search =function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/bihu/search/sug',
		method:'post',
		data:data
	});
}
//直播夜获取活动,直播页面已经使用
export const getActivityList=function(data){
	return request({
		url:'https://gw.bihu.com/api/activity/live/'+data,
		method:'get'
	});
}
//模块页面获取板块的基本信息

export const getBoardInfo =function(data){
	return request({
		url:'https://be02.bihu.com/bihube-pc/api/content/queryBoardInfo',
		method:'post',
		data:data
	});
}


