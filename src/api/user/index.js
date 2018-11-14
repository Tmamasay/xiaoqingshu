import fetch from '../fetch.js'
import store from '@/store/index';
//存用户的信息数据
const userInfomation= params=>{
    return fetch({
        url:`${store.state.baseurl}/register`,
        method:'post',
        data:params
    })
}

const userinfo={
    userInfomation, //存用户的信息数据
}

export default userinfo
