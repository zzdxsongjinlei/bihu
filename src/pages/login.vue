<template>
	<div>
		<div class="login">
			<div class="login-container">
				<el-row class="login-header">
					<el-col :span="8" :offset="2"> <h1>欢迎登陆</h1></el-col>
					
				</el-row>
				<el-row v-if="index!='email'">
					<el-col :span="8" :offset="2">
						<ul class="tab-list">
							<li :class="[index=='index' ? 'active':'']" ><router-link :to="{path:'/login',query:{index:'index'}}">手机号登陆</router-link></li>
							<li :class="[index=='verifycode'? 'active' :'']" ><router-link :to="{path:'/login',query:{index:'verifycode'}}">验证码登陆</router-link></li>
						</ul>
					</el-col>
					
				</el-row>
				<el-row v-else>
					<el-col :span="8" :offset="2">
						<ul class="tab-list">
							<li ></li>
							<li ></li>
						</ul>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" :offset="2" class="tab-content">
						<form>
							 <el-input placeholder="请输入手机号" v-model="input1"  v-if="index!='email'">
    							<template slot="prepend">+86</template>
 							 </el-input>
 							 <el-input placeholder="请输入邮箱" v-model="input1"  v-if="index=='email'">
 							 </el-input>
							<el-input placeholder="请输入密码"  show-password v-model="input2" v-if="index!='verifycode'"></el-input> 
							<el-input placeholder="短信验证码"  v-if="index=='verifycode'" class="message-input"></el-input><el-button v-if="index=='verifycode'" class="message-btn">短信验证码</el-button>
							<el-button class="button1">登陆</el-button>
						</form>
						<p> 
							<router-link :to="{path:'/login',query:{index:'index'}}" v-if="index=='email'">手机号登陆</router-link> 
							<router-link :to="{path:'/login',query:{index:'email'}}" v-if="index!='email'">邮箱登陆</router-link> 
							<router-link :to="{}"  v-if="index!='verifycode'">忘记密码 </router-link>
						</p>
					</el-col>
					<el-col :span="5" :offset="3" class="tab-footer">
						<p>还不是Bihu的用户？<br>马上注册，掌握一手资讯。</p>
						<router-link :to="{path:'/register'}">免费注册</router-link>
						
						
					</el-col>
				</el-row>
				
			</div>
		</div>
		<Footer/>
	</div>

</template>
<script>
	import Footer from '../components/common/Footer.vue'
	export default{
		name:'login',
		data(){
			return{
				input1:'',
				input2:'',
				index:''
			}
		},
		created(){
			this.index='index';
			console.log(this.index);
		},
		beforeRouteUpdate(to,from,next){
			this.index=to.query.index;
	        next();
		},
		components:{
			Footer
		}
	}
</script>
<style scoped lang="scss">
.login{
		width:80%;
		margin:20px auto;
		min-height:550px;
		.login-header{
			padding:80px 0px 40px 0px;
			h1{
				height:50px;
				line-height:50px;
			}
		}
		.tab-content{
			padding:28px 0px;
			.el-input{
				height:41px;
				margin-bottom:35px;
				border:1px solid #e9ecef;
				&:focus{
					border:1px solid #007bff;
				}
			}
			p{
				margin-top:28px;
				a{
					text-decoration:none;
					font-size:14px;

					&:last-child{
						float:right;
						color:black;
					}
					&:first-child{
						float:left;
						color:#007bff;
					}
				}
			}
			.message-input{
				width:65%;
			}
			.message-btn{
				float:right;
				width:30%;
				height:41px;
				background:#ebf3fb;
				color:#007bff;
				&:hover{
					background:#007bff;
					color:#ffffff;
				}
			}
			.button1{
				background:#007bff;
				width:100%;
				color:#fff;
				height:41px;
				
				text-align:center;
				font-weight:bold;
				font-size:14px;
				border-radius:5px;

			}
		}
		.tab-footer{
			p{
				margin-top:20px;
				font-size:14px;
				line-height:28px;
				margin-bottom:30px;
			}
			a{
				margin-top:30px;
				font-size:14px;
				color:#007bff;
			}
		}
		.tab-list{
			.active{
					border-bottom:3px solid #007bff;
					a{
						color:#007bff;
					}
				}
			li{
				list-style:none;
				float:left;
				height:40px;
				line-height:40px;				
				border-bottom:3px solid transparent;
				:first-child{
					margin-right:24px;
				}
				
				a{
					color:#bcc7d7;
					text-decoration:none;
					font-size:16px;
					&:hover{
						color:#007bff;
					}
				}
			}
		}

	}
</style>