//API进行统一管理
import requests from "@/api/request";
import mockRequests from "@/api/mockRequest";
//三级联动接口
export const reqCategoryList=()=>{
    //发请求
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}
//轮播图请求数据
export const reqBannerList=()=>{
    //发请求
    return mockRequests({url:'/banner'})
}
//底部请求数据
export const reqFloorList=()=>{
    return mockRequests({url:'/floor'})
}
//获取搜索模块数据，需要传递参数，至少是一个空对象
export const reqGetSearchInfo=(params)=>requests({
    url:'/list',
    method:'post',
    data:params
})
//详情请求数据
export const reqGoodsList=(skuId)=>{
    return requests({
        url:`/item/${skuId}`,
        method:'get'})
}
//将产品添加到购物车中
export const reqShopCartList=(skuId,skuNum)=>{
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post'})
}
//购物车数据
export const reqCartList=()=>{
    return requests({
        url:'/cart/cartList',
        method:'get'})
}
//获取验证码
export const reqCode=(phone)=>{
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:'get'
    })
}
//注册的接口
export const reqRegister = (data)=>requests({url:`/user/passport/register`,method:'post',data});

//登录的接口:请求体携带参数 phone&&password
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,method:'post',data});

//获取用户登录成功以后用户信息的接口
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'});


//退出登录业务
export const reqUserLogout = ()=>requests({url:`/user/passport/logout`,method:'get'});

//获取订单信息
export const requserAddress=()=>{
    return requests({
        url:'/user/userAddress/auth/findUserAddressList',
        method:'get'
    })
}