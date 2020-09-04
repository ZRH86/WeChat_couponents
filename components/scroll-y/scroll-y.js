Component({
	options: {
		multipleSlots: true, // 在组建定义时的选项中启用多slot支持
	},
	/**
	* 组件的属性列表
	*/
	properties: {
		listLength: {
			type: Number,
			value: 0
		},
		pull: {
			type: Object,
			value: {}
		},
		push: {
			type: Object,
			value: {}
		}
	},
	pageLifetimes: {
		show() {
			this.setData({
				pull: this.properties.pull,
				push: this.properties.push,
			})
		},
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		pull: {},
		push: {},
		slideStart: [],
		moveTime: 0,
	},
	created() {

	},
	ready() {

	},
	attached() {

	},
	methods: {
		touchstart(e) {
			this.setData({
				slideStart: e.touches[0]
			})
		},
		touchmove(e) {
			let moveTime = new Date().getTime();
			if (moveTime - this.data.moveTime <= 2000) {
				return
			} else {
				this.setData({
					moveTime: moveTime
				})
			}
			let slideStart = this.data.slideStart;
			let slideMove = e.touches[0];
			let startX = slideStart.pageX;
			let startY = slideStart.pageY;
			let moveEndX = slideMove.pageX;
			let moveEndY = slideMove.pageY;
			let X = moveEndX - startX;
			let Y = moveEndY - startY;
			if (Math.abs(Y) > Math.abs(X) && Y > 0) {
				console.log("top 2 bottom");
				this.pullRefresh()
			} else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
				console.log("bottom 2 top");
				this.loadMore()
			}
		},
		/**下拉刷新 */
		pullRefresh(e) {
			this.triggerEvent('refresh', {refresh: true})  // 将num通过参数的形式传递给父组件
		},
		/**上拉加载更多 */
		loadMore(e) {
			this.triggerEvent('toload', {toload: true})  // 将num通过参数的形式传递给父组件
		}
	}
})