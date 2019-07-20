<template>
	<div class="more">
		<div class="diag"></div>
		<el-card shadow="always">
			<div class="more-box">
				<div class="more-menu-text">
					<span>已订阅</span>
				</div>
				<div class="more-menu-box1">
					
				</div>
				<div class="more-menu-text">
					<span>热门</span>
				</div>
				<div class="more-menu-box2">
					<div class="item" v-for="(item ,key) in list">
						<router-link :to="{path:'/category/'+item.code}">
							{{item.code}}
						</router-link>
					</div>
				</div>
			</div>
	     </el-card>		
	</div>
</template>
<script>
	import {getQueryBoardList}  from '@/utils/api.js'
	export default{
		name:'more',
		data(){
			return{
				list:[]
			}
		},
		created(){
			this.getQueryBoardList();
		},
		methods:{
			getQueryBoardList:function(){
				getQueryBoardList().then(response=>{
					this.list=response.data.data.noSubList;
				});
			}
		}
	}
</script>
<style lang="scss">
	.more{
		.el-card{
			.el-card__body{
				padding:20px 0px;
			}
		}
	}
</style>
<style scoped lang="scss">
.more{
	position:relative;
	.diag{
		position:absolute;
		width:35px;
		background:#fff;
		height:35px;
		transform:rotate(45deg);
		-ms-transform:rotate(45deg); 
		-webkit-transform:rotate(45deg);
		top:60px;
		left:-18px;
	}
	.el-card{
		width:620px;
		
		.more-menu-text{
			font-size:16px;
			margin-left:20px;
			padding:13px 0px;
			text-align:left;
		}
		.more-menu-box2{
			.item{
				width:100px;
				text-align:center;
				margin-bottom:12px;
				margin-left:20px;
				display:inline-block;
				outline:none;
				a{	display:inline-block;
					background:#ebf3fb;
					color:#95b5d7;
					height:35px;
					line-height:35px;
					color:#3b4651;
					font-size:14px;
					text-decoration:none;
					border-radius:2px;
					width:100%;
				
					&:hover{
						color:#fff;
						background:#007bff;
					}
				}
			}
		}
	}
}
</style>