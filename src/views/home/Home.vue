<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from '@/network/home'
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
export default {
  name: "Home",
  data(){
    return {
      banners:[],
      recommend:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  methods:{
    getData(){
      console.log(this.res)
    }
  },
  created() {
    getHomeMultidata().then(res=>{
      this.banners = res.banner.list
      this.recommend = res.recommend.list
    }).catch(err=>{
      console.log(err)
    })
  }
}

</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
