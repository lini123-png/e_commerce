import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import Home from "./Home"
import Search from "./Search"
import Detail from "./Detail"
import ShortCart from "./ShortCart"
import User from "./User"
import Trade from "./Trade"

export default new Vuex.Store({
    //模块式开发
    modules:{
        Home,
        Search,
        Detail,
        ShortCart,
        User,
        Trade
    }

});