<template>
	<div>
		<div class="living">
			<el-row :gutter="20">
				<el-col :span="8" v-for="(item,index) in list" :key="index" >
					
					<el-card>
						<img :src="img[index]">
						<div>
							<img :src="'https://oss02.bihu.com/'+item.mainSpeaker.userIcon">
							<p>{{item.name}}</p>
							<span>{{item.mainSpeaker.userName}}</span>
						</div>
					</el-card>

				</el-col>
			</el-row>
			
		</div>
		<Footer/>
	</div>
</template>
<script>
	import Footer from '../components/common/Footer.vue'
	import {getActivityList} from '../utils/api.js'
	export default{
		name:'living',
		data(){
			return{
				list:[],
				img:['https://oss02.bihu.com/image/20190711/a1e1cdc8abd609c8f0b43c4c725fbcb5_HEYDAKRTHA3A.jpeg','https://oss02.bihu.com/image/20190704/fd8c049ea810189898104941eaef1ae0_HEYDAKRTHA3A.png','https://oss02.bihu.com/image/20190626/701575c4f055453273af5424c4b1556f_HEYDAKRTHA3A.jpg']
			}
		},
		created(){
			//因为接口的问题无法一块进行调用，所以分三次调用methods里面的函数，		
			this.getActivityList('106');
			this.getActivityList('105');
			this.getActivityList('104');
		},
		methods:{
			getActivityList(data){	
				var _this=this;
				getActivityList(data).then(function(response){
					_this.list.push(response.data.data);
					//调用的数据添加在list里面
				});
			}
		},
		components:{
			Footer
		}
	}
</script>
<style lang="scss">
.living{
	.el-card__body{
		padding:0px;
	}
}
</style>
<style scoped lang="scss">
	.living{
		width:80%;
		margin:20px auto;
		min-height:550px;
		.el-row{
			.el-col{
				.el-card__body{
					padding:0px;
					>img{
						width:100%;
					}
					>div{
						>img{
							width:40px;
							border-radius:50%;
							margin:5px;
							float:left;
						}
						span{
							&:last-child{
								font-size:8px;
							}
						}
					}
				}
			}
		}
	}
</style>