<template>
	<div class="userInfo">
		<ul>
			<li v-for="(item,key) in list" :key="key">
				<div class="user-icon">
					<router-link :to="{path:'/userDetail/'+item.userId}">
						<img :src="'https://oss02.bihu.com/'+item.userIcon" >
					</router-link>
					
				</div>
				<div class="user-info">

					<p v-html="item.userName">
						<router-link :to="{path:'/userDetail/'+item.userId}">
						</router-link>
					</p>
					<p>{{item.brief}}</p>
					<p><span>{{item.fans}}人关注</span> <span>{{item.articleCount}}篇文章</span></p>
				</div>
				<div class="user-btn">
					<button>未关注</button>	
				</div>
			</li>
		</ul>
		<div class="view">
			<router-link :to="{path:'/search',query:{query:this.res,type:'u'}}">查看更多用户</router-link>	
			
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'userInfo',
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
.userInfo{
	a{
		text-decoration:none;
	}
	ul li{
		list-style:none;	
		overflow:hidden;
		padding:20px 0px 30px 0px;
	}
	.view{
		margin-bottom:10px;
		a{
		
		font-size:13px;
		color:#007bff;
		}
	}
	
	.user-icon{
		float:left;
		width:46px;
		height:46px;
		border-radius:50%;
		overflow:hidden;
		img{
			width:100%;
		}
	}
	.user-info{
		width:70%;
		float:left;
		margin-left:10px;
		p{	
			font-size:13px;
			color:#999;
			margin-bottom:2px;
			&:first-child{
				font-size:16px;
				color:#213529;
			}
			&:last-child{
				color:#c5c5c5;

			}
		}
	}
	.user-btn{
		float:right;
		button{
			width:100px;
			height:34px;
			color:#95b5d7;
			background:#ebf3fb;
			border:none;
			border-radius:36px;
		}
	}

}


</style>