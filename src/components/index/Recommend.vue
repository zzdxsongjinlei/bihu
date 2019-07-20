<template>
	<div class="recommend">
		<ul class="recommend_header">
			<li>
				<a  class="active" href="">热门</a>
			</li>	
		</ul>
		<RecommendDetail  />
	</div>
</template>
<script>
	import RecommendDetail from '../common/RecommedDetail.vue'
	export default{
		name:'recommend',
		components:{
			RecommendDetail
		}
	}
</script>
<style scoped lang="scss">
ul >li{
	list-style:none;
}
a{
	text-decoration:none;
}

.recommend{
	.recommend_header{
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














