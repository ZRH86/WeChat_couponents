import {timeCycle} from '../../utils/util'
Page({
    data: {
        messageList: [
            {createTime: '2019-11-12 16:33'},
            {createTime: '2019-11-12 14:55'},
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
        slideStart: [],
        moveTime: 0,
    },
    onLoad() {
        this.tranMessageList()
    },
    tranMessageList() {
        let data = this.data.messageList.map(item => {
            item.date = timeCycle(item.createTime, '/');
            return item;
        })
        this.setData({
            messageList: data
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
            this.tranMessageList()
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
        if (this.data.messageList.length < 30) {
            setTimeout(() => {
                let data = this.data.messageList.concat([
                    {createTime: '2019-11-12 16:33'},
                    {createTime: '2019-11-12 14:55'},
                ])
                this.setData({
                    messageList: data,
                    'push.isLoading': false,
                    'push.pullText': '- 上拉加载更多 -',
                    'push.loading': '../../image/common/finish.png',
                })
                this.tranMessageList()
                console.log('===== 加载完成 =====')
            }, 2000)
        }
    },
    /**跳转客户详情 */
    toCustomerDetails() {
        
    }
})