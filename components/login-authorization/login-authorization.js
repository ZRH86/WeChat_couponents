import {ossImgShow1} from '../../utils/util'
Component({
    data: {
        loginBoxImg: ossImgShow1('Marketing/NameCard/Authorization/loginBox.png'),
        isshowModal: false,
        animationMask: {},
        animationDialog: {}
    },
    properties: {},
    methods: {
        showModal() {
            this.setData({
                isshowModal: true
            });
            setTimeout(() => {
                this._animationExport(1, 0);
            }, 100);
        },
        hideModal() {
            this._animationExport(0, -75);
            setTimeout(() => {
                this.setData({
                    isshowModal: false
                });
            }, 200);
        },
        _animationExport(opacity, translateY) {
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction: 'linear'
            });
            animation.opacity(opacity).step();
            this.setData({
                animationMask: animation.export()
            });
            animation.opacity(opacity).translateY(translateY).step();
            this.setData({
                animationDialog: animation.export()
            });
        },
        onGotUserInfo(e) {
            console.log(e)
        }
    }
});