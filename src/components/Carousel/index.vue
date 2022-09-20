<template>
    <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(car,index) in carouselList" :key="car.id">
                <img :src="car.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "Carousel",
        props:["carouselList"],
        watch:{
            //是watch+nextTick处理轮播图问题
            carouselList:{
                immediate:true,//开始就监视一次，因为carouselList是由父组件传过来，不会有变化
                handler(newVaule,oldValue){
                    //需要new一个Swiper实例对象才会出现轮播图，直接放不行，因为swiper需要页面已经完全准备好了，但是数据获取是异步的
                    //如果只用watch只能保证数据有了，但没法说v-for已经执行结束了
                    //nextTick：在下次DOM更新循环结束之后执行延迟回调，在修改数据后，立即使用这个方法获得更新后的DOM
                    this.$nextTick(()=>{
                        new Swiper(this.$refs.mySwiper,{
                            loop:true,//是否图片轮播
                            //如果需要分页器
                            pagination:{
                                el:'.swiper-pagination',
                                clickable:true//点击小球也切换图片
                            },
                            //如果需要前进后退按钮
                            navigation:{
                                nextEl:".swiper-button-next",
                                prevEl:".swiper-button-prev"
                            }
                        })
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>