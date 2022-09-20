//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
//引入进度条的颜色
import "nprogress/nprogress.css"

const requests=axios.create({
    baseURL:"/mock",
    timeout:5000
});
//请求拦截器：在发请求时做一些事情
requests.interceptors.request.use((config)=>{
    //config：配置对象，有headers请求头信息
    nprogress.start();//进度条开始动
    return config
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数
    nprogress.done();//进度条结束
    return res.data
},(error)=>{
    //失败的回调函数
    return Promise.reject(new Error('faile'))
});
export default requests;
