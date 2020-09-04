const VerifyFactory = function (type, str) { }
VerifyFactory.prototype = {
    character: function (str, mixLength, maxLength) { // 任意字符-限制长度
        if(str.length < mixLength) {
            return {bool: false, msg: `最少输入${mixLength}位`};
        } else if(str.length > maxLength) {
            return {bool: false, msg: `最多输入${maxLength}位`};
        } else {
            return {bool: true, msg: ``};
        }
    },
    email: function (str) { // 邮箱
        return (function () {
            var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
            return reg.test(str);
        })(str);
    },
    phone: function (str) { // 手机号
        return (function (str) {
            var reg = /^1[3|4|5|7|8][0-9]{9}$/;
            return reg.test(str);
        })(str);
    },
    certno: function (str) { // 身份证号
        return (function () {
            var reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
            return reg.test(str);
        })(str);
    },
    password: function (str) { // 6-16位：字母或者数字
        return (function () {
            if (str.length < 6) {
                return '请输入6-16位密码';
            } else if (str.length > 16) {
                return '请输入6-16位密码';
            } else {
                const reg = /^[a-zA-Z0-9]{6,16}$/;
                return reg.test(str) == true ? true : '请输入正确格式';
            }
        })(str);
    },
    confirmPwd: function (str1, str2) { // 确认密码
        return (function () {
            return (str1 == str2);
        })(str1, str2);
    },
    code: function (user, curr) { // 图片验证码
        return (function (user, curr) {
            var curr = curr.toLowerCase();
            var reg = /^[a-zA-Z]{4}$/;
            if (reg.test(user)) { // 验证码格式正确判断是否相符
                var usertest = user.toLowerCase();
                return (usertest == curr) ? 2 : 1;
            } else {
                return 0; // 验证码格式不对
            }
        })(user, curr);
    },
    dynamic: function (str) { // 动态验证码 -- 6位数字
        return (function () {
            var reg = /^[0-9]{6}$/;
            return reg.test(str);
        })(str);
    }
}

module.exports = {
    VerifyFactory: VerifyFactory
}