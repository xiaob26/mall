import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
    carList: []
    },
    mutations: {
        addCart(state,payload){
            
                let oldProduct = null
                for(let item of state.carList){
                    if(item.id === payload.id){
                    oldProduct = item
                    }  
                }
                if(oldProduct){
                oldProduct.count +=1
                }else{
                payload.count = 1
                payload.checked =true;
                state.carList.push(payload)
                }
                
           
           
        }
    },
    getters: {
        length(state) {
            return state.carList.length
        },
        carList(state){
            return state.carList
        }
    }

})

export default store