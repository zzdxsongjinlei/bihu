<template>
<div>
	<div class="category">		
		<div class="right">
			<div class="category-top">
				<div class="category-top-icon">
					<router-link :to="{path:'/boarddetail/'+categoryDetail.code}">
						<img :src="'https://oss02.bihu.com/'+categoryDetail.profilePic" >
					</router-link>
				</div>
				<p><router-link :to="{path:'/boarddetail/'+categoryDetail.code}">{{categoryDetail.code}}</router-link></p>				
			</div>
			<div class="category-center">
				<ul>
					<li>
						<p>订阅</p>
						<p>{{categoryDetail.subs}}</p>
					</li>
					<li>
						<p>文章</p>
						<p>{{categoryDetail.arts}}</p>
					</li>
				</ul>				
			</div>
			<div class="category-text">
				<p>{{categoryDetail.info}}</p>
				<button>订阅</button>				
			</div>			
		</div>		
		<ul class="nav">
			<li><router-link :to="{path:'/'}" >推荐</router-link>
			</li>
			<li><router-link :to="{path:'/attention'}">关注</router-link>
			</li>
			<li><router-link :to="{path:'/article'}">微文</router-link>
			</li>
			<li v-if="code">
				<router-link :to="{}" class="active">{{code}}</router-link>
			</li>
			<li  class="hander" >
				<router-link :to="{}"  :class="{active:show }">更多</router-link>
				<More @mouseover.native="handerover" @mouseleave.native="handerleave" />
			</li>
		</ul>
		<div  class="main">	
			<ul class="main-header">
				<li><router-link :to="{path:''}" class="active">热门</router-link></li>
				<li><router-link :to="{}">最新</router-link></li>
			</ul>

			<RecommedDetail  :code="code" />
		</div>	
	</div>
</div>
</template>
<script>
	import More from '@/components/index/More.vue'
	import { getBoardInfo } from '@/utils/api.js'
	import RecommedDetail from '@/components/common/RecommedDetail.vue'
	export default{
		name:'category',
		data(){
			return{
				show:false,
				code:''	,
				categoryDetail:{},
			}
		},
		created(){
			this.code=this.$route.params.id;
			this.getBoardInfo();
		},
		beforeRouteUpdate(to,from,next){
			this.code=to.params.id;	
			this.getBoardInfo();	
			next();
		},
		methods:{
			handerover:function(){
				this.show=true;
			},
			handerleave:function(){
				this.show=false;
			},	
			getBoardInfo:function(){
				getBoardInfo({code:this.code}).then(response=>{
					this.categoryDetail=response.data.data;
				});
			}

		},
		components:{
			More,
			RecommedDetail
		}

	}
</script>
<style lang="scss">
ul,li{
	list-style:none;
	padding:0px;
	margin:0px;
}
a{
	text-decoration:none;
}
.category{
	width:80%;
	margin:20px auto;
	overflow:hidden;	
	.right{
		background:#fff;
		padding:30px 20px;
		float:right;
		width:220px;
		overflow:hidden;
		.category-top{
			text-align:center;
			.category-top-icon{
				width:60px;
				height:60px;
				border-radius:50%;
				overflow:hidden;
				display:inline-block;
				margin-bottom:8px;
				img{
					width:100%;
					height:100%;
				}
			}
			p{
				text-align:center;
				font-size:16px;
				
				a{
					color:#5a6169;

				}

			}
		}
		.category-center{
			padding:20px 10px;
			margin-top:10px;
			ul{
				overflow:hidden;
				li{
					float:left;
					width:49%;
					&:first-child{
						border-right:1px solid #ddd;
					}
					p{
						font-size:14px;
						text-align:center;
						padding:3px 0px;
						text-align:center;
						&:first-child{
							color:#bcc7d7;
						}

					}
				}
			}
		}
		.category-text{
			p{
				font-size:14px;
				line-height:22px;
				color:#5a6169;
			}
			button{
				margin-top:20px;
				height:40px;
				line-height:40px;
				width:100%;
				border-radius:22px;
				color:#95b5d7;
				font-size:14px;
				background:#ebf3fb;
				border:none;
				outline:none;
				text-align:center;
				&:hover{
					color:#fff;
					background:#409eff;
				}


			}
		}
	}
	.nav{
		float:left;
		width:100px;
		.hander{
			position:relative;
			>.more{
				left:120px;
				z-index:1;
				top:-97px;
				display:none;
			}
			&:hover{
				.more{
					display:block;

				}
			}
		}
		li{
			margin-bottom:3px;
			.active{
					background:#409eff;
					color:#fff;
			}
			a{
				display:inline-block;
				text-align:center;
				width:100px;
				padding:10px 0px;
				color:#3b4651;
				
				&:hover{
					background:#409eff;
					color:#fff;
				}
			}
		}
	}
	.main{
		margin:0px 280px 20px 120px;	
		background:#fff;
		min-height:650px;
		position:relative;
		>.main-header{
			overflow:hidden;
			border-bottom:1px solid #ddf;
			li{
				padding-left:24px;
				
				float:left;
				a{
					display:inline-block;
					text-align:center;
					width:60px;
					height:40px;
					line-height:40px;
					font-weight:bold;
					color:#bcc7d7;

				}
				.active{
						color:#007bff;
						border-bottom:3px solid #007bff;
						
				}	
			}	
		}
	}	
}

</style>

