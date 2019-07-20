<template>
	<div class="articledetail">
		<ul class="article_content">
			<li  v-for="(item,key) in list" :key="key" >
				<div class="main-header">
					<router-link :to="{path:'/userdetail/'+item.author.id}">
						<div class="user-image">
							<img :src="'https://oss02.bihu.com/'+ item.author.avatarUrl">		
						</div>
					</router-link>
					<div class="user-info">
						<p>
							<router-link :to="{path:'/userdetail/'+item.author.id}">
								{{item.author.name}}
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
						<router-link :to="{path:'/shortcontentdetail/'+item.id}">
							
							{{item.content}}
							
						</router-link>						
					</p>
				</div>
				<div class="main-footer">
					<router-link :to="{path:'/shortcontentdetail/'+item.id}">
						<span><i class="el-icon-coin active"></i>{{item.income}}</span>
						<span><i class="el-icon-thumb"></i>{{item.upCount}}</span>
						<span><i class="el-icon-chat-dot-square"></i>{{item.commentCount}}</span>
					</router-link>
				</div>	
			</li>
		</ul>				
	</div>
	
</template>
<script>
	import { getShortContents } from '@/utils/api.js'
	export default{
		name:'articledetail',
		data(){
			return{
				list:[],
				pageNum:1
			}
		},
		props:[],
		created(){
			this.getShortContents();
			window.addEventListener("scroll",this.scrollMethod);
		},

		destroyed(){
			window.removeEventListener("scroll",this.scrollMethod);
		},
		methods:{
			getShortContents(){
				getShortContents({pageNum:this.pageNum}).then(response=>{
					
					if(this.pageNum<(response.data.data.total/response.data.data.pageSize)){
						
						response.data.data.list.forEach(o=>this.list.push(o));
					}
					else{

					}
				});
			},
			scrollMethod(){
				const sumH=document.body.scrollHeight||document.documentElement.scrollHeight;
				const viewH=document.documentElement.clientHeight;
				const scrollH=document.body.scrollTop||document.documentElement.scrollTop;
				if(viewH+scrollH>=sumH){
					this.pageNum++;
					this.getShortContents();
				}
			}

		}
	}
</script>
<style lang="scss" scoped>
.articledetail{
	a{
		text-decoration:none
	}
	ul,li{
		list-style:none;
	}
	.article_content{
		li{
			padding:15px 24px 30px 24px;
			border-bottom:1px solid #ddf;
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
















