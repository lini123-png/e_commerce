import {reqGetSearchInfo} from "@/api"
const state={
    searchList:{}
};
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
const actions={
    async getSearchList(state,params={}){
        //params形参是当用户派发action时，第二个参数传递过来，至少是一个空对象
        let result=await reqGetSearchInfo(params);
        if(result.code===200){
            state.commit("GETSEARCHLIST",result.data)
        }
    }
};
//简化仓库数据，然后在获取组件数据的时候比较方便
const getters={
    attrsList(state){
        //如果网速较慢至少返回一个空数组
        return state.searchList.attrsList||[]
    },
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },

};
export default {
    state,
    mutations,
    actions,
    getters
}
