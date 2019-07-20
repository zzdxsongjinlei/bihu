<template>
	<div class="userdetail">
		<div class="f"></div>
		<div class="user">
			<div class="user-icon">
				<img :src="'https://oss02.bihu.com/'+user.userIcon">
			</div>
			<div class="user-info">
				<p>{{user.userName}}</p> 
				<p>{{user.info}}</p>
			</div>
			<div class="user-btn">
				<button>关注</button>
			</div>	
		</div>
		<el-tabs v-model="tab">
		    <el-tab-pane :label="'长文('+user.articleCount+')'"  name="article"> 
		    	后台使用用户id取不出长文、微文、关注和粉丝的详细内容，所以用户详情页只能看到用户的基本信息和精选长文页面
		    </el-tab-pane>
		    <el-tab-pane :label="'微文('+user.shortContentCount+')'"  name="short">											后台使用用户id取不出长文、微文、关注和粉丝的详细内容，所以用户详情页只能看到用户的基本信息和精选长文页面
		    </el-tab-pane>
		    <el-tab-pane :label="'精选('+user.choiceCount+')'"  name="choices">
		    	<RecommedDetail :list="choices"/>
		    </el-tab-pane>
		    <el-tab-pane :label="'关注('+user.follows+')'" name="follows">														后台使用用户id取不出长文、微文、关注和粉丝的详细内容，所以用户详情页只能看到用户的基本信息和精选长文页面</el-tab-pane>
		    <el-tab-pane :label="'粉丝('+user.fans+')'" name="fans">															后台使用用户id取不出长文、微文、关注和粉丝的详细内容，所以用户详情页只能看到用户的基本信息和精选长文页面</el-tab-pane>
  		</el-tabs>
	</div>
</template>
<script>
	import { getUserDetail ,getUserChoices } from '@/utils/api.js';
	import RecommedDetail from '../components/common/RecommedDetail.vue'
	export default{
		name:'userdetail',
		data(){
			return{
				tab:'choices',
				userid:'',
				url:'',
				user:[],
				pageNum:1,
				choices:[],
				choicesurl:''
			}
		},
		created(){
			this.userid=this.$route.params.id;
			this.choicesurl=this.userid+'/choices?pageNum='+this.pageNum;
			this.getUserDetail();
			this.getUserChoices();
			window.addEventListener("scroll",this.scrollMethod);

		},
		destroyed(){
			window.removeEventListener("scroll",this.scrollMethod);
		},
		methods:{
			getUserDetail(){
				getUserDetail({queryUserId:this.userid}).then((response)=>{
					this.user=response.data.data;
				});
			},
			getUserChoices(){
				
				getUserChoices(this.choicesurl).then(response=>{
					response.data.data.list.forEach(o=>{
						this.choices.push(o);
					});	
				});
			},
			scrollMethod(){
				const sumH=document.body.scrollHeight||document.documentElement.scrollHeight;
				const viewH=document.documentElement.clientHeight;
				const scrollH=document.body.scrollTop||document.documentElement.scrollTop;
				if(viewH+scrollH>=sumH){
					this.pageNum++;
					this.choicesurl=this.userid+'/choices?pageNum='+this.pageNum;
					this.getUserChoices();
				}
			}	

		},
		components:{
			RecommedDetail
		}
	}
</script>
<style lang="scss">
	.userdetail{
		.el-tabs__header{
			margin-bottom:30px;
		}
		.el-tabs__content{
			.el-tabs__item{
				padding:0px 40px;
				line-height:40px;
			}	
		}
	}
</style>
<style lang="scss" scoped>
div{
	box-sizing:border-box;
}
.userdetail{
	position:relative;
	.f{
		height:20px;
		background:#f6f8f9;
		position:absolute;
		top:160px;
		width:2000px;

	}
	.user{
		width:60%;
		margin:20px auto 0px auto;
		background:#fff;
		padding:30px 40px ;
		position:relative;
		overflow:hidden;
		.user-icon{
			width:60px;
			height:60px;
			border-radius:50%;
			overflow:hidden;
			float:left;
			img{
				width:100%;
			}
		}
		.user-info{
			float:left;
			margin-left:20px;
			p{
				&:first-child{
					font-size:18px;
					color:#212529;
				}
				&:last-child{
					margin-top:5px;
					font-size:12px;
					color:#c7c7cc;
				}
			}
		}
		.user-btn{
			float:right;
			button{
				position:absolute;
				top:30px;
				right:58px;
				background:#ebf3fb;
				border:none;
				color:#95b5b7;
				height:26px;
				line-height:26px;
				padding:0 3%;
				font-size:14px;
				border-radius:100px;
				outline:none;
				&:hover{
					color:#fff;
					background:#007bff;
				}
			}
		}
	}
	.el-tabs{
		width:60%;
		padding:0px 40px 40px 20px;
		margin:0px auto;
		background:#fff;

		
	}

}
</style>