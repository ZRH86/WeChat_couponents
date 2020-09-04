import WxValidate from '../../utils/WxValidate';
Page({
    data: {
        basicInfo: {
            tel: '',
            post: '',
            weChat: '',
            specialPlane: '',
            email: '',
            intro: ''
        }
    },
    onLoad() {
		this.initValidate()
	},
    initValidate() {
        const rules = {
            tel: {
                required: true,
				tel: true,
            }, post: {
                required: true,
            }, weChat: {
                required: true,
            }, specialPlane: {
                required: true,
            }, email: {
                required: true,
                email: true
            }
        };
        const messages = {
            tel: {
                required: '请输入手机号',
				tel: '请输入正确格式手机号',
            }, post: {
                required: '请输入职位',
            }, weChat: {
                required: '请输入微信号',
            }, specialPlane: {
                required: '请输入座机号',
            }, email: {
                required: '请输入电子邮箱',
				email: '请输入正确格式电子邮箱',
            }
        };
        this.WxValidate = new WxValidate(rules, messages)
    },
    formChange(val) {
        let obj = {}
        obj[`basicInfo.${val.currentTarget.dataset.val}`]= val.detail.value
        this.setData(obj)
    },
    submitForm(e) {
        const params = e.detail.value
		if (!this.WxValidate.checkForm(params)) {
            const error = this.WxValidate.errorList[0]
			this.showModal(error)
			return false
		}
    },
    showModal(error) {
		wx.showToast({
			title: error.msg,
			icon: 'none',
			duration: 2000
		  })
	},
})