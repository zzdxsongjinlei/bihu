<template>
	<div>
		<div class="register">
			
			<div >
				<el-row class="register-header">
					<el-col :span="8" :offset="2">
						<h1>注册</h1>
					</el-col>
				</el-row>
				<el-row class="register-container">
					<el-col :span="8" :offset="2">
						<form>
							<el-input placeholder="请输入手机号">
								<template slot="prepend">+86</template>	
							</el-input>
							<el-input placeholder="短信验证码"   class="message-input">								
							</el-input>
							<el-button  class="message-btn">短信验证码</el-button>
							<el-input placeholder="邀请码（非必填）">								
							</el-input>
							<el-radio v-model="radio" label="1">
								已阅读并同意<router-link :to="{}"> <<币乎用户服务协议与隐私政策>></router-link>
							</el-radio>
							
						</form>
					</el-col>
					<el-col :span="6" :offset="3" class="register-footer">
						<p>请妥善保存您的Bihu账号及登录密码。</p>
						<p>请勿和其他网站使用相同的登录密码。</p>
						<p>已有账号，去<router-link :to="{path:'/login',query:{index:'index'}}">登陆</router-link></p>
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
		name:'register',
		data(){
			return{
				radio:''
			}
		},
		components:{
			Footer
		}
	}
</script>
<style scoped lang="scss">
.register{
		width:80%;
		margin:20px auto;
		min-height:550px;
		.register-header{
			padding-top:80px;
			padding-bottom:28px;
			h1{
				font-size:36px;
				line-height:50px;
				height:50px;
			}
		}

		.register-container{
			.message-input{
				width:65%;
			}
			.register-footer{
				p{
					font-size:14px;
					height:28px;
					line-height:28px;
					&:last-child{
						margin-top:20px;
					}
				}
			}
			.message-btn{
				width:30%;
				float:right;
				background:#ebf3fb;
				color:#007bff;
				&:hover{
					color:#fff;
					background:#007bff;
				}
			}
			.el-input,.el-button{
				margin-bottom:33px;
				height:41px;
				.el-input-inner{
					height:41px;
				}
			}
			
			a{
				text-decoration:none;
				color:#007bff;
			}
		}
	}
</style>