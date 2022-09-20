import {reqCartList} from "@/api"
const state={
    cartList:[]
};
const mutations={
    GETSHOPCART(state,cartList){
        state.cartList=cartList
    }
};
const actions={
    //获取购物车信息
    async getShopCart({ commit}) {
        let result = await reqCartList();
        if (result.code === 200) {
            commit('GETSHOPCART', result.data);
        }
    },

};
const getters={
    CartInfo(state){
        return state.cartList[0]||{}
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}
