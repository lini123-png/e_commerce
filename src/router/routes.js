import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import shopCart from "@/pages/shopCart"
import Trade from "@/pages/Trade"

export default[
    {
        path: '/home',
        component: Home,
        meta: {show: true}
    },
    {
        path: '/login',
        component: Login,
        meta: {show: false}
    },
    {
        path: '/register',
        component: Register,
        meta: {show: false}
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {show: true},
        name: "search"
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        meta: {show: true},
        // name:"detail"
    },
    //重定向，访问/，立马定向到首页
    {
        path: '*',
        redirect: '/home'
    },
    //商品成功加入购物车的页面
    {
        path: "/addcartsuccess",
        component: AddCartSuccess,
        name: "addcartsuccess",
        meta: {show: true},
    },
    //跳转到购物车中
    {
        path: "/shopcart",
        component: shopCart,
        meta: {show: true},
    },
    //结算信息
    {
        path: "/trade",
        component: Trade,
        name: "trade",
        meta: {show: true},
    }


]

