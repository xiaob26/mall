<template>
    <div class="tab-control">
        <div v-for="(item,index) in title"
         :key=index class="tab-control-item"
          :class="{active: index === isIndex}" 
          @click="control(index)"
         
          >
            <span>
                {{item}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title:{
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            isIndex:0
        }
    },
    methods:{
        control(index) {
            this.isIndex = index
            this.$emit('tabClick',index)
        }
    }

}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    padding: 0 15px;
    
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tab-control-item span{
    padding: 6px;
}
.active{
    color: hotpink;
   
}
 .active span{
     border-bottom: 1px solid hotpink;
 }

</style>