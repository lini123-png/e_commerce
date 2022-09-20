import {reqCategoryList} from "@/api"
import {reqBannerList,reqFloorList} from "@/api"
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList; //修改state的数据
    },
    BANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList=floorList
    }
};
const actions={
    async categoryList({commit}){
        let result=await reqCategoryList();//返回是Promise对象，需要用await获取到成功后的结果，而await和async是cp一起使用
        if(result.code===200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async bannerList(state){
        let result=await reqBannerList();
        if(result.code===200){
            state.commit("BANNERLIST",result.data)

        }
    },
    async floorList(state){
        let result=await reqFloorList();
        if(result.code===200){
            state.commit("FLOORLIST",result.data)
        }
    }
};
const getters={};
export default {
    state,
    mutations,
    actions,
    getters
}
