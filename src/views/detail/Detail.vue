<template>
<div id="detail">
    <detail-nav-bar @detailClick='detailClick' ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type='3' @scroll="contentScroll">
        <detail-swiper :top-images=topImages></detail-swiper>
        <detail-base-info :goods=goods></detail-base-info>
        <detail-shop-info :shop=shop></detail-shop-info>
        <detail-goods-info :detail-info=detailInfo @detailImage='detailImageLoad'></detail-goods-info>
        <detail-param-info :param-info=paramInfo ref='params'></detail-param-info>
        <detail-comment-info :comment-info=commentInfo ref='comment'></detail-comment-info>
        <goods-list :goods=recommend ref='recommend'></goods-list>
    </scroll>
     <back-top @click.native="backClick" v-if="isShow"></back-top>
    <detail-bottom-bar @addToCart=addCart></detail-bottom-bar>
    <toast ref="toast"></toast>
    
</div>
 
</template>

<script>
import DetailNavBar from './DetailNavBar'
import DetailSwiper from './DetailSwiper'
import DetailBaseInfo from './DetailBaseInfo'
import DetailShopInfo from './DetailShopInfo'
import DetailGoodsInfo from './DetailGoodsInfo'
import DetailParamInfo from './DetailParamInfo'
import DetailCommentInfo from './DetailCommentInfo'
import DetailBottomBar from './DetailBottomBar'
import Toast from 'components/common/toast/Toast'

import GoodsList from 'components/content/goodslist/GoodsList'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'

import {backTop} from 'common/mixin'

import Scroll from 'components/common/scroll/Scroll'
export default {
    name:'Detail',
    components: {
         DetailNavBar,
         DetailSwiper,
         DetailBaseInfo,
         DetailShopInfo,
         DetailGoodsInfo,
         Scroll,
         DetailParamInfo,
         DetailCommentInfo,
         DetailBottomBar,
         GoodsList,
         Toast
    },
    mixins:[backTop],
    data() {
        return{
            id: null,
            topImages:[],
            goods:{},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommend: [],
            offsetTops: [],
            currentIndex: 0
        }
    },
    created() {
        console.log('创建Detail了......')
         
        this.id = this.$route.params.id
        getDetail(this.id).then( res => {
            console.log(res)
            const data = res.result
            this.topImages = data.itemInfo.topImages
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
             this.detailInfo = data.detailInfo
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
            if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
           
          }
            
        })
        getRecommend().then( res => {
          console.log(res)
          this.recommend = res.data.list
        })

         

        

        // this._getDetailData()
    },
    mounted() {
        // this.$refs.scroll.scroll.scrollTo(0,0,0)
    },
   
    methods: {
      _getDetailData() {
              // 1.获取iid
         this.id = this.$route.params.id
        // 2.请求数据
          getDetail(this.id).then(res => {
            console.log(res)
          // 2.1.获取结果
          const data = res.result;

          // 2.2.获取顶部信息
          this.topImages = data.itemInfo.topImages;

          // 2.3.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

          // 2.4.获取店铺信息
          this.shop = new Shop(data.shopInfo);

          // 2.5.获取商品信息
          this.detailInfo = data.detailInfo

          // 2.6.保存参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

          // 2.7.保存评论信息
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
         })
        
      },
      detailImageLoad() {
        // console.log('--------')
        this.$refs.scroll.scroll.refresh();
        this.offsetTops = [];
        this.offsetTops.push('0')
        this.offsetTops.push(this.$refs.params.$el.offsetTop)
        this.offsetTops.push(this.$refs.comment.$el.offsetTop)
        this.offsetTops.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.offsetTops)
      },
      detailClick(index){
        this.$refs.scroll.scroll.scrollTo(0,-this.offsetTops[index],200);
      },
      contentScroll(position) {
        this.isShow = -position.y > 1000
          const y = - position.y;
          let length = this.offsetTops.length
          for(let i=0;i<length;i++){
              // if(((i < length-1) && ((y >= this.offsetTops
              // [i]) &&(y <this.offsetTops[i+1]))) ||
              //  ((i = length-1) &&(y>=this.offsetTops[i]))){
              //   this.currentIndex = i;
              //   this.$refs.nav.currentIndex = this.currentIndex;
              // }
              if( y>=this.offsetTops[i] && y<this.offsetTops[i+1]){
                this.$refs.nav.currentIndex = i
              }
              else if( y >=this.offsetTops[length -1]){
                 this.$refs.nav.currentIndex = length -1

              }
             
          }
      },
      addCart() {
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title
        product.price = this.goods.realPrice;
        product.desc = this.goods.desc;
        product.id = this.id
        // console.log(product)
        this.$store.commit('addCart',product)
          this.$refs.toast.showToast('加入购物车成功',3000)
       
        console.log(this.$toast)
        
        

      }
    }

}
</script>

<style scoped>
 #detail {
    height: 100vh;
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
.content{
   position: absolute;
   top: 44px;
   bottom: 58px;
   overflow: hidden;
    
   
 }
</style>