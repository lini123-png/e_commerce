<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
        <Brand></Brand>
    </div>

</template>

<script>
    import TypeNav from '@/components/TypeNav'
    import ListContainer from '@/pages/Home/ListContainer'
    import TodayRecommend from '@/pages/Home/TodayRecommend'
    import Rank from '@/pages/Home/Rank'
    import Like from '@/pages/Home/Like'
    import Floor from '@/pages/Home/Floor'
    import Brand from '@/pages/Home/Brand'

    import {mapState} from "vuex"
    export default {
        name: "Home",
        components:{TypeNav,ListContainer,TodayRecommend,Rank,Like,Floor,Brand},
        mounted() {
            this.$store.dispatch("floorList")
        },
        computed:{
            ...mapState({
                floorList:(states)=>{
                    return states.Home.floorList
                }
            })
        }
    }
</script>

<style scoped>

</style>