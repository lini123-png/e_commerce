import {requserAddress} from "@/api"
const state={
    addressInfo:{}
};
const mutations={
    GETADDRESSINFO(state,addressInfo){
        state.addressInfo=addressInfo
    }
};
const actions={
    //获取用户地址信息
    async getAddressInfo({ commit}) {
        let result = await requserAddress();
        if (result.code === 200) {
            commit('GETADDRESSINFO', result.data);
        }
    },

};
const getters={
};
export default {
    state,
    mutations,
    actions,
    getters
}
