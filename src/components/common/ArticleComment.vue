<template>
	<div class="articlecomment">

		<ul>
			<li v-for="(item ,key) in articlecomment">
				<div class="user-info">
					<div class="user-icon">
						<router-link :to="{path:'/userdetail/'+item.user.userId}">
							<img :src="'https://oss02.bihu.com/'+item.user.userIcon" alt="">
						</router-link>
					</div>
					<p> 
						<span class="name">
							<router-link :to="{path:'/userdetail/'+item.user.userId}">
								{{item.user.userName}}
							</router-link>
						</span>
						<span class="time">{{item.createTime|timeHander}} </span> 
						<button><i class="el-icon-warning"></i></button>  
					</p>
					
				</div>
				<div class="comment">
					<p>{{item.content}}</p>
					<p><span><i class="el-icon-coin active"></i>{{item.income}}</span><span><i class="el-icon-thumb"></i>{{item.ups}}</span> <span class="com"><i class="el-icon-chat-dot-square"></i>回复</span></p>	
				</div>
			</li>
		</ul>
		
	</div>
</template>
<script>
	export default{
		name:'articlecomment',
		props:['articlecomment']
	}
</script>
<style lang="scss" scoped>
ul ,li{
	list-style:none;
}
a{
	text-decoration:none;
}
.articlecomment{
	ul{
		li{
			border-bottom:1px solid #ddd;
			padding:11px;
			.user-info{
				overflow:hidden;
				.user-icon{
					width:32px;
					height:32px;
					border-radius:50%;
					overflow:hidden;
					float:left;
					margin-right:10px;
					img{
						width:100%;
						height:100%;
					}
				}
				p{
					overflow:hidden;
					.name{				
							a{
								font-size:13px;
								color:#333;
							}
						}
					.time{
							font-size:12px;
							color:#bcc7d7;
							margin-left:20px;
						}
					button{
						float:right;
						border:none;
						font-size:14px;
						color:#bcc7d7;
					}
				}
			}
			.comment{
				p{
					&:first-child{
						margin:6px 0px 13px 42px;
						font-size:14px;
						color:#666;
						line-height:22px;
					}
					&:last-child{
						margin-left:42px;
						line-height:16px;
						&:hover{
							span:last-child{
								color:#ccc;
							}
						}
						span{
							font-size:11px;
							color:#ccc;
							margin-right:20px;
							i{
								margin-right:5px;
							}
							.active{
								color:#ff8;
							}
							&:last-child{
								margin-left:40px;
								color:#fff;
								&:hover{
									color:#007bff;
								}
							}
						}
						

					}
				}
			}
		}
	}
}

</style>