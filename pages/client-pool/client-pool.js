import { howLongAgo } from '../../utils/util'
import { sourceData, cateData } from '../../utils/publicData'
Page({
    data: {
        praise: false,
        sourceData: sourceData,
        cateData: cateData,
        clientCondition: {
            data: {
                searchValue: '',
                sourceValue: '',
                cateValue: '',
            },
            pageNum: 1,
            pageSize: 10
        },
        cluesData: [],
        pull: {
            isLoading: false,
            loading: '../../image/common/pull_refresh.gif',
            pullText: '正在刷新'
        },
        push: {
            isLoading: false,
            loading: '../../image/common/pull_refresh.gif',
            pullText: '-上拉加载更多-'
        },
        slideStart: 0,
        moveTime: 0,
        isShow_01: false,
        picker_01_data:[],
    },
    onLoad() {
        this.loadMore()
    },
    /**搜索框内容改变 */
    searchChange(e) {
        this.setData({
            'clientCondition.data.searchValue': e.detail.value
        })
    },
    /**点击键盘搜索按钮触发 */
    bindconfirm(e) {
        console.log('搜索', e)
    },
    /**清空搜索框内容 */
    clearSearchValue() {
        this.setData({
            'clientCondition.data.searchValue': ''
        })
    },
    /**滚动选择器选择来源、类别 */
    bindPickerChange(e) {
        if (e.target.dataset.type == 'source') {
            this.setData({
                'clientCondition.data.sourceValue': this.data.sourceData[e.detail.value].key
            })
        } else if (e.target.dataset.type == 'cate') {
            this.setData({
                'clientCondition.data.cateValue': this.data.cateData[e.detail.value].key
            })
        }
    },
    bindpraise() {
        if (this.data.praise === false) {
            this.setData({
                'praise': 2
            })
            setTimeout(() => {
                this.setData({
                    'praise': true
                })
            }, 1000)
        } else {
            this.setData({
                'praise': 2
            })
            setTimeout(() => {
                this.setData({
                    'praise': false
                })
            }, 1000)
        }
    },
    tranTime() {
        let data = this.data.cluesData.map(item => {
            item.date = howLongAgo(item.time)
            return item
        })
        this.setData({
            cluesData: data
        })
    },
    /**触发下拉刷新 */
    touchstart(e) {
        this.setData({
            slideStart: e.touches[0]
        })
        console.log('开始', e)
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
        this.setData({
            'pull.isLoading': true,
            'pull.loading': '../../image/common/pull_refresh.gif',
            'pull.pullText': '正在刷新~'
        })
        setTimeout(() => {
            this.setData({
                'pull.loading': '../../image/common/finish.png',
                'pull.pullText': '刷新完成'
            })
        }, 4000)
        setTimeout(() => {
            this.setData({
                'pull.isLoading': false,
            })
        }, 6000)
    },
    /**上拉加载更多 */
    loadMore() {
        this.setData({
            'push.isLoading': true,
            'push.pullText': '正在加载',
            'push.loading': '../../image/common/pull_refresh.gif',
        })
        if (this.data.cluesData.length < 30) {
            setTimeout(() => {
                let data = this.data.cluesData.concat([
                    { time: '2019-11-20 15:50' },
                    { time: '2018-06-20 15:32' }
                ])
                this.setData({
                    cluesData: data,
                    'push.isLoading': false,
                    'push.pullText': '- 上拉加载更多 -',
                    'push.loading': '../../image/common/finish.png',
                })
                this.tranTime()
            }, 2000)
        }
    },
    /**跳转客户详情 */
    toCustomerDetails() {
        
    },
    myPickerChange(e) {
        console.log('自定义组件选择的结果', e.detail)
        this.setData({
            address: e.detail
        })
    },
    showPicker_01() {
        this.setData({
            isShow_01: true,
        })
    },
    sureCallBack_01(e) {
        let data = e.detail
        this.setData({
            isShow_01: false,
            picker_01_data: e.detail.choosedData,
            picker_01_index: JSON.stringify(e.detail.choosedIndexArr)
        })
        console.log(this.data.picker_01_data, this.data.picker_01_index)
    },
    cancleCallBack_01() {
        this.setData({
            isShow_01: false,
        })
    },
})