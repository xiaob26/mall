<template> 
   <div id="home">
      <nav-bar>  
             <div slot="middle" class='navbar'>购物街</div>
      </nav-bar>
       <tab-control :title="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl1"
       v-show="isControlShow"
       ></tab-control>
      <scroll class='content' ref="scroll" :probe-type='3' @scroll="backScroll"
         :pull-up-load='true' @pullingUp='loadMore'
         >
         <home-swiper :banners=banners @imgSwiperLoad='imgSwiperLoad'></home-swiper>
         <home-recommend :recommends=recommends></home-recommend>
         <home-popular></home-popular>
         <tab-control :title="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl2"></tab-control>
         <goods-list :goods='showGoods'></goods-list>

      </scroll>
      <back-top @click.native="backClick" v-if="isShow"></back-top>
      
     
     
   </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'

import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goodslist/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './HomeSwiper'
import HomeRecommend from './HomeRecommend'
import HomePopular from './HomePopular'
import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
   components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
   },
   data() {
      return {
         banners: null,
         recommends: null,
         goods: {
            'pop':{page: 0,list: []},
            'new':{page: 0,list: []},
            'sell':{page: 0,list: []}
         },
         currentType: 'pop',
         isShow: false,
         currentOffsetTop: 0,
         isControlShow: false,
         saveY: 0
      }
   },
   computed: {
      showGoods() {
         return this.goods[this.currentType].list
      }
   }
   ,
   created (){
      this.getHomeMultidata()
     this.getHomeGoods('pop')
      this.getHomeGoods('new')
       this.getHomeGoods('sell')

       

      

   },
   mounted() {
      this.$bus.$on('imgLoad', () =>{
               console.log('----------------')
               this.$refs.scroll.scroll.refresh()
            })
   },
 
   activated() {
      this.$refs.scroll.scroll.refresh()
      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
      
      console.log(this.saveY)
   },
   deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
      console.log(this.saveY)

   },
   methods: {
      //事件监听相关方法
      tabClick(index) {
         switch(index){
            case 0: 
               this.currentType = 'pop';
               break;
            case 1: 
               this.currentType = 'new';
               break;
            case 2: 
               this.currentType = 'sell';
               break; 
         }
          this.$refs.tabControl1.isIndex = index;
           this.$refs.tabControl2.isIndex = index;
      },
      backClick() {
         this.$refs.scroll.scroll.scrollTo(0,0,100)
      },
      backScroll(position) {
         this.isShow = -position.y > 1000
         this.isControlShow = -position.y > this.currentOffsetTop
         
      },
      loadMore() {
         this.getHomeGoods(this.currentType)
         
      },
      imgSwiperLoad() {
         // console.log('picture')
         this.currentOffsetTop =this.$refs.tabControl2.$el.offsetTop;
         console.log(this.currentOffsetTop)
      },
      //网络请求相关方法
      getHomeMultidata() {
          getHomeMultidata().then( res =>{
         console.log(res.data)
         
         this.banners = res.data.banner.list
         this.recommends = res.data.recommend.list
      })
      },
      getHomeGoods(type){
         const page = this.goods[type].page +1
         getHomeGoods(type,page).then( res => {
            console.log(res)
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page +=1;
            this.$refs.scroll.scroll.finishPullUp()

         })

      }
   }
}
</script>

<style scoped>
 #home{
    /* padding-top: 44px; */
    position: relative;
    height: 100vh;
 }

 .navbar{
    position: fixed;
    left: 0;
    top:0;
    right: 0;
    background-color:hotpink;
    box-shadow: 0 1px 1px rgba(100, 100,100,.1);
    color: #fff;
    z-index: 9;
    /* text-align: center; */
   
    font-size: 20px;
 }
 .tab-control{
    position:sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
 }
 .content{
    overflow: hidden;
   position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;
   /* overflow: hidden; */
    
   
 }
</style>