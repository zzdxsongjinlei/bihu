<template>
  <div class="footer">
  	<p>
  	<router-link :to="{}">关于我们</router-link>
  	<router-link :to="{}">联系我们</router-link>
  	<router-link :to="{}">帮助中心</router-link>
  	<router-link :to="{}">用户协议</router-link>
  	<p>
    <p>©2019 - BIHU.COM All Rights Reserved 沪ICP备16033695号-3</p>
  </div>
</template>
<script>
	export default{
		name:'Footer'
	}
</script>
<style  lang="scss">
.footer {
   width:100%;
   height:100px;
   background:#fff;
   text-align: center;
   overflow:hidden;
   p{	font-size:12px;
   		margin-top:20px;
  	 a{  
  	 	margin-right:30px;
	    color:#333;
	    text-decoration:none;
	    &:hover{
			color:#00a8ea;
		}
	  }
  	}
  
}
</style>
