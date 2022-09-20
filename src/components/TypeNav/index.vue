<template>
    <div class="type-nav">
        <div class="container" >
            <div @mouseleave="leaveShow" @mouseenter="enterShow">
                <h2 class="all" >全部商品分类</h2>
<!--                过渡动画，必须有v-if或v-show才能用-->
                <transition name="sort">
                    <div class="sort" v-show="show" >
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId">
                                <h3 :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                                </em>

                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </transition>

            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    //把所有功能函数引入,lodash节流操作
    import {throttle} from 'lodash/throttle'
    export default {
        name: "TypeNav",
        data(){
            return{
                show:true
            }
        },
        //组件挂载完毕向服务器发请求
        mounted() {
            //通过vuex发送请求，获取数据 放到app中，优化
            // this.$store.dispatch('categoryList')
            if(this.$route.path!=='/home'){//只有的search组件中才有隐藏显示
                this.show=false
            }
        },
        computed:{
            //记得取到对应小仓库的内容
            ...mapState({categoryList:state=>state.Home.categoryList})
        },
        methods:{
            //编程式导航、事件委派（不需要给每个a节点绑定一个点击事件）、自定义属性
            goSearch(envent){
                //1、获取节点，只有a节点有一个自定义属性data-categoryName
                let element=envent.target;
                //2、节点中有一个dataset属性，可以获取节点的自定义属性和属性值
                //自定义属性要在前面加上data-才能被dataset获取，会自动添加categoryname，用{categoryname}解构出来
                let {categoryname,category1id,category2id,category3id}=element.dataset;
                let location={name:'search'}
                let query={
                    categoryName:categoryname
                }
                //只要有categoryname一定是a标签
                if(categoryname){
                    //一级
                    if(category1id){
                        query.category1Id=category1id

                    }else if (category2id){
                        //二级
                        query.category2Id=category2id

                    }else{
                        //三级
                        query.category3Id=category3id
                    }

                }
                //需要判断一下，如果有param参数也要一起带过去
                if(this.$route.params){
                    location.params=this.$route.params
                    location.query=query
                    this.$router.push(location);
                }

            },
            //在search中对全部商品分类绑定鼠标移入移出事件
            leaveShow(){
                if(this.$route.path!=="/home"){
                    this.show=false
                }

            },
            enterShow(){
                if(this.$route.path!=="/home"){
                    this.show=true
                }
            }
        }

    }
</script>

<style scoped lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                        &:hover{
                            background-color: skyblue;
                        }

                    }


                }
            }
            /*过渡动画*/
            .sort-enter{
                height: 0;
            }
            .sort-enter-to{
                height: 461px;
            }
            .sort-enter-active{
                transition: all 0.5s linear;
            }
        }
    }
</style>