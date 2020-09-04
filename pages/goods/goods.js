var app = getApp()
import { goodsList } from '../../utils/publicData'
Page({
    data: {
        navActive: 5,
        goodsList: goodsList,
        selectGoods: {
            url: '',
            bool: false,
            left: '',
            top: ''
        },
        imgUrls: [
            '../../images/banner1.jpg',
            '../../images/banner2.jpg',
            '../../images/banner3.jpg'
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
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 500,
        goods_list: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        hideCount: false,
        count: 0,
        needAni: false,
        hide_good_box: true
    }, 
    onLoad() {
        var that = this;
        this.busPos = {};
        this.busPos['x'] = app.globalData.ww * 0.8;
        this.busPos['y'] = app.globalData.hh * 0.8;
    },
    tabSelect(e) {
        this.setData({
            navActive: e.target.dataset.index
        })
    },
    refresh(e) {
        console.log('刷新', e);
        this.setData({
            'pull.isLoading': true,
            'pull.loading': '../../image/common/pull_refresh.gif',
            'pull.pullText': '正在加载',
        });
        setTimeout(() => {
            this.setData({
                'pull.loading': '../../image/common/finish.png',
                'pull.pullText': '刷新完成'
            })
        }, 4000);
        setTimeout(() => {
            this.setData({
                'pull.isLoading': false,
            });
            console.log('+++++ 刷新完成 +++++')
        }, 6000)
    },
    toload(e) {
        console.log('加载', e);
        this.setData({
            'push.isLoading': true,
            'push.pullText': '正在加载',
            'push.loading': '../../image/common/pull_refresh.gif',
        });
        if (this.data.goodsList.length < 30) {
            setTimeout(() => {
                let data = this.data.goodsList.concat([
                	{title: '单人沙发', goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/EAD670176 D1882/common/SM_IMAGE/SM_001.jpg'},
                    {title: '双人沙发', goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/11M9007U212301/common/SM_IMAGE/SM_001.jpg?x-oss-process=image/resize,m_pad,h_500,w_500,color_FFFFFF'},
                    {title: '早安床头柜', goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/CACLA-016-063/common/SM_IMAGE/SM_001.jpg'}
                ]);
                this.setData({
                    goodsList: data,
                    'push.isLoading': false,
                    'push.pullText': '- 上拉加载更多 -',
                    'push.loading': '../../image/common/finish.png',
                });
                console.log('===== 加载完成 =====')
            }, 2000)
        }
    },
    busAnimation() {
        that.setData({
            needAni: true
        });
        setTimeout(() => {
            that.setData({
                needAni: false
            });
        }, 500);
    },
    touchOnGoods (e) {
        if (!this.data.hide_good_box) return;
        this.finger = {};
        var topPoint = {};
        this.finger['x'] = e.touches["0"].clientX > app.globalData.ww - 75 ? app.globalData.ww - 80 : e.touches["0"].clientX;
        this.finger['y'] = e.touches["0"].clientY;
        if (this.finger['y'] < this.busPos['y']) {
            topPoint['y'] = this.finger['y'] - 150;
        } else {
            topPoint['y'] = this.busPos['y'] - 150;
        }
        topPoint['x'] = Math.abs(this.finger['x'] - this.busPos['x']) / 2 + this.finger['x'];
        this.linePos = app.bezier([this.finger, topPoint, this.busPos], 30);
        this.startAnimation();
    },
    startAnimation () {
        var index = 0,
            that = this,
            bezier_points = that.linePos['bezier_points'];
        this.setData({
            hide_good_box: false,
            bus_x: that.finger['x'],
            bus_y: that.finger['y']
        });
        this.timer = setInterval(() => {
            index++;
            that.setData({
                bus_x: bezier_points[index]['x'],
                bus_y: bezier_points[index]['y']
            });
            if (index >= 28) {
                clearInterval(that.timer);
                that.setData({
                    hide_good_box: true,
                    hideCount: false,
                    count: that.data.count += 1
                })
            }
        }, 33);
    },
    giveLike(e) {
        let ind = e.target.dataset.ind;
        let key = `goodsList[${ind}].like`;
        this.setData({
             [key]: !this.data.goodsList[ind].like
        });
    }
});