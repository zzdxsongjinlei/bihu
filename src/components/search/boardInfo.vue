<template>
	<div class="boardInfo">
		<ul class="board-list">
			<li v-for="(item ,key) in list" >
				<div class="board-img">
					<img :src="'https://oss02.bihu.com/'+item.boardIcon">	
				</div>
				<div class="board-info">
					<p v-html="item.boardName"></p>
					<p>{{item.brief}}</p>
					<p><span>{{item.articleCount}}人订阅</span><span>{{item.subs}}篇文章</span></p>
				</div>
				<div class="board-btn">
					<button>未订阅</button>
				</div>	
			</li>
		</ul>
	</div>
	
</template>
<script>
	export default{
		name:'boardInfo',
		data(){
			return{

			}
		},
		props:['list'],
		created(){
		}
	}

</script>
<style lang="scss" scoped>
.boardInfo{
	>a{
		margin-bottom:10px;
		font-size:13px;
		color:#007bff;
	}
	.board-list{
		li{
			overflow:hidden;
			padding:20px 0px 30px 0px;
			.board-img{
				float:left;
				width:46px;
				height:46px;
				border-radius:50%;
				overflow:hidden;
				img{
					width:100%;
					height:100%;
				}
			}
			.board-info{
				float:left;
				width:75%;
				margin-left:10px;
				overflow:hidden;
				p{  
					margin-top:5px;
					font-size:13px;
					color:#999;
					&:first-child{
						font-size:16px;
						color:#007bff;

					}
					&:last-child{
						color:#c5c5c5;
						font-size:13px;
						span{
							margin-right:10px;
						}
					}
				}
			}
			.board-btn{
				float:right;
				
				button{
					width:100px;
					height:34px;
					line-height:34px;
					text-align:center;
					color:#95b5d7;
					background:#ebf3fb;
					outline:none;
					border-radius:26px;
					border:none;
				}
				
			}

		}
	}
}
</style>