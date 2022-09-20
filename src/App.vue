<template>
  <div id="outer">
    <Header></Header>
<!--    配置好的路由需要展示-->
    <router-view></router-view>
<!--    只在home、search中显示，其他页面不显示，通过路由元信息操作-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Header,Footer
  },
  mounted() {
    this.$store.dispatch('categoryList')
  }

}
</script>

<style>

</style>
