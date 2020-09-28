import axios from 'axios';
import store from '../store'
// import {message} from 'antd'
const baseURL=process.env.NODE_ENV==='development'?'http://localhost:2009':'http://47.112.131.23:2009'
const request = axios.create({
    baseURL:baseURL+'/api',
    withCredentials:true
})
// 请求拦截：在请求发出去之前进行的操作
// 应用：统一发送固定参数，loading
// request.interceptors.request.use(function(config){
//     const state = store.getState();
//     console.log('发起请求时触发的',state.user);
//     config.headers.authorization = state.user.Authorization;

    
//     // message.loading('努力加载中....');
//     return config;
// },function(error){
//     return Promise.reject(error)
// })
// // 响应拦截：数据返回前进行的操作
// // 应用：格式化数据，关闭loading
// request.interceptors.response.use(function(response){
//     return response
// },function(error){
//     return Promise.reject(error)
// })
export async function get(url,data,config={}){
    const {data:result} = await request({
        url,
        method:'get',
        params:data,
        ...config,
    })
    return result;
}
export async function post(url,data,config={}){
    const {data:result} = await request({
        url,
        method:'post',
        data,
        ...config
    })

    return result;
}
export async function put(url,data,config={}){
    const {data:result} = await request.put(url,data,config);

    return result;
}

export async function remove(url,data,config={}){
    const {data:result} = await request.delete(url,{
        ...config,
        params:data
    });

    return result;
}

export default {
    get,
    post,
    put,
    remove,
    // patch
};
