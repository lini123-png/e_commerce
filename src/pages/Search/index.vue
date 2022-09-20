<template>
    <div class="outer">
        <!-- 窗口侧边栏 -->
        <div class="toolbar toolbar-wrap">
            <div class="content"></div>
            <div class="but list"></div>
            <div class="toolist">
                <div class="pull">
                    <i class="tab-ico vip"></i>
                    <em class="tab-text">商品会员</em>
                </div>
                <div class="pull">
                    <i class="tab-ico cart"></i>
                    <em class="tab-text">购物车</em>
                </div>
                <div class="pull">
                    <i class="tab-ico follow"></i>
                    <em class="tab-text">我的关注</em>
                </div>
                <div class="pull">
                    <i class="tab-ico history"></i>
                    <em class="tab-text">我的足迹</em>
                </div>
                <div class="pull">
                    <i class="tab-ico message"></i>
                    <em class="tab-text">我的消息</em>
                </div>
                <div class="pull">
                    <i class="tab-ico jimi"></i>
                    <em class="tab-text">咨询</em>
                </div>
            </div>
            <div class="back pull">
                <i class="tab-ico top"></i>
                <em class="tab-text">顶部</em>
            </div>
        </div>
        <!-- 商品分类导航 -->
        <TypeNav></TypeNav>
        <!--list-content-->
        <div class="main">
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <!--面包屑处理-->
                    <ul class="fl sui-tag">
                        <li class="with-x" v-if="searchParams.categoryName">{{searchParams.categoryName}}<i @click="removeTag">×</i></li>
                        <li class="with-x" v-if="searchParams.keyword">{{searchParams.keyword}}<i @click="removeKeyword">×</i></li>
                        <!-- 品牌的面包屑   -->
                        <li class="with-x" v-if="searchParams.trademark">{{searchParams.trademark.split(":")[1]}}<i @click="removeTrademark">×</i></li>
                        <!--   属性的面包屑-->
                        <li class="with-x" v-for="(attrs,index) in searchParams.props" :key="index">{{attrs.split(":")[1]}}<i @click="removeAttr(index)">×</i></li>
                    </ul>
                </div>
                <!--selector-->
                <SearchSelector @trademarkInfo="trademarkInfo" @attrInfo="attrInfo"></SearchSelector>
                <!--details-->
                <div class="details clearfix">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li :class="{active:isSyn}" @click="changeOrder('1')">
                                    <a>综合 <span v-show="isSyn" class="fas" :class="{'fa-long-arrow-alt-down':isDesc,'fa-long-arrow-alt-up':isAsc}"></span></a>
                                </li>
                                <li :class="{active:isPrice}" @click="changeOrder('2')">
                                    <a>价格 <span v-show="isPrice" class="fas" :class="{'fa-long-arrow-alt-down':isDesc,'fa-long-arrow-alt-up':isAsc}"></span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-5" v-for="(goods,index) in goodsList" :key="goods.id">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <router-link :to="`/detail/${goods.id}`" ><img :src="goods.defaultImg" /></router-link>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>{{goods.price}}.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">{{goods.title}}</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <!--分页器-->
                    <Pagination :pageNo=searchParams.pageNo :pageSize=searchParams.pageSize :total=total :continues="5" @getPageno="getPageno"></Pagination>
                </div>
                <!--hotsale-->
                <div class="clearfix hot-sale">
                    <h4 class="title">热卖商品</h4>
                    <div class="hot-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_01.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>金属A面，360°翻转，APP下单省300！</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_04.png" />
                                    </div>
                                    <div class="attr">
                                        <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4068.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有20人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TypeNav from "@/components/TypeNav/index";
    import SearchSelector from "@/pages/Search/SearchSelector/index";
    import {mapGetters,mapState} from "vuex"
    export default {
        name: "Search",
        components: {SearchSelector, TypeNav},
        data(){
            return{
                //带给服务器的参数
                searchParams:{
                    //一级分类的ID
                    category1Id:"",
                    //二级分类的ID
                    category2Id:"",
                    //三级分类的ID
                    category3Id:"",
                    //分类的名字
                    categoryName:"",
                    //关键字
                    keyword:"",
                    //排序，接口中只有4中情况，1：综合，2：价格，desc：降序，asc：升序,默认：综合|降序
                    order:"1:desc",
                    //分页器，当前第几页
                    pageNo:1,
                    //每一页展示多少数据
                    pageSize:3,
                    //平台售卖属性
                    props:[],
                    //品牌
                    trademark:""
                }
            }
        },
        //在挂载完毕之间，将参数进行合并传给searchParams
        beforeMount() {
            // this.searchParams.category1Id=this.$route.query.category1Id
            //一个个赋值麻烦，用ES6中的Object.assign，合并对象
            Object.assign(this.searchParams,this.$route.query,this.$route.params)
        },
        mounted() {
            this.getData()
        },
        computed:{
            ...mapGetters(['goodsList']),
            //判断是不是综合
            isSyn(){
                return this.searchParams.order.indexOf("1")!==-1
            },
            //判断是不是价格
            isPrice(){
                return this.searchParams.order.indexOf("2")!==-1
            },
            //判断降序，箭头向下
            isDesc(){
                return this.searchParams.order.indexOf("desc")!==-1
            },
            //判断升序，箭头向上
            isAsc(){
                return this.searchParams.order.indexOf("asc")!==-1
            },
            //从search仓库中获取页码总数
            ...mapState({
                total:(state)=>{
                    return state.Search.searchList.total
                }
            })
        },
        methods:{
            //在search模块会发送多次请求
            getData(){
                this.$store.dispatch("getSearchList",this.searchParams);
            },
            //动态操作面包屑
            removeTag(){
                //将名称置空，但是如果设置为undefined是不会传给服务器的，性能更好
                this.searchParams.categoryName=undefined;
                this.searchParams.category1Id=undefined;
                this.searchParams.category2Id=undefined;
                this.searchParams.category3Id=undefined;
                //重新发送请求，显示数据
                this.getData();
                //展示栏的路径需要变化，如果存在param参数，也需要带过去
                if(this.$route.params){
                    this.$router.push({
                        name:"search",
                        params:this.$route.params
                    })
                }

            },
            removeKeyword(){
                this.searchParams.keyword=undefined;
                this.getData();
                //通知header组件，清除搜索栏内容，利用全局事件总线
                this.$bus.$emit("clearKeyword");
                //修改地址栏
                if(this.$route.query){
                    this.$router.push({
                        name:'search',
                        query:this.$route.query
                    })
                }

            },
            //获取点击的品牌信息
            trademarkInfo(trademark){
                this.searchParams.trademark=`${trademark.tmId}:${trademark.tmName}`;
                this.getData();
            },
            //删除品牌面包屑
            removeTrademark(){
                this.searchParams.trademark=undefined;
                this.getData()
            },
            //属性信息
            attrInfo(attrs,attrValue){
                let propAttr=`${attrs.attrId}:${attrValue}:${attrs.attrName}`;
                //props数组去重，不能重复添加
                if(this.searchParams.props.indexOf(propAttr)){
                    this.searchParams.props.push(propAttr)
                }
                this.getData()
            },
            //删除属性面包屑
            removeAttr(index){
                this.searchParams.props.splice(index,1);
                this.getData();
            },
            //改变升序/降序方式
            changeOrder(flag){
                //flag是标记，1表示点击的是综合，2表示点击的是价格
                let origin=this.searchParams.order.split(':')
                let originFlag=origin[0]
                let originSort=origin[1]

                if(originFlag===flag){
                    //说明在原始图标上点击，只需要进行升序和降序修改
                    this.searchParams.order=`${originFlag}:${originSort==='desc'?'asc':'desc'}`
                }else{
                    //说明切换了图标，由综合改为价格，价格默认是降序
                    this.searchParams.order=`${flag}:${'desc'}`
                }
                this.getData()
            },
            //获取用户点击的页面，通过自定义事件
            getPageno(page){
                this.searchParams.pageNo=page;
                this.getData();
            }

        },
        watch:{
            //监听路由信息中的参数发生变化，变化随时发送请求
            $route(newValue,oldValue){
                // 整理参数
                Object.assign(this.searchParams,this.$route.query,this.$route.params)
                //再次发请求
                this.getData();
                this.searchParams.category1Id=undefined;
                this.searchParams.category2Id=undefined;
                this.searchParams.category3Id=undefined;

            }
        }
    }
</script>

<style lang="less">
    .toolbar{
        position: fixed;
        z-index: 999;
        width: 300px;
        height: 100%;
        background-color: #7a6e6e;
        transition: right .3s ease-in-out 0s;
        &.toolbar-out{
            top: 0px;
            right: 0px;
        }
        &.toolbar-wrap{
            top: 0px;
            right: -294px;
        }
        .content{
            position: relative;
            left: 6px;
            width: 294px;
            background-color: bisque;
            height: 100%;
            z-index: 99;
        }
        .but{
            position: relative;
            width: 35px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            margin-bottom: 1px;
            cursor: pointer;
            background-color: #7a6e6e;
            border-radius: 3px 0 0 3px;
            position: absolute;
            top: 0;
            /*right: -6px;*/
            left: -29px;
            &.list{
                background-image: url(./images/list.png);
                background-repeat: no-repeat;
                background-size: cover;
            }
            &.pull-wrap{
                background-image: url(./images/cross.png);
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
        .toolist{
            position: absolute;
            top: 50%;
            left: -29px;
            width: 35px;
            margin-top: -80px;
            /*background-color: cadetblue;*/
            .pull{
                position: relative;
                width: 35px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                margin-bottom: 1px;
                cursor: pointer;
                background-color: #7a6e6e;
                border-radius: 3px 0 0 3px;
                z-index: 66;
                .vip{
                    background-image: url(./images/toolbars.png);
                    background-position: -88px -175px;
                }
                .cart{
                    background-image: url(./images/toolbars.png);
                    background-position: -50px 0;
                }
                .follow{
                    background-image: url(./images/toolbars.png);
                    background-position: -50px -50px;
                }
                .history{
                    background-image: url(./images/toolbars.png);
                    background-position: -50px -100px;
                }
                .message{
                    background-image: url(./images/toolbars.png);
                    background-position: -190px -150px;
                }
                .jimi{
                    background-image: url(./images/toolbars.png);
                    background-position: -50px -150px;
                }
                .top{
                    background-image: url(./images/toolbars.png);
                    background-position: -50px -250px;
                }

                .tab-text {
                    width: 62px;
                    height: 35px;
                    line-height: 35px;
                    color: #fff;
                    text-align: center;
                    font-family: 微软雅黑;
                    position: absolute;
                    /*position: relative;*/
                    z-index: 1;
                    left: 35px;
                    top: 0;
                    background-color: #7a6e6e;
                    border-radius: 3px 0 0 3px;
                    font-style: normal;
                    -webkit-transition: left .3s ease-in-out .1s;
                    transition: left .3s ease-in-out .1s;
                }
                .tab-ico{
                    display: inline-block;
                    position: relative;
                    /*background-image: url(img/toolbars.png);*/
                    background-color:#7a6e6e ;
                    border-radius: 3px 0 0 3px;
                    z-index: 2;
                    width: 35px;
                    height: 35px;
                }
            }
        }

        &>.pull{
            position: relative;
            width: 35px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            margin-bottom: 1px;
            cursor: pointer;
            background-color: #7a6e6e;
            border-radius: 3px 0 0 3px;
            z-index: 66;
            .tab-ico{
                display: inline-block;
                position: relative;
                /*background-image: url(img/toolbars.png);*/
                background-color:#7a6e6e ;
                border-radius: 3px 0 0 3px;
                z-index: 2;
                width: 35px;
                height: 35px;
            }
            .top{
                background-image: url(./images/toolbars.png);
                background-position: -50px -250px;
            }

            .tab-text {
                width: 62px;
                height: 35px;
                line-height: 35px;
                color: #fff;
                text-align: center;
                font-family: 微软雅黑;
                position: absolute;
                /*position: relative;*/
                z-index: 1;
                left: 35px;
                top: 0;
                background-color: #7a6e6e;
                border-radius: 3px 0 0 3px;
                font-style: normal;
                -webkit-transition: left .3s ease-in-out .1s;
                transition: left .3s ease-in-out .1s;
            }
        }
        &>.back{
            position: absolute;
            bottom: 0;
            /*right: -6px;*/
            left: -29px;
            display: inline-block;
            background-image: url(./images/toolbars.png);

        }
    }
    .main{
        margin: 10px 0;
        .py-container{
            width: 1200px;
            margin: 0 auto;
            .bread{
                margin-bottom: 5px;
                overflow: hidden;
                .sui-breadcrumb{
                    padding: 3px 15px;
                    margin: 0;
                    font-weight: 400;
                    border-radius: 3px;
                    float:left;
                    li{
                        display: inline-block;
                        line-height: 18px;
                        a{
                            color: #666;
                            text-decoration: none;
                            &:hover{
                                color: #4cb9fc;
                            }
                        }
                    }
                }
                .sui-tag{
                    margin-top: -5px;
                    list-style: none;
                    font-size: 0;
                    line-height: 0;
                    padding: 5px 0 0;
                    margin-bottom: 18px;
                    float: left;
                    .with-x{
                        font-size: 12px;
                        margin: 0 5px 5px 0;
                        display: inline-block;
                        overflow: hidden;
                        color: #000;
                        background: #f7f7f7;
                        padding: 0 7px;
                        height: 20px;
                        line-height: 20px;
                        border: 1px solid #dedede;
                        white-space: nowrap;
                        transition:color 400ms;
                        cursor: pointer;
                        i{
                            margin-left: 10px;
                            cursor: pointer;
                            font: 400 14px tahoma;
                            display: inline-block;
                            height: 100%;
                            vertical-align: middle;
                        }
                        &:hover{
                            color: #28a3ef;
                        }
                    }
                }
            }

            .details{
                margin-bottom: 5px;
                .sui-navbar{
                    overflow: visible;
                    margin-bottom: 0;
                    .filter{
                        min-height: 40px;
                        padding-right: 20px;
                        background: #fbfbfb;
                        border: 1px solid #e2e2e2;
                        padding-left: 0;
                        border-radius: 0;
                        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
                        .sui-nav{
                            position: relative;
                            left: 0;
                            display: block;
                            float: left;
                            margin: 0 10px 0 0;
                            li{
                                float: left;
                                line-height: 18px;
                                a{
                                    display: block;
                                    cursor: pointer;
                                    padding: 11px 15px;
                                    color: #777;
                                    text-decoration: none;
                                }
                                &.active{
                                    a{
                                        background: #e1251b;
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
                .goods-list{
                    margin: 20px 0;
                    ul{
                        display:flex;
                        flex-wrap:wrap;
                        li{
                            height: 100%;
                            width: 20%;
                            margin-top: 10px;
                            line-height: 28px;
                            .list-wrap{
                                .p-img{
                                    padding-left: 15px;
                                    width: 215px;
                                    height: 255px;
                                    a{
                                        color: #666;
                                        img{
                                            max-width: 100%;
                                            height: auto;
                                            vertical-align: middle;
                                        }
                                    }
                                }
                                .price{
                                    padding-left: 15px;
                                    font-size: 18px;
                                    color: #c81623;
                                    strong{
                                        font-weight: 700;
                                        i{
                                            margin-left: -5px;
                                        }
                                    }
                                }
                                .attr{
                                    padding-left: 15px;
                                    width: 85%;
                                    overflow: hidden;
                                    margin-bottom: 8px;
                                    min-height: 38px;
                                    cursor: pointer;
                                    line-height: 1.8;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 2;
                                    a{
                                        color: #333;
                                        text-decoration: none;
                                    }
                                }
                                .commit{
                                    padding-left: 15px;
                                    height: 22px;
                                    font-size: 13px;
                                    color: #a7a7a7;
                                    span{
                                        font-weight: 700;
                                        color: #646fb0;
                                    }
                                }
                                .operate{
                                    padding: 12px 15px;
                                    .sui-btn{
                                        display: inline-block;
                                        padding: 2px 14px;
                                        box-sizing: border-box;
                                        margin-bottom: 0;
                                        font-size: 12px;
                                        line-height: 18px;
                                        text-align: center;
                                        vertical-align: middle;
                                        cursor: pointer;
                                        border-radius: 0;
                                        background-color: transparent;
                                        margin-right: 15px;
                                    }
                                    .btn-bordered{
                                        min-width: 85px;
                                        background-color: transparent;
                                        border: 1px solid #8c8c8c;
                                        color: #8c8c8c;
                                        &:hover{
                                            border: 1px solid #666;
                                            color: #fff!important;
                                            background-color: #666;
                                            text-decoration: none;
                                        }
                                    }
                                    .btn-danger{
                                        border: 1px solid #e1251b;
                                        color: #e1251b;
                                        &:hover{
                                            border: 1px solid #e1251b;
                                            background-color: #e1251b;
                                            color:white!important;
                                            text-decoration: none;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .page{
                    width: 733px;
                    height: 66px;
                    overflow: hidden;
                    float:right;
                    .sui-pagination{
                        margin: 18px 0;
                        ul{
                            margin-left: 0;
                            margin-bottom: 0;
                            vertical-align: middle;
                            width: 490px;
                            float: left;
                            li{
                                line-height: 18px;
                                display: inline-block;
                                a{
                                    position: relative;
                                    float: left;
                                    line-height: 18px;
                                    text-decoration: none;
                                    background-color: #fff;
                                    border: 1px solid #e0e9ee;
                                    margin-left: -1px;
                                    font-size: 14px;
                                    padding: 9px 18px;
                                    color: #333;
                                }
                                &.active{
                                    a{
                                        background-color: #fff;
                                        color: #e1251b;
                                        border-color: #fff;
                                        cursor: default;
                                    }
                                }
                                &.prev{
                                    a{
                                        background-color: #fafafa;
                                    }
                                }
                                &.disabled{
                                    a{
                                        color: #999;
                                        cursor: default;
                                    }
                                }
                                &.dotted{
                                    span{
                                        margin-left: -1px;
                                        position: relative;
                                        float: left;
                                        line-height: 18px;
                                        text-decoration: none;
                                        background-color: #fff;
                                        font-size: 14px;
                                        border: 0;
                                        padding: 9px 18px;
                                        color: #333;
                                    }
                                }
                                &.next{
                                    a{
                                        background-color: #fafafa;
                                    }
                                }
                            }
                        }
                        div{
                            color: #333;
                            font-size: 14px;
                            float: right;
                            width: 241px;
                        }
                    }
                }
            }
            .hot-sale{
                margin-bottom: 5px;
                border: 1px solid #ddd;
                .title{
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 21px;
                    border-bottom: 1px solid #ddd;
                    background: #f1f1f1;
                    color: #333;
                    margin: 0;
                    padding: 5px 0 5px 15px;
                }
                .hot-list{
                    padding: 15px;
                    ul{
                        display:flex;
                        li{
                            width:25%;
                            height: 100%;
                            .list-wrap{
                                .p-img,.price,.attr,.commit{
                                    padding-left: 15px;
                                }
                                .p-img{
                                    img{
                                        max-width: 100%;
                                        vertical-align: middle;
                                        border: 0;
                                    }
                                }
                                .attr{
                                    width: 85%;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 2;
                                    overflow: hidden;
                                    margin-bottom: 8px;
                                    min-height: 38px;
                                    cursor: pointer;
                                    line-height: 1.8;
                                }
                                .price{
                                    font-size: 18px;
                                    color: #c81623;
                                    strong{
                                        font-weight: 700;
                                        i{
                                            margin-left: -5px;
                                        }
                                    }
                                }
                                .commit{
                                    height:22px;
                                    font-size: 13px;
                                    color: #a7a7a7;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>