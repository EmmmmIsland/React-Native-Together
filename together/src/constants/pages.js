


import * as RouteType from '../constants/routeType'
import Login from  '../containers/mine/login'
const LOGIN_PAGE = {
    key: RouteType.LOGIN_PAGE,
    title: '登录',
    component: Login,
    type: 'bottom',
    needLogin: false
}

import Setting from  '../containers/mine/setting'
const SETTING_PAGE = {
    key: RouteType.SETTING_PAGE,
    title: '设置',
    component: Setting,
    needLogin: true,
}


import Login_sms from '../containers/mine/login_sms'
const LOGIN_SMS_PAGE = {
    key: RouteType.LOGIN_SMS_PAGE,
    title: '登录',
    component: Login_sms,
    needLogin: true
}

import BankChoose from '../containers/bankChoose/bankChoose'
const BANK_CHOOSE_PAGE = {
    key: RouteType.BANK_CHOOSE_PAGE,
    title: '银行选择',
    component: BankChoose,
    needLogin: true
}



const Pages = [
	SETTING_PAGE,
	LOGIN_PAGE,
    LOGIN_SMS_PAGE,


]

export default Pages

