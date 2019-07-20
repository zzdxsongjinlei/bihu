<template>
	<div>
		<div class="articledetail">
			<div class="article">
				<div class="article-title">
					<h3>{{article.title}}</h3>
				</div>
				<div class="article-user">
					<div class="user-icon">
						<router-link :to="{path:'/userdetail/'+article.userId}">
							<img :src="'https://oss02.bihu.com/'+article.userIcon">
						</router-link>
					</div>
					<div class="user-name">
						<p class="name">
							<router-link :to="{path:'/userdetail/'+article.userId}">{{article.userName}}</router-link>
							<span>原创</span>
						</p>
						<p class="time">{{article.creatime}}</p>
					</div>
					<div class="user-attention">
						<button>未关注</button>
					</div>
				</div>
				<div class="article-content" v-html="articlecontent">
					
				</div>
				<div class="article-details">
					<span>
						作者郑重申明：截至发文时，作者与文中提及项目存在利益关系，特此告知。利益关系包括但不限于下述情况：本人为项目团队成员、本人是项目团队成员的直系亲属或配偶、参与投资该项目、持有该项目发行的股份或通证、参与做空或做多该项目、收取回报进行有偿撰文等。
					</span>
				</div>
				<div class="article-stakeholders">
					<p>
						<i class="el-icon-chat-line-square"></i>
						<router-link :to="{}">
							{{article.boardCode}}
						</router-link>
					</p>

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
			<div class="article-details-btn">
				<button>
						<p><i class="el-icon-coin"></i></p>
						<p>{{article.money}}</p>
					</button>
					<button>
						<p><i class="el-icon-top"></i></p>
						<p>{{article.ups}}</p>
					</button>
					<button>
						<p><i class="el-icon-bottom"></i></p>
						<p>{{article.downs}}</p>
					</button>
				
			</div>
			<div class="article-comment">
				<div class="comment-header">
					<h3>评论</h3>
				</div>
				<ArticleComment :articlecomment="articlecomment" />
			</div>
		
		
		</div>
	<Footer/>	
	</div>
	
	
</template>
<script>
	import { getArticle ,getArticleContent,getArticleComment} from '@/utils/api.js'
	import Footer from '../components/common/Footer.vue'
	import ArticleComment from '../components/common/ArticleComment.vue'
	export default{

		name:'articledetail',
		data(){
			return{
				artid:'',
				article:[],
				articleurl:'',
				articlecontent:'',
				articlecomment:[],
				pageNum:1

			}
		},
		created(){

			this.artid=this.$route.params.id;
			this.getArticle(); 	
			this.getArticleComment();
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
					this.getArticleComment();
				}
			},	
			getArticleContent:function(){
				getArticleContent(this.articleurl).then((response)=>{
					this.articlecontent=response.data;
				});
			},
			getArticleComment:function(){
				getArticleComment({articleId:this.artid, pageNum:this.pageNum}).then(response=>{
					this.pageNum++;
					response.data.data.list.forEach(o=>{
						this.articlecomment.push(o);
					});


				});
			},
			getArticle:function(){
				getArticle({artId:this.artid}).then((response)=>{	
					this.article=response.data.data;
					this.articleurl='https://oss02.bihu.com/'+this.article.content;
					this.getArticleContent();
				});
			}
		},
		components:{
			Footer,
			ArticleComment
		}
	}
</script>
<style lang="scss">
.article-content{
	img{
		width:100%;
	}

}
	
</style>
<style lang="scss" scoped>
a{
	text-decoration:none;
}
	.articledetail{
		width:60%;
		margin:20px auto 0px;
		background:#fff;
		padding:40px;
		.article{
			.article-title{
				height:68px;
				h3{
					font-size:24px;

				}
			}
			.article-user{
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
						span{
							margin-left:5px;
							font-size:12px;
							color:#5187ff;
							line-height:14px;
							padding:3px 5px;
							border-radius:3px;
							background:rgba(81,135,255,0.12);
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
			.article-content{
				margin-bottom:30px;
				font-size:16px;
			}
			.article-details{
				font-size:12px;
				color:#999;
				line-height:17px;
				margin-bottom:20px;

			}
			.article-stakeholders{
				overflow:hidden;
				margin:0 0 52px;
				p{
					height:24px;
					font-size:14px;

					&:first-child{
						float:left;
						a{
							color:#007bff;
							margin-left:5px;
						}

					}
					&:last-child{
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
		.article-details-btn{
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
		.article-comment{
			.comment-header{
				margin-bottom:43px;
				h3{
					font-size:24px;
					line-height:33px;
					color:#5a6169;
				}
			}
		}

	}

</style>