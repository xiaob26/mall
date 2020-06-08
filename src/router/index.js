import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Sort = () => import('../views/sort/Sort')
const Car = () => import('../views/car/Car')
const My = () => import('../views/my/My')
const Detail = () => import('../views/detail/Detail')
Vue.use(VueRouter)
const routes =[
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/sort',
        component: Sort
    },
    {
        path:'/car',
        component: Car
    },
    {
        path:'/my',
        component: My
    },
    {
        path:'/detail/:id',
        component: Detail
    }

]
const router = new VueRouter({
    routes
})
export default router