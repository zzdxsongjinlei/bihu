<template>
  <div id="app"> 
    <Header /> 
    <div class="main">
      <router-view/>  
    </div>
    
  </div>
</template>

<script>
  import Header from './components/common/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f6f8f9;
}
*{
  padding:0px;
  margin:0px;
}

</style>
