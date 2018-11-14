//封装请求
'use strict'
import axios from 'axios';
import store from '@/store/index'
export default function fetch(options) {
  return new Promise((resolve, reject) => {
    console.log('入口1')
    var instance = axios.create({
      baseURL: store.state.baseurl,
      timeout: 1000,
      headers: {
            'content-type': 'application/json'
      }
    });
     // http request 拦截器
    instance.interceptors.request.use(

      config => {
        console.log('入口2')
        // loading = window.$util.msg.loading()
        // config.headers.Authorization = 'token'
        return config
      },
      err => {
        console.log('reqerr')
        console.log(error)
        return Promise.reject(err)
      }
    )

    // http response 拦截器
    instance.interceptors.response.use(
      response => {
        console.log('入口3')
        // if (response.data && response) window.$store.commit('setToken', { token: response.data.token })
        if (response && response.status) {
        //   if (+response.status === 10001) {
        //     window.$native.openLogin(response.data)
        //   }
        }
        return response
      },
      error => {
        if (error) {
        console.log('reserr')
        console.log(error)
          if (error.response == null) {
            // window.$util.msg.warn('后台返回错误')
            // alert('404')
            // router.replace({
            //   path: '404'
            // })
          } else {
            // switch (error.response.status) {
            //   case 401:
            //     // 返回 401 清除token信息并跳转到登录页面
            //     // store.commit(types.LOGOUT)
            //     // 去下载APP
            //     router.replace({
            //       path: 'login',
            //       query: {
            //         redirect: router.currentRoute.fullPath
            //       }
            //     })
            // }
          }
        }
        return Promise.reject(error) // 返回接口返回的错误信息
      }
    )

    // 请求处理
        console.log('入口5')    
    instance(options)
      .then(res => {
        console.log('入口4')
        // 请求成功时,根据业务判断状态
        /*  if (code === port_code.success) {
         resolve({code, msg, data})
         return false
         } else if (code === port_code.unlogin) {
         setUserInfo(null)
         router.replace({name: "login"})
         } */
        resolve(res)
        // console.log()
        return false
      })
      .catch(error => {
        console.log('ccccccccccc')
        console.log(error)
        // alert(JSON.stringify(error))
        if (error.response == null) {} else {
        //   if (+error.response.status === 401) {} else {
        //     // alert('没有权限获取数据')
        //   }
        }
        reject(error)
      })
        console.log('入口7')

  });
}
