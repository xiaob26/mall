<template>
    <div>   
        <nav-bar class="nav-bar">
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="middle" class="title">
                <div v-for="(title,index) in titles" class="title-item" :key="index"
                 :class="{'active': index === currentIndex }" @click="titleClick(index)">
                    {{title}}
                </div>
            </div>
            
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    data() {
        return {
            titles: ["商品","参数","评论","推荐"],
            currentIndex: 0
        }
    },
    components: {
        NavBar
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index
            this.$emit('detailClick',index);
        },
        backClick() {
            this.$router.back()
        }
    }

}
</script>

<style scoped>
    .nav-bar{
        box-shadow: 0 3px 1px rgba(100, 100,100,.1);
    }
    .title{
        display: flex;
    }
    .title .title-item{
        flex: 1;
    }
    .active{
        color: hotpink;
    }
    .back{
        margin-top: 7px;
    }

</style>