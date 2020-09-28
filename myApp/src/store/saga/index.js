import {takeEvery,takeLatest,put,apply,call} from  'redux-saga/effects'
import request from '@/utils/request'
function* getUser(action){
    console.log('getuser=',action);
    // const {data} = yield request.get('/user/'+action.userid);
    //发起请求，获取数据然后更新store里的数据
    const {data}=yield call(request.get,'/user/'+action.userid)//这个是测试的 -call
    console.log('异步请求的数据',data);
    //put就是dispatch
    yield put({type:action.type.replace('_async',''),user:data})
}     
// function* getNewIQ(){

// }
function* init(){
    console.log('init');
    //takeLatest可以达到节流，防抖的功能
    // takeEvery把mine里dispatch的参数传到mysaga 
    // yield takeEvery('update_user_async',getUser)

    yield takeLatest('update_user_async',getUser)
    // yield takeLatest('get_newiq_async',getNewIQ)
}
export default init