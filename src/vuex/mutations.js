import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-type'
export default{
    [RECEIVE_ADDRESS](state,address){
        state.address=address
    },
    [RECEIVE_CATEGORYS](state,category){
        

        category.map(s=>{
            s.image_url=s.image_url.replace("q1.shaohu.host:8111","q1.shaohu.host:8112")
        })
        state.categorys=category
    },
    [RECEIVE_SHOPS](state,shops){
        state.shops=shops
    }
}