<template>
	<div>
		<div class="shortdetail">
			<div class="short">
				<div class="short-user">
					<div class="user-icon">
						<router-link :to="{path:'/userdetail/'+short.userId}">
							<img :src="'https://oss02.bihu.com/'+short.userIcon">
						</router-link>
					</div>
					<div class="user-name">
						<p class="name">
							<router-link :to="{path:'/userdetail/'+short.userId}">{{short.userName}}</router-link>
						</p>
						<p class="time">{{short.creatime}}</p>
					</div>
					<div class="user-attention">
						<button>未关注</button>
					</div>
				</div>
				<div class="short-content" v-html="short.content">
					
				</div>	
				<div class="short-stakeholders">
					<p>
						<span>
							<router-link :to="{}">
								<i class="el-icon-star-off"></i>
								收藏
							</router-link>
						</span> 
						<span>
							<router-link :to="{}">
								<i class="el-icon-warning-outline"></i>
								举报
							</router-link>
						</span>
					</p>
				</div>
			</div>
			<div class="short-details-btn">
				<button>
						<p><i class="el-icon-coin"></i></p>
						<p>{{short.money}}</p>
					</button>
					<button>
						<p><i class="el-icon-top"></i></p>
						<p>{{short.ups}}</p>
					</button>
				
			</div>
			<div class="short-comment">
				<div class="short-header">
					<h3>评论</h3>
				</div>
				<ArticleComment :articlecomment="shortcomment" v-if="shortcomment" />
				<div class="short-main" v-else>没有评论</div>
			</div>
		
		
		</div>
	<Footer/>	
	</div>
	
	
</template>
<script>
	import { getShortContent ,getShortComment} from '@/utils/api.js'
	import Footer from '../components/common/Footer.vue'
	import ArticleComment from '../components/common/ArticleComment.vue'
	export default{

		name:'articledetail',
		data(){
			return{
				shortid:'',
				short:[],
				shortcomment:[],
				pageNum:1

			}
		},
		created(){

			this.shortid=this.$route.params.id;
			this.getShortContent(); 	
			this.getShortComment();
			window.addEventListener('scroll',this.scrollMethod);
		},
		destroyed(){
			window.removeEventListener("scroll",this.scrollMethod);
		},
		methods:{
			scrollMethod(){
				const sumH=document.body.scrollHeight||document.documentElement.scrollHeight;
				const viewH=document.documentElement.clientHeight;
				const scrollH=document.body.scrollTop||document.documentElement.scrollTop;
				if(viewH+scrollH>=sumH){
					this.getShortComment();
				}
			},	
			getShortContent:function(){
				getShortContent(this.shortid).then((response)=>{
					this.short=response.data.data;
				});
			},
			getShortComment:function(){
				getShortComment({articleId:this.shortid, pageNum:this.pageNum}).then(response=>{
					response.data.data.list.forEach(o=>{
						this.shortcomment.push(o);
					});
					this.pageNum++;
				});
			}
		},
		components:{
			Footer,
			ArticleComment
		}
	}
</script>
<style lang="scss" scoped>
a{
	text-decoration:none;
}
	.shortdetail{
		width:60%;
		margin:20px auto 20px;
		background:#fff;
		padding:40px;
		.short{
			.short-user{
				height:60px;
				margin:9px 0 20px;
				.user-icon{
					float:left;
					width:60px;
					height:60px;
					border-radius:50%;
					overflow:hidden;
					img{
						width:100%;
						height:100%;
					}
				}
				.user-name{
					float:left;
					margin-left:10px;
					.name{
						height:25px;
						line-height:25px;
						font-size:18px;
						margin-top:5px;
						a{
							color:#007bff;;
						}
						
						
					}
					.time{
						margin-top:5px;
						height:20px;
						line-height:20px;
						font-size:14px;
						color:#bcc7d7;
					}
				}
				.user-attention{
					margin-top:14px;
					float:right;
					button{
						background:#ebf3fb;
						color:#95b5d7;
						font-size:14px;
						font-weight:bold;
						border:none;
						padding:5px 30px;
						border-radius:12px;
						&:hover{
							color:#fff;
							background:#007bff;
						}
					}
				}

			}
			.short-content{
				margin-bottom:30px;
				font-size:16px;
			}
			
			.short-stakeholders{
				overflow:hidden;
				margin:0 0 52px;
				p{
					height:24px;
					font-size:14px;

					&:first-child{
						span{
							margin-left:15px;
							a{	color:#bcc7d7;
								&:hover{
									color:#007dff;
								}
								i{
									margin-right:5px;
								}
							}
						}
						float:right;

					}
				}
			}
		}
		.short-details-btn{
			margin-bottom:48px;
				text-align:center;
				button{
					width:100px;
					height:94px;
					border:1px solid #d2e5f7;
					line-height:32px;
					border-radius:8px;
					margin:0 10px;
					p{
						&:first-child{
							font-size:18px;
						}
						&:last-child{
							font-size:14px;
							color:#1a2c3f;

						}
					}
				}

		}
		.short-comment{
			.short-header{
				margin-bottom:43px;
				h3{
					font-size:24px;
					line-height:33px;
					color:#5a6169;
				}
			}
			.short-main{
				font-size:24px;
				color:#007dff;
				text-align:center;
				line-height:40px;
				height:40px;
			}
		}

	}

</style>