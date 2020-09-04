import util from '../../utils/util'
import {cluesType} from '../../utils/publicData'
import {toDescribe} from '../../utils/util'
Page({
    data: {
        triggerNumber: [
            {title: '客户总量', num: '2312'},
            {title: '名片转发数', num: '32'},
            {title: '转介绍浏览人数', num: '2'},
            {title: '邀请新人数', num: '435'},
        ],
        tabData: cluesType,
        tabType: 'page_businesscard',
        clueData: [
            {createTime: '2019-11-12 16:33'},
            {createTime: '2019-11-12 14:55'}
        ],
        pull: {
            isLoading: false,
            loading: '../../image/common/pull_refresh.gif',
            pullText: '正在加载'
        },
        push: {
            isLoading: false,
            loading: '../../image/common/pull_refresh.gif',
            pullText: '-上拉加载更多-'
        },
    },
    homeTabChange(e) {
        this.setData({ tabType: e.detail.itemData.type })
    },
    time() {
        let newData = this.data.clueData.map(item => {
            item.time = util.timeCycle(item.createTime)
            return item
        })
        this.setData({ clueData: newData})
    },
    toEditCard() {
        wx.navigateTo({
            url: '/pages/edit-card/edit-card'
        })
    },
    refresh(e) {
        console.log('刷新', e)
        this.setData({
            'pull.isLoading': true,
            'pull.loading': '../../image/common/pull_refresh.gif',
            'pull.pullText': '正在加载',
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
            console.log('+++++ 刷新完成 +++++')
        }, 6000)
    },
    toload(e) {
        console.log('加载', e),
        this.setData({
            'push.isLoading': true,
            'push.pullText': '正在加载',
            'push.loading': '../../image/common/pull_refresh.gif',
        })
        if (this.data.clueData.length < 30) {
            setTimeout(() => {
                let data = this.data.clueData.concat([
                	{createTime: '2019-11-12 16:33'},
                    {createTime: '2019-11-12 14:55'},
                ])
                this.setData({
                    clueData: data,
                    'push.isLoading': false,
                    'push.pullText': '- 上拉加载更多 -',
                    'push.loading': '../../image/common/finish.png',
                })
                console.log('===== 加载完成 =====')
            }, 2000)
        }
    },
    /**跳转客户详情 */
    toCustomerDetails() {
        
    },
    click() {
        this.selectComponent('#login_authorization').showModal()
    },
    onShow() {
        this.time()
    }
})