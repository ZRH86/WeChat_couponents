Page({
    data: {
        size: 400,//转盘大小,
        musicflg: false, //声音
        fastJuedin: true,//快速决定
        repeat: true,//不重复抽取
        probability: true,// 概率
        s_awards: '',//结果
        option: '标题',
        //转盘的总数据，想添加多个可以往这数组里添加一条格式一样的数据
        zhuanpanArr: [
            {
                id: 0,
                option: '我帅吗？',//转盘的标题名称
                awards: [
                    {
                        id: 0,                // id递增
                        name: "帅",           // 选项名 超过9个字时字体会变小点 大于13个数时会隐藏掉超出的
                        color: '#FFA827',    // 选项的背景颜色
                        probability: 200       // 概率 0代表永远也转不到这个选项，数字越大概率也就越大,data中的probability属性设置为true时是才生效, 这属性也必须填写，不填写会出错
                    },
                    {
                        id: 1,
                        name: "很帅",
                        color: '#AA47BC',
                        probability: 10
                    },
                    {
                        id: 2,
                        name: "贼帅",
                        color: '#42A5F6',
                        probability: 10
                    },
                    {
                        id: 3,
                        name: "非常帅",
                        color: '#66BB6A',
                        probability: 10
                    },
                    {
                        id: 4,
                        name: "超级帅",
                        color: '#FFA500',
                        probability: 100
                    },
                    {
                        id: 5,
                        name: "宇宙无敌第一帅",
                        color: '#FF4500',
                        probability: 0
                    },
                    {
                        id: 6,
                        name: "你最美",
                        color: '#AA47BC',
                        probability: 10
                    }
                ]
            }
        ],
        //更改数据可以更改这属性，格式要像下面这样写才行
        awardsConfig: {
            option: '我帅吗？',//转盘的标题名称
            awards: [
                {
                    id: 0,                // id递增
                    name: "帅帅帅",           // 选项名 超过9个字时字体会变小点 大于13个数时会隐藏掉超出的
                    color: '#FFA827',         // 选项的背景颜色
                    probability: 100       // 概率 0代表永远也转不到这个选项，数字越大概率也就越大,data中的probability属性设置为true时是才生效, 这属性也必须填写，不填写会出错
                },
                {
                    id: 1,
                    name: "很帅",
                    color: '#AA47BC',
                    probability: 10
                },
                {
                    id: 2,
                    name: "贼帅",
                    color: '#42A5F6',
                    probability: 10
                },
                {
                    id: 3,
                    name: "非常帅",
                    color: '#66BB6A',
                    probability: 10
                },
                {
                    id: 4,
                    name: "超级帅",
                    color: '#FFA500',
                    probability: 100
                },
                {
                    id: 5,
                    name: "宇宙无敌第一帅",
                    color: '#FF4500',
                    probability: 0
                },
                {
                    id: 6,
                    name: "你最美",
                    color: '#AA47BC',
                    probability: 10
                },
            ]
        }
    },

    //接收当前转盘初始化时传来的参数
    getData(e) {
        this.setData({
            option: e.detail.option
        })
    },

    //接收当前转盘结束后的答案选项
    getAwards(e) {
        wx.showToast({
            title: e.detail,
            icon: 'none'
        })
        this.setData({
            s_awards: e.detail,
        })
    },

    //开始转动或者结束转动
    startZhuan(e) {
        this.setData({
            zhuanflg: e.detail ? true : false
        })
    },

    //切换转盘选项
    switchZhuanpan(e) {
        //当转盘停止时才执行切换转盘
        if (!this.data.zhuanflg) {
            var idx = e.currentTarget.dataset.idx, zhuanpanArr = this.data.zhuanpanArr, obj = {};
            for (let i in zhuanpanArr) {
                if (this.data.option != zhuanpanArr[i].option && zhuanpanArr[i].id == idx) {
                    obj.option = zhuanpanArr[i].option;
                    obj.awards = zhuanpanArr[i].awards;
                    this.setData({
                        awardsConfig: obj //其实默认要更改当前转盘的数据要传个这个对象，才有效果
                    })
                    break;
                }
            }
        }
    },

    //转盘声音
    switch1Change1(e) {
        var value = e.detail.value;
        if (this.data.zhuanflg) {
            wx.showToast({
                title: '当转盘停止转动后才有效',
                icon: 'none'
            })
            return;
        } else {
            this.setData({
                musicflg: value
            })
        }
    },

    //不重复抽取
    switch1Change2(e) {
        var value = e.detail.value;
        if (this.data.zhuanflg) {
            wx.showToast({
                title: '当转盘停止转动后才有效',
                icon: 'none'
            })
            return;
        } else {
            this.setData({
                repeat: value
            })
        }
    },

    //快速决定
    switch1Change3(e) {
        var value = e.detail.value;
        if (this.data.zhuanflg) {
            wx.showToast({
                title: '当转盘停止转动后才有效',
                icon: 'none'
            })
            return;
        } else {
            this.setData({
                fastJuedin: value
            })
        }
    },

    //概率 == 如果不重复抽取开启的话 概率是无效的
    switch1Change4(e) {
        var value = e.detail.value;
        if (this.data.zhuanflg) {
            wx.showToast({
                title: '当转盘停止转动后才有效',
                icon: 'none'
            })
            return;
        } else {
            this.setData({
                probability: value
            })
        }
    },

    onLoad: function () {
        //实例化组件对象，这样有需要时就能调用组件内的方法
        this.zhuanpan = this.selectComponent("#zhuanpan");

        //可以这样调用 示例：this.zhuanpan.switchZhuanpan(data); 
        //上面这方法可用来切换转盘选项数据，参数可以看组件构造器中的switchZhuanpan方法
    }
})
