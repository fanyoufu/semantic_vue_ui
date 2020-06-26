<template>
  <div id="app">
    <div>
      <router-link to='/headline'>标题</router-link> |
      <router-link to='/button'>按钮</router-link> |
      <router-link to='/dialog'>对话框</router-link> |
      <router-link to='/tabs'>tabs</router-link> |
      <router-link to='/slider'>轮播图</router-link> |
      <router-link to='/timeline'>时间轴</router-link> | 
      <router-link to='/progressBar'>进度条</router-link>
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
     
    }
  }
}
</script>

<style>
#app {
  padding:50px;
}
</style>
