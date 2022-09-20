//引入mock模块
import Mock from "mockjs"
//将JSON数据引入，在webpack中图片和JSON数据默认对外暴露
import banner from "./banner.json"
import floor from "./floor.json"

//第一参数请求地址，第二个请求数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})