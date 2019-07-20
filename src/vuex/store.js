import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state ={
	categoryDetail:{}
}
//方法
const mutations={
	increment(state,n){
		state.categoryDetail=n;
	}

}
//异步操作
const actions={
	

}
const getters={

}
export default new Vuex.Store({
	state,mutations,actions,getters
})