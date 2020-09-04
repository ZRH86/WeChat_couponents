Component({
	options: {
		addGlobalClass: true, // 
		multipleSlots: true, // 在组建定义时的选项中启用多slot支持
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		tabData: { // 属性名
			type: Array,
			value: 'BBBBB'
		},
		tabType: {
			type: String,
			value: ''
		}
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		activeType: '',
		scrollLeft: '0',
		lineWidth: 20,
		eleLeft: 0,
		animationLine: {}
	},
	pageLifetimes: {
		show() {
			this.data.activeType = this.properties.tabType
		},
	},
	created() {
		
	},
	ready() {
		this.queryElement('.active')
	},
	attached() {
		
	},
	methods: {
		queryElement(ele, X) {
			let _this = this;
			let query = wx.createSelectorQuery().in(this);
			query.select(ele).boundingClientRect()
			query.exec(function (res) {
				console.log(res)
				_this.setData({
					lineWidth: res[0].width,
					eleLeft: res[0].left
				})
				_this._animationExport(X ? X : _this.data.eleLeft - 22)
			})
		},
		_animationExport(X) {
			console.log('X->', X)
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction: 'linear'
            });
			animation.left(X).step();
			this.setData({
				animationLine: animation.export()
			})
			console.log('animation->', this.data.animationLine)
        },
		tabChange(e) {
			let itemData = e.currentTarget.dataset['item']
			this.setData({ activeType: itemData.type })
			let winWidth = wx.getSystemInfoSync().windowWidth
			console.log(e.currentTarget.dataset['index'] * (winWidth / 4) - (winWidth / 4))
			this.setData({scrollLeft: `${e.currentTarget.dataset['index'] * (winWidth / 4) - (winWidth / 4)}`})
			this.triggerEvent('increment', {itemData: itemData})  // 将num通过参数的形式传递给父组件
			this.queryElement('.active', e.currentTarget.dataset['index'] * (winWidth / 4) - (winWidth / 4))
		}
	}
})
