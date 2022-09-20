import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
//测试三级联动是否返回数据
// import {reqCategoryList} from "@/api";
// reqCategoryList();
//测试轮播图有没有返回数据
// import {reqBannerList} from "@/api";
// reqBannerList();
//测试搜索模块有没有返回数据
// import {reqGetSearchInfo} from "@/api"
// reqGetSearchInfo();
//测试商品详情有木有返回数据
// import {reqGoodsList} from "@/api";
// console.log(reqGoodsList(5))
//测试是否加入购物车成功
// import {reqShopCartList} from "@/api";
// console.log(reqShopCartList(2,1))
//测试验证码接口
// import {reqCode} from "@/api"
// console.log(reqCode('12345678941'))
// 测试地址信息接口
// import {requserAddress} from "@/api"
// console.log(requserAddress())

import store from "@/store"
//引入mockServe
import "@/mock/mockServe"
//引入轮播图
import "swiper/css/swiper.css"
//将轮播图注册成全局组件
import Carousel from "@/components/Carousel"
Vue.component(Carousel.name,Carousel)
//将分页器注册为全局组件
import Pagination from "@/components/Pagination"
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store:store,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
