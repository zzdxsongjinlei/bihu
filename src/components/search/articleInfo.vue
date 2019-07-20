<template>
<div class="articleInfo">
	<ul class="articleInfo_content">
		<li  v-for="(item,key) in list" :key="key">
			<div class="main-header">
				<div class="user-img">
					<router-link :to="{path:'/userdetail/'+item.user.userId}">
						<img :src="'https://oss02.bihu.com/'+item.user.userIcon">
					</router-link>
				</div>
				<div class="user-info">
					<p>
						<router-link :to="{path:'/userdetail/'+item.user.userId}">
							{{item.user.userName}}
						</router-link>
					</p>
					<p>{{item.createTime|timeHander}}</p>				
				</div>	
				<span><i class="el-icon-more"></i></span>
			</div>
			<div class="main-main">
				<div class="main-img">
					<router-link :to="{path:'/articledetail/'+item.articleId}">

						<img :src="'https://oss02.bihu.com/'+item.articleIcon">
					</router-link>
				</div>
				<div>
					<p>
						<router-link :to="{path:'/articledetail/'+item.articleId}" v-html="item.title">
						 	
						</router-link>
					</p>
					<p>
						<router-link :to="{path:'/articledetail/'+item.articleId}" v-html="item.brief">
						</router-link>
					</p>						
				</div>
			</div>
			<div class="main-footer">
				<router-link :to="{path:'/articledetail/'+item.articleId}">
					<span><i class="el-icon-coin active"></i>{{item.income}}</span><span><i class="el-icon-thumb"></i>{{item.upCount}}</span><span><i class="el-icon-chat-dot-square"></i>{{item.commentCount}}</span>
				</router-link>
			</div>
			
		</li>
	</ul>
	<div class="view">
		<router-link :to="{path:'/search',query:{query:this.res,type:'c'}}" >查看更多文章</router-link>	
	</div>
		
</div>
</template>
<script>
	
	export default{
		name:'articleInfo',
		data(){
			return{	
			}
		},
		props:['list','res'],
		created(){
			
		}

	}

</script>
<style lang="scss" scoped>
a{
	text-decoration:none;

}
ul,li{
	list-style:none;
}
.articleInfo{
	.view{
		margin-bottom:10px;
		a{
		
		font-size:13px;
		color:#007bff;
		}

	}
	.articleInfo_content{
		li{
			padding:20px 0px 30px 0px;
			
			.main-header{
				overflow:hidden;
				margin-bottom:10px;
				.user-img{
					width:40px;
					height:40px;
					border-radius:50%;
					overflow:hidden;
					float:left;
					img{
						width:100%
					}
				}
				.user-info{
					margin-left:10px;
					float:left;
					p{
						color:#ccc;
						font-size:12px;
						a{
							font-size:14px;
							color:#5a6169;
						}
					}
				}
				span{
					float:right;
				}
			}
			.main-main{
				overflow:hidden;
				.main-img{
					float:left;
					width:230px;
					margin-right:20px;
					img{
						width:230px;
						height:98px;
					}
				}
				div{
					p:first-child{
						a{
							font-size:20px;
							line-height:28px;
							color:#212529;
							display:block;
						}
					}
					p:last-child{
						a{
							font-size:13px;
							line-height:19px;
							color:#999;

						}
					}
				}
			}
			.main-footer{
				float:right;
				overflow:hidden;
				span{
					margin-right:20px;
					color:#999;
					font-size:13px;
					i{
						margin-right:3px;								
					}
					.active{
						color:#ffa600;
					}
				}
			}
		}

	}
}


</style>