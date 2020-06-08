<template>
<div class="car-list">
    <scroll class="content">
       <car-list-item v-for="(item,index) in carList" :key=index
        :item-info=item></car-list-item>
    </scroll>
</div>
  
</template>

<script>
import CarListItem from './CarListItem'
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
export default {
    computed: {
        ...mapGetters(['carList'])
    },
    components: {
        CarListItem,
        Scroll
    }

}
</script>

<style scoped>

.content{
   position: absolute;
   top: 44px;
   bottom: 89px;
   left: 0;
   right: 0;
   overflow: hidden;
    
   
 }

</style>