import WxValidate from '../../utils/WxValidate';
import LoginApi from '../../api/loginApi'
Page({
	data: {
		userInfo: {
			userName: '',
			password: '',
		}
	}, onLoad() {
		this.initValidate()
	}, initValidate() {
		const rules = {
			userName: {
				required: true,
				rangelength: [2, 20],
			},
			password: {
				required: true,
				rangelength: [6, 16],
			}
		}
		const messages = {
			userName: {
				required: '请输入账号',
				rangelength: '请输入2~4位字符账号'
			},
			password: {
				required: '请输入密码',
				rangelength: '请输入6~16位字符密码'
			},

		}
		// 创建实例对象
		this.WxValidate = new WxValidate(rules, messages)
		/**
		 * 也可以自定义验证规则
		 */
		// this.WxValidate.addMethod('assistance', (value, param) => {
		// 	return this.WxValidate.optional(value) || (value.length >= 1 && value.length <= 2)
		// }, '请勾选 《顺风男服务协议》')
	}, bindUserNameInput(e) { // 获取账号、赋值
		this.data.userInfo.userName = e.detail.value
	}, bindPasswordInput(e) { // 获取密码、赋值
		this.data.userInfo.password = e.detail.value
	}, login(params) { // 登录，暂存在本地存储
		LoginApi.login(params).then(res => {
			console.log('登录返回值', res)
			wx.setStorage({
				key: "userInfo",
				data: JSON.stringify(res.data)
			})
			console.log(res.data, res.data.token)
			wx.setStorage({
				key: "token",
				data: res.data.token
			})
			wx.switchTab({
				url: '../home/home'
			})
        })
	}, submitForm(e) {
		/**
		 * 表单提交
		 */
		const params = e.detail.value
		if (!this.WxValidate.checkForm(params)) {
			const error = this.WxValidate.errorList[0]
			this.showModal(error)
			return false
		}
		/**
		 * 验证成功
		 */
		this.login(params);
	}, showModal(error) {
		wx.showToast({
			title: error.msg,
			icon: 'none',
			duration: 2000
		  })
	},  tologin() {
        
    },
})