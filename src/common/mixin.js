import BackTop from 'components/content/backTop/BackTop'



export const backTop = {
    components: {
        BackTop
    },
    data() {
        return{
            isShow: false,
        }
    },
    methods:{
        backClick() {
            this.$refs.scroll.scroll.scrollTo(0,0,100)
         }
    }
}