<template>
	<div>
		<div class="downloadApp">
			<div class="btnBox">
				<h3>币圈资讯&nbsp;&nbsp;&nbsp;&nbsp;一首掌握</h3>
				<el-card>
					<p>
						<a href="">ios下载</a>
						<a href="">Android下载</a>
					</p>
					<img src="https://cdn.bihu-static.com/bihu-pc/static/images/7741553478990_.pic_hd.78b7f211.jpg">
				</el-card>

			</div>
			
		</div>
		<Footer/>
	</div>
</template>
<script>
	import Footer from '../components/common/Footer.vue'
	export default{

		name:'downloadApp',
		data(){
			return{}
		},
		components:{
			Footer

		}
	}
</script>
<style scoped lang="scss">
.downloadApp{
		background:url('https://cdn.bihu-static.com/bihu-pc/static/images/7691553478837_.pic_hd.04a38a03.jpg') no-repeat 50%;
		-webkit-background-size:auto 150% ;
		width:80%;
		margin:20px auto;
		height:520px;
		position:static;
		.btnBox{
			position:absolute;
			top:37%;
			left:16%;
			width:470px;
			height:270px;
			h3{ text-align:center;
				font-size:26px;
				line-height:70px;
				height:70px;
			}
			.el-card{
				width:470px;
				height:200px;
				border-radius:10px;

				p{  float:left;
					margin-top:20px;

					a{	text-decoration:none;
						text-align:center;
						font-size:16px;
						line-height:40px;
						width:210px;
						height:40px;
						color:#fff;
						background:#007bff;
						display:block;
						border-radius:20px;
						margin-top:20px;
					}
				}
				img{
					
					width:140px;
					margin-top:10px;
					margin-left:40px;
				}
			}
		}
	}
</style>