<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
    methods: {
        showToast(message,duration) {
            this.isShow = true
            this.message = message;
            
            setTimeout(() =>{
                this.isShow = false
                this.message = ''
            },duration)

        }
    } ,
    data() {
        return {
            message: '加入购物车成功',
            isShow: false 
        }
    },

}
</script>

<style>
.toast{
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color:rgba(0, 0,0, .65);
    border-radius: 5px;
    padding: 8px 10px;
    color: #fff;
}

</style>