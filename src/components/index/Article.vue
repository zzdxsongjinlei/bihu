<template>
	<div class="article1">
		<ul class="article_header">
			<li>
				<a  class="active" href="">热门</a>
			</li>			
		</ul>
		<ArticleDetail />			
	</div>
</template>
<script>
	
	import ArticleDetail from '../common/ArticleDetail.vue'
	export default{
		name:'art',
		components:{
			ArticleDetail
		}
	}
</script>
<style scoped lang="scss">
ul ,li{
	list-style:none;
	padding:0px;
	margin:0px;
}
a{
	text-decoration:none;
}
.article1{
	.article_header{
		li{
			padding-left:24px;
			border-bottom:1px solid #ddf;
			.active{
					display:block;
					text-align:center;
					color:#007bff;
					width:60px;
					height:40px;
					line-height:40px;
					border-bottom:3px solid #007bff;
					font-weight:bold;
			}
			
		}

	}
	
}
</style>









