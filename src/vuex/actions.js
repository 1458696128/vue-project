import {reqAddress,resCategory,reqShops} from '../api/index'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-type'
export default{
    //获取当前地址异步的action
  async getAddress({commit,state}){
      
        const {longitude,latitude}=state
       //发送请求
     const result=await  reqAddress(longitude,latitude) 
           const address =result
           commit(RECEIVE_ADDRESS,address)
    },
    async getCategory({commit}){
       
       //发送请求分类列表
     const result=await  resCategory() 
       if(result.code===0){
           const category =result.data
           commit(RECEIVE_CATEGORYS,category)
       }
    },
    async getShops({commit,state}){
        
        const {longitude,latitude}=state
      
       //发送请求商家列表
     const result=await reqShops({longitude,latitude}) 
           const shops =result
           commit(RECEIVE_SHOPS,shops)

    },

}