<template>
<div>
	<div class="attention">
		<img src="@/assets/code.jpg">
		
		<ul class="nav">
			<li><router-link :to="{path:'/'}" >推荐</router-link>
			</li>
			<li><router-link :to="{path:'/attention'}" class="active">关注</router-link>
			</li>
			<li><router-link :to="{path:'/article'}" >微文</router-link>
			</li>
			<li  class="hander" >
				<router-link :to="{}"  :class="{active:show }">更多</router-link>
				<More @mouseover.native="handerover" @mouseleave.native="handerleave" />
			</li>
		</ul>
		<div  class="main">	
			<Attention/>	
		</div>	
	</div>
</div>
</template>
<script>
	import Attention from '@/components/index/Attention.vue'
	import More from '@/components/index/More.vue'
	export default{
		name:'attention',
		data(){
			return{
				show:false	
			}
		},
		methods:{
			handerover:function(){
				this.show=true;
			},
			handerleave:function(){
				this.show=false;
			}	
		},
		components:{
			Attention,
			More
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
.attention{
	width:80%;
	margin:20px auto;
	overflow:hidden;	
	img{
		float:right;
		width:180px;
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
		margin:0px 200px 20px 120px;	
		background:#fff;
		min-height:650px;
		position:relative;
	}	
}

</style>
