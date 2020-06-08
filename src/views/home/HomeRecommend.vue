<template>
  <div class='recmd'>
      <a :href="item.link"  v-for="(item,key) in recommends" :key=key >
          <img :src="item.image" alt="">
          <div> {{item.title}}</div>
         
      </a>
  </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default() {
                return []
            }

        }
    }
}
</script>

<style>
.recmd{
    display: flex;
    text-align: center;
    padding: 10px 0 25px;
    border-bottom: 8px solid #eee;
    
}
 .recmd a{
     flex: 1;
     color: #aaa;
     text-decoration: none;
     
 }
 .recmd a img {
     width: 70px;
     padding-bottom: 8px;
   
 }

</style>