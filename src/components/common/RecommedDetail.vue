<template>
	<div class=" recommenddetail">
		<ul class="recommend_content">
			<li  v-for="(item,key) in list" :key="key">
				<div class="main-header">
					<div class="user-img">
						<router-link :to="{path:'/userdetail/'+item.userId}">
							<img :src="'https://oss02.bihu.com/'+item.userIcon">
						</router-link>
					</div>
					<div class="user-info">
						<p>
							<router-link :to="{path:'/userdetail/'+item.userId}">
								{{item.userName}}
							</router-link>
						</p>
						<p>{{item.createTime|timeHander}}</p>				
					</div>	
					<span><i class="el-icon-more"></i></span>
				</div>
				<div class="main-main">
					<div class="main-img">
						<router-link :to="{path:'/articledetail/'+item.id}">
							<img :src="'https://oss02.bihu.com/'+item.snapimage">
						</router-link>
					</div>
					<div>
						<p>
							<router-link :to="{path:'/articledetail/'+item.id}">
							 	{{item.title}}
							</router-link>
						</p>
						<p>
							<router-link :to="{path:'/articledetail/'+item.id}" v-html="item.snapcontent">
							</router-link>
						</p>						
					</div>
				</div>
				<div class="main-footer">
					<router-link :to="{path:'/articledetail/'+item.id}">
						<span><i class="el-icon-coin active"></i>{{item.money}}</span><span><i class="el-icon-thumb"></i>{{item.ups}}</span><span><i class="el-icon-chat-dot-square"></i>{{item.cmts}}</span>
					</router-link>
				</div>
				
			</li>
		</ul>			
	</div>
</template>
<script>
	import{ getHotArtList } from '@/utils/api.js'
	export default{
		name:'recommenddetail',
		data(){
			return{
				list:[],
				pageNum:1,
			}
		},
		props:['code'],
		created(){
			this.getHotArtList();
			window.addEventListener("scroll",this.scrollMethod);
			
			
		},
		watch:{
			$route(to, from){
				if(to.params.id){
					this.code=to.params.id;
					this.list=[];
					this.getHotArtList();
				}				
			}

		},
		destroyed(){
			window.removeEventListener("scroll",this.scrollMethod);
		},
		methods:{
			getHotArtList(){
				getHotArtList({pageNum:this.pageNum,code:this.code}).then((response)=>{
				  if(this.pageNum<(response.data.data.total/response.data.data.pageSize)){
						response.data.data.list.forEach(o=>this.list.push(o))
					}
				  else{
				  	alert('已经到底了');
				  }
				});
			},
			scrollMethod(){
				const sumH=document.body.scrollHeight||document.documentElement.scrollHeight;
				const viewH=document.documentElement.clientHeight;
				const scrollH=document.body.scrollTop||document.documentElement.scrollTop;
				if(viewH+scrollH>=sumH){
					this.pageNum++;
					this.getHotArtList();
				}

			}	

		},
	}
</script>
<style lang="scss" scoped>
a{
	text-decoration:none;

}
ul,li{
	list-style:none;
}
.recommenddetail{
	.recommend_content{
		li{
			padding:15px 24px 30px 24px;
			border-bottom:1px solid #ddf;
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










