<template>
 
   <swiper>
       <swiper-item  v-for="(item,key) in banners" :key=key>
           <a :href="item.link">
                <img :src="item.image" alt="" @load="imgSwiperLoad">
           </a>

       </swiper-item>
   </swiper>
 
  
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default() {
                return []
            }

        }
    },
    data() {
        return{
            'isShow': true
        }
    },
    methods: {
        imgSwiperLoad() {
            if(this.isShow){
                 this.$emit('imgSwiperLoad')
                 this.isShow = !this.isShow
            }
           
        }
    }

}
</script>

<style>

</style>