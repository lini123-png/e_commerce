const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验，以防定义一个变量，没有使用就报错
  lintOnSave:false,
  //配置代理跨域
  devServer:{
    proxy:{
      "/api":{
        target:"http://gmall-h5-api.atguigu.cn"
      }
    }
  }
})
