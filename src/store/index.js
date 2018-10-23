// import Vue from 'vue'
// import Vuex from 'vuex'
// // //  深度试驾模块
// // import testDriverDeep from './modules/testdriver-deep'
// // // 地级市模块
// // import area from './modules/area'
// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     count: 0,
//     // TODO: 设置TOKEN
//     token: '',
//     isCacheUser: false,
//     user: {
//       user_id: '',
//       user_name: '',
//       openid: '',
//       nickname: '',
//       avatar: '',
//       reg_time: 0,
//       province: 0,
//       city: 0,
//       district: 0
//     },
//     //  试驾数据
//     testUser: {
//       id: 0,
//       name: '',
//       phone: '',
//       province_name: '',
//       city_name: '',
//       icard: '',
//       address: '',
//       status: ''
//     },
//     // 订车用户
//     orderUser: {
//       want_configuration: '',
//       id: '',
//       orderId: '',
//       add_time: '',
//       number: '',
//       name: '',
//       phone: '',
//       province_name: '',
//       city_name: '',
//       icard: '',
//       address: '',
//       pay_status: '',
//       return_status: '',
//       audit_remark: '',
//       reserve_type: 0,
//       order_amount: 0,
//       operable_list: {
//         pay: false,
//         cancle: false
//       },
//       return_info: {
//         reserve_points: 0,
//         order_amount: 0
//       }
//     },
//     activitys: {
//       // 代言活动的ID
//       daiyan: 6
//     },
//     isInApp: isInApp, // 是否在APP中
//     isLogin: true, // 是否登录
//     forceHideDownload: false, // 强制隐藏下载栏目
//     isShowPlaceHolder: true, // 是否显示占位栏
//     isInBottom: false, // 底部是否固定在最底部： false会偏移一个download的高度
//     share: {
//       /** * 头部参数 */
//       title: '欧尚style', // 头部标题
//       fixed: false, // 是否固定
//       isShow: true, // 是否显示
//       isBgTransparent: true, // 分享的背景颜色
//       bgWhite: false, // 顶部背景色为白色
//       topBtn: {
//         topBtnTxt: '', // 顶部是否有按钮
//         topBtnColor: false, // 顶部按钮颜色
//         topBtnColorWhite: false,
//         /*
//           顶部按钮页面字段代表
//             1 => 深度试驾列表页面
//         */
//         topBtnType: '',
//         topBtnData: ''
//       },

//       isShowTitleContainer: false, // 是否显示标题容器
//       isShowShareContainer: true, // 是否显示分享容器
//       isShowBackContainer: true, // 是否显示返回容器

//       /** * 分数参数 */
//       activityID: '活动ID',
//       shareUrl: '分享链接', // 分享链接
//       shareImg: '分享图片', // 分享图片
//       shareTitle: '分享标题', // 分享标题
//       shareDesc: '分享描述', // 分享描述
//       shareType: -1, //  -1:全部弹出，0:好友, 1:朋友圈
//       shareShow: true, // 是否显示分享按键
//       close: true, // 是否显示返回按键
//       bang:false //是否是刘海屏
//     },
//     agree: true,
//     chooseCar: {
//       // 订车信息
//       color: '',
//       shushixing: {
//         zuoweishu: '',
//         zuoweibuju: ''
//       },
//       isAuto: '',
//       peizhi: ''
//     },
//     changeOrder: {
//       dealer_name: '',
//       dealer_id: ''
//     },
//     sellerAddress: [],
//     changeAddress: []
//   },
//   getters: {
//     show: (state, getters) => {
//       return state.share.isShow && state.isInApp
//     }
//   },
//   mutations: {
//     setBangType(state,type){
//       state.share.bang = type
//     },
//     setTopBtnData(state, payload) {
//       state.share.topBtn.topBtnData = payload
//     },
//     setAgree(state, payload) {
//       state.agree = payload
//     },
//     setIsInBottom(state, payload) {
//       state.isInBottom = payload
//     },
//     setForceHideDownload(state, payload) {
//       state.forceHideDownload = payload
//     },
//     setPlaceholder(state, payload) {
//       state.isShowPlaceHolder = payload
//     },
//     // 设置是否在APP中显示
//     setInApp(state, payload) {
//       state.isInApp = payload
//     },
//     // 设置用户的登录状态
//     setLogin(state, payload) {
//       state.isLogin = payload
//     },
//     setToken(state, payload) {
//       state.token = payload.token
//     },
//     setShare(state, payload) {
//       state.share = Object.assign(state.share, payload)
//     },
//     setCacheUser(state, payload) {
//       state.isCacheUser = payload
//     },
//     setUser(state, payload) {
//       state.user.user_id = payload.user_id
//       state.user.user_name = payload.user_name
//       state.user.nickname = payload.nickname || '粉丝'
//       state.user.avatar = payload.avatar
//       state.user.reg_time = payload.reg_time
//       state.user.is_owner = payload.is_owner
//       state.user.province = payload.province
//       state.user.city = payload.city
//     },
//     // 修改默认4s店位置
//     SetSellerAdress(state, payload) {
//       state.user.province = payload
//     },
//     // 获取订单id
//     setOrderId(state, payload) {
//       state.orderUser.orderId = payload
//     },
//     // 设置试驾数据
//     setTestUser(state, payload) {
//       state.testUser = Object.assign(state.testUser, payload)
//     },
//     setTestUserCancle(state, payload) {
//       state.testUser.status = payload
//     },
//     // 设置试驾数据
//     setOrderUser(state, payload) {
//       state.orderUser = Object.assign(state.orderUser, payload)
//     },
//     // 选择车辆颜色
//     chooseColor(state, payload) {
//       state.chooseCar.color = payload
//     },
//     // 选择车辆座位
//     chooseSeat(state, payload) {
//       state.chooseCar.shushixing.zuoweishu = payload
//     },
//     // 选择车辆座位类型
//     chooseSeatNum(state, payload) {
//       state.chooseCar.shushixing.zuoweibuju = payload
//     },
//     // 选择车辆是否自动挡
//     chooseIsAuto(state, payload) {
//       state.chooseCar.isAuto = payload
//     },
//     // 选择车辆型号
//     chooseConfigureName(state, payload) {
//       state.chooseCar.peizhi = payload
//     },
//     // 选择订金
//     chooseOrderAmount(state, payload) {
//       state.orderUser.order_amount = payload
//     },
//     // 修改信息
//     changeMsg(state, payload) {
//       state.changeOrder = Object.assign({}, payload)
//     },
//     // 选择经销商名字、id
//     chooseSeller(state, payload) {
//       state.changeOrder.dealer_name = payload.dealer_name
//       state.changeOrder.dealer_id = payload.dealer_id
//     },
//     // 根据选择城市显示经销商
//     setSellerAddress(state, payload) {
//       state.sellerAddress = payload
//     },
//     // 修改订单信息中选择经销商
//     setChangeAddress(state, payload) {
//       state.changeOrder.province = payload[0]
//       state.changeOrder.city = payload[1]
//     },
//     // 销毁订单表格
//     destrOrder(state, payload) {
//       state.changeOrder = payload
//     }
//   },
//   modules: {
//     testDriverDeep, // 深度试驾
//     area // 地级市
//   }
// })
