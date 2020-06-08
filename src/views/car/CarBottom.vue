<template>
  <div class="car-bottom">
      <div class="cb-left">
          <check-button class="check-button" :isChecked=isSelectAll @click.native="totalClick"></check-button>
          <span>全选</span>
      </div>
      <div class="cb-middle">
          合计：{{totalPrice}}
      </div>
      <div class="cb-right">
          去计算({{length}})
      </div>
      

  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
    components: {
        CheckButton
    },
    computed: {
        totalPrice() {
            return this.$store.state.carList.filter(item =>
             {return item.checked }).reduce((preValue,item) => {
                 return preValue + item.price * item.count
             },0).toFixed(2)
        },
        length() {
            return this.$store.state.carList.filter(item =>{
                return item.checked
            }).length
        },
        isSelectAll() {
            if(this.$store.state.carList.length === 0){
                 return false
            }
            return !this.$store.state.carList.find(item => !item.checked )
                 
        }
    },
    methods: {
        totalClick() {
            if(this.isSelectAll){
                this.$store.state.carList.forEach(item => {
                    item.checked = false;
                })
            }else{
                this.$store.state.carList.forEach(item => {
                    item.checked = true
                })
            }
        }
    }

}
</script>

<style scoped>
.car-bottom{
    height: 40px;
    background-color: #eee;
    position: absolute;
    bottom: 49px;
    display: flex;
    left: 0;
    right: 0;
}
.cb-left{
    display: flex;
    align-items: center;
    line-height:40px;
    width: 80px;
}
.check-button{
    width: 18px;
    height: 18px;
    display: flex;
    margin-left: 8px;
    margin-right: 5px;   
}
.cb-middle{
    flex: 1;
    line-height: 40px;
   text-align: center;
}
.cb-right{
    width: 100px;
    background-color: red;
    color: #fff;
    line-height: 40px;
    text-align: center;
}

</style>