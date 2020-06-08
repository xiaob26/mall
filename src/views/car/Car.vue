<template>
<div id="car">
  <nav-bar class="nav-bar">
    <div slot="middle">购物车({{ length }})</div>
  </nav-bar>
  <car-list></car-list>

  <car-bottom></car-bottom>

  
  
</div>

</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'
 import CarList from './CartList'
 import CarBottom from './CarBottom'

 import {mapGetters} from 'vuex'
export default {
  name:'Car',
  components: {
    NavBar,
    CarList,
    CarBottom
  },
  computed: {
    ...mapGetters(['length'])
  }
  

}
</script>

<style scoped>
  .nav-bar{
    background-color:hotpink;
    color: #fff;
    font-size: 20px;
  }
  #car{
    height: 100vh;
    position: relative;
  }

</style>