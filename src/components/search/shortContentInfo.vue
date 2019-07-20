<template>
	<div class="shortContentInfo">
		<ul class="shortContent_content">
			<li  v-for="(item,key) in list" :key="key" >
				<div class="main-header">
					<router-link :to="{path:'/userdetail/'+item.user.userId}">
						<div class="user-image">
							<img :src="'https://oss02.bihu.com/'+ item.user.userIcon">		
						</div>
					</router-link>
					<div class="user-info">
						<p>
							<router-link :to="{path:'/userdetail/'+item.user.userId}">
								{{item.user.userName}}
							</router-link>
						</p>
						<p>{{item.createTime|timeHander}}</p>	
					</div>
					<div class="user-cover">
						<button>关注</button>
						<span><i class="el-icon-more"></i></span>	
					</div>
					

				</div>
				<div class="main-main" >
					<p>
						<router-link :to="{path:'/shortcontentdetail/'+item.contentId}" v-html="item.content">
						</router-link>						
					</p>
				</div>
				<div class="main-footer">
					<router-link :to="{path:'/shortcontentdetail/'+item.contentId}">
						<span><i class="el-icon-coin active"></i>{{item.income}}</span>
						<span><i class="el-icon-thumb"></i>{{item.upCount}}</span>
						<span><i class="el-icon-chat-dot-square"></i>{{item.commentCount}}</span>
					</router-link>
				</div>	
			</li>
		</ul>
		<div class="view">
			<router-link :to="{path:'/search',query:{query:this.res,type:'s'}}">查看更多微文</router-link>		
		</div>
						
	</div>	
	
</template>
<script>
	export default{
		name:'shortContentInfo',
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
.shortContentInfo{
	a{
		text-decoration:none
	}
	ul,li{
		list-style:none;
	}
	.view{
		margin-bottom:10px;
		a{
		
		font-size:13px;
		color:#007bff;
		}

	}
	.shortContent_content{
		li{
			padding:20px 0px 30px 0px;
			
			.main-header{
				overflow:hidden;
				.user-image{
					width:40px;
					height:40px;
					border-radius:50%;
					float:left;
					overflow:hidden;
					img{
						width:100%;
						height:100%
					}
				}
				.user-info{
					margin-left:10px;
					float:left;
					p{
						font-size:12px;
						color:#ccc;
						a{
							font-size:14px;
							color:#5a6169;
						}
						&:first-child{
							margin-bottom:5px;
						}
					}
					

				}
				.user-cover{
					float:right;
					button{
						padding:3px 5px;
						border-radius:7px;
						margin-right:5px;
						border:1px solid #007bff;
						color:#007bff;
						font-size:12px;
					}
				}

			}
			.main-main{
				margin:10px ;
				
				p{
					line-height:20px;
					a{
						color:#666;
						font-size:14px;
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