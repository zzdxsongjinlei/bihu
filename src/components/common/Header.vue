<template>
	<div class="header">
		<div>
			<img src="@/assets/logo.png">
			<p class="first">
				<router-link :to="{path:'/'}"  >首页</router-link>
				<router-link :to="{path:'/living'}">直播</router-link>	
				<router-link :to="{path:'/downloadApp'}" >下载App</router-link>
			</p>
				
				<el-input placeholder="请输入内容"  v-model="ser" :keyup.enter="search"> 					
					<i slot="suffix" class="el-input__icon el-icon-search" @click="search"></i>				
				</el-input>
				

			<p class="last">
				<router-link :to="{path:'/login'}" >登陆</router-link>
				<router-link :to="{path:'/register'}" >注册</router-link>	
				<router-link to="{}">
					<el-button round>
						<i class="el-icon-edit"></i>
						发布
					</el-button>
				</router-link>
				<router-link to="{}">
					本项目
				</router-link>					
			</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Header',
		data(){
			return{
				ser:''
			}
		},
		methods:{
			search:function(){
				this.$router.push({path:'/search',query:{query:this.ser}});
				this.ser='';
			}
		}
	}
</script>
<style>
.header .el-input__inner{
 
    width:480px;
    height:40px;
    border-radius: 40px;
    margin-top: 10px;
}
</style>
<style lang="scss" scoped>
.header{
	overflow:hidden;
	background:#fff;
	height:60px;
	line-height:60px;
	width:100%;
	>div{
		width:80%;
		margin:0 auto;
		img{
			margin-top:5px;
		    float:left;
			height:50px;
		}

		p.first{
			float:left;
		}
		.el-input{
			float:left;
			width:480px;
		}	
		p.last{
			float:right;
			.el-button{
				color:#00a8ea;
				border:#00a8ea 1px solid;
				padding:13px 30px;
			}
			.el-button:hover{
				color:#dcdfe6;
				background:#00a8ea;
				border:#dcdfe6 1px solid;
			}
		}
		a{  
			margin-right:20px;
			color:black;
			text-decoration:none;
			&:hover{
				color:#00a8ea;
			}	
		}
		.router-link-exact-active{
			color:#00a8ea;
			}
		
	}
}

</style>
