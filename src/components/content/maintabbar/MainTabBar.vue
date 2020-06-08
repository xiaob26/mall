<template>
   <tab-bar>
      <tab-bar-item path='/home'>
         <img slot='item-icon' src="~assets/img/icon/home.png" alt="">
          <img slot='item-icon-active' src="~assets/img/icon/home-active.png" alt="">
         <div slot='item-text'>首页</div> 
      </tab-bar-item>
      <tab-bar-item path='/sort'>
        <img slot='item-icon' src="@/assets/img/icon/fenlei.png" alt="">
         <img slot='item-icon-active' src="@/assets/img/icon/fenlei-active.png" alt="">
         <div slot='item-text'>分类</div> 
      </tab-bar-item>
      <tab-bar-item path='/car'>
        <img slot='item-icon' src="@/assets/img/icon/gouwucheman.png" alt="">
         <img slot='item-icon-active' src="@/assets/img/icon/gouwucheman-active.png" alt="">
         <div slot='item-text'>购物车</div> 
      </tab-bar-item>
      <tab-bar-item path='/my'>
        <img slot='item-icon' src="@/assets/img/icon/wode.png" alt="">
         <img slot='item-icon-active' src="@/assets/img/icon/wode-active.png" alt="">
         <div slot='item-text'>我的</div> 
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from'../../common/tabbar/TabBar'
import TabBarItem from'../../common/tabbar/TabBarItem'

export default {
    components:{
        TabBar,
        TabBarItem
     }
}
</script>

<style>

</style>