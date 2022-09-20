import {reqGoodsList,reqShopCartList} from "@/api"
import {SET_USERID} from "@/utils/USER_ID"
const state={
    goodsInfo:{},
    //游客的临时身份
    uuid_token:SET_USERID()
};
const mutations={
    GETGOODSINFO(state,goodsInfo){
        state.goodsInfo=goodsInfo;
    }

};
const actions={
    //获取产品信息
    async getGoodsInfo({ state, commit, dispatch }, skuId) {
        //商品详情请求，需要携带商品ID
        let result = await reqGoodsList(skuId);
        if (result.code === 200) {
            commit('GETGOODSINFO', result.data);
        }
    },
    //将产品添加到购物车
    async addOrUpdateCart({ commit }, {skuId, skuNum}) {
        //商品详情请求，需要携带商品ID
        let result = await reqShopCartList(skuId,skuNum);
        if (result.code === 200) {
            //表示加入购物车成功，Promise只需要一个非空字符串就表示成功
            return "ok"
        }else{
            //表示失败，返回一个失败对象
            return Promise.reject(new Error("faile"))
        }
    },
};
const getters={
    categoryView(state){
        return state.goodsInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||{}
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}
