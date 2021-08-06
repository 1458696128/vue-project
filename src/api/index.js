import ajax from './ajax'
export const reqAddress=(latitude,longitude)=>ajax.get(`http://192.168.31.63:8111/position/${latitude}/${longitude}`)
//获取食品的分类
export const resCategory=()=>ajax({
    method:'GET',
    url:'http://q1.shaohu.host:8112/index_category'
})
//根据经纬度获取商家列表
export const reqShops=({longitude,latitude})=>ajax({
    method:'GET',
    url:'http://192.168.31.63:8111/shops',
    params:{
        longitude,
        latitude,
    }
})
//一次性验证码
export const reqimgOnce=()=>ajax.get('http://192.168.31.63:8111/validate/now')
//一次性验证码校验
export const reqValidateCode=(randomstr,usercode)=>ajax({
    method:'GET',
    url:'http://192.168.31.63:8111/validate',
    params:{
        randomstr,
        usercode
    }
    
})
//根据经搜索获取商铺列表
export const reqSearch=(keyword,geohash)=>ajax.get(`http://q1.shaohu.host:8112/search_shops?keyword=${keyword}&geohash=${geohash}`)

