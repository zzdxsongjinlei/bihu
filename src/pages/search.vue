<template>
<div>
	<div class="search">
		<el-row type="flex" justify="space-between">
			<el-col :span="2">
				<div>搜索结果</div>
			</el-col>
			<el-col :span="17">
				<el-tabs v-model="tab">
					<el-tab-pane label="全部"  name="both">
						<div class="both" v-for="(item,name,index) in list"  :key="index">
							<h3>{{name|checktab}}</h3>
							<articleInfo v-if="name=='articleInfo'" :list="item.articleList" :res="rs" />
						    <boardInfo v-if="name=='boardInfo'" :list="item.boardList" :res="rs" />
						    <shortContentInfo v-if="name=='shortContentInfo'" :list="item.shortContentList"  :res="rs" />
						   	<userInfo v-if=" name=='userInfo'" :list="item.userList" :res="rs" />
						</div>

						
					</el-tab-pane>
					<el-tab-pane :label="name|checktab" :name="name" v-for="(item,name,index) in list" :key="index">
						<articleInfo v-if="name=='articleInfo'" :list="articleInfo" />
						<boardInfo v-if="name=='boardInfo'" :list="boardInfo.boardList" />
						<shortContentInfo v-if="name=='shortContentInfo'" :list="shortContentInfo"/>
						<userInfo v-if=" name=='userInfo'" :list="userInfo"/>
					</el-tab-pane>
				</el-tabs>
			</el-col>
			<el-col :span="4">
				<img src="../assets/code.jpg">
			</el-col>
		</el-row>

	</div>
	<Footer/>

</div>
</template>
<script>
	import { search } from '@/utils/api.js'
	import articleInfo from '../components/search/articleInfo.vue'
	import boardInfo from '../components/search/boardInfo.vue'
	import shortContentInfo from '../components/search/shortContentInfo.vue'
	import userInfo from '../components/search/userInfo.vue'
	import Footer from '../components/common/Footer.vue'
	export default{
		name:'search',
		data(){
			return{
				rs:'',
				list:{},
				tab:'both',
				articleInfo:[],
				userInfo:[],
				shortContentInfo:[],
				boardInfo:[],
				pageNum:1
			}
		},
		created(){
			this.rs=this.$route.query.query;
			this.search();
			window.addEventListener('scroll',this.scrollMethod);
		},
		beforeRouteUpdate(to,from,next){
			this.rs=to.query.query;
			if(to.query.type=='c'){
				this.tab='articleInfo';
			}
			if(to.query.type=='s'){
				this.tab='shortContentInfo';
			}
			if(to.query.type=='u'){
				this.tab='userInfo';
			}
			this.search();
			next();
		},
		filters:{
			checktab(value){
				switch(value){
					case 'userInfo' :
					return  '用户';
					break;
					case 'articleInfo':
					return '长文';
					break;
					case 'shortContentInfo':
					return '微文';
					break;
					case 'boardInfo':
					return '板块';
					break;
				}

			}
		},
		watch:{
			tab:function(){
				this.search();
			}
		},
		destroyed(){
			window.removeEventListener("scroll",this.scrollMethod);
		},
		methods:{
			scrollMethod(){
				const sumH=document.body.scrollHeight||document.documentElement.scrollHeight;
				const viewH=document.documentElement.clientHeight;
				const scrollH=document.body.scrollTop||document.documentElement.scrollTop;
				if(viewH+scrollH>=sumH){
					this.pageNum++;
					this.search();
				}
			},
			search:function(){
				if(this.tab=='both'){
					search({key:this.rs,type:[]}).then(response=>{		
					this.list=response.data.data;
				});
					
				}
				else if(this.tab=='articleInfo'){
					let abc=['c'];
					search({key:this.rs,type:abc,pageNum:this.pageNum}).then(response=>{
						response.data.data.articleInfo.articleList.forEach(o=>{
							this.articleInfo.push(o);
						});
					});	
				}
				else if(this.tab=='userInfo'){
					let abc=['u'];
					search({key:this.rs,type:abc,pageNum:this.pageNum}).then(response=>{	
						response.data.data.userInfo.userList.forEach(o=>{
							this.userInfo.push(o);
						})				
					});	
				}
				else if(this.tab=='shortContentInfo'){
					let abc=['s'];
					search({key:this.rs,type:abc,pageNum:this.pageNum}).then(response=>{
						response.data.data.shortContentInfo.shortContentList.forEach(o=>{
							this.shortContentInfo.push(o);
						});
					});	
				}
				else if(this.tab=='boardInfo'){
					this.boardInfo=this.list.boardInfo;
				}				
			}

		},
		components:{
			articleInfo,
			boardInfo,
			shortContentInfo,
			userInfo,
			Footer
		}

	}
</script>
<style lang="scss">
	.search{
		.el-row{
			.el-tabs__header{
			
				.el-tabs__nav-wrap{
					&:after{
						height:0px;
						width:0px;
					}
				}
				.el-tabs__item{
					font-size:16px;
					font-weight:bold;
				}
				
			}
		}
	}
</style>
<style lang="scss" scoped>
	.search{
		width:80%;
		margin:20px auto;
		.el-row{
			.el-col-2{
				font-size:14px;
				text-align:center;
				color:#fff;
				background:#007bff;
				height:34px;
				line-height:34px;
			}
			.el-col-17{
				background:#fff;
				padding:10px 30px;
				.both{
					border-bottom:1px solid #ddf;
					h3{
					font-size:17px;
					padding-top:30px;
					color:#999;
					}
				}
			}
			.el-col-4{
				img{
					width:100%;
				}

			}
		}
	}
</style>