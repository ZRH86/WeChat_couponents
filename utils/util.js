const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const timeCycle = (d, sign1 = '-') => {
  const time = d.replace(/\-/g, '/');
  const date = new Date(time);
  const nowDate = new Date();
  const dateTime = date.getTime();
  const nowDateTime = nowDate.getTime();
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  if (nowDateTime - dateTime < 300000) {
    return '刚刚'
  } else if (nowDateTime - dateTime < 86400000) {
    return `${hour}:${minute}`
  } else if (nowDateTime - dateTime < 2592000000) {
    return `${month}${sign1}${day} ${hour}:${minute}`
  } else {
    return `${year}${sign1}${month}${sign1}${day} ${hour}:${minute}`
  }
}
/**转换时间为多久前 */
const howLongAgo = d => {
  const time = d.replace(/\-/g, '/')
  const date = new Date(time);
  const nowDate = new Date();
  const oldTimestamp = date.getTime();
  const nowTimestamp = nowDate.getTime();
  const minute = 60 * 1000; // 1分钟 
  const hour = 60 * minute; // 1小时 
  const day = 24 * hour; // 1天 
  const month = 31 * day; // 月 
  const year = 12 * month; // 年 
  const timeDiff = nowTimestamp - oldTimestamp;
  let r = 0;
  if (timeDiff > year) {
    r = (timeDiff / year);
    return r.toFixed(0) + "年前";
  }
  if (timeDiff > month) {
    r = (timeDiff / month);
    return r.toFixed(0) + "个月前";
  }
  if (timeDiff > day) {
    r = (timeDiff / day);
    return r.toFixed(0) + "天前";
  }
  if (timeDiff > hour) {
    r = (timeDiff / hour);
    return r.toFixed(0) + "小时前";
  }
  if (timeDiff > minute) {
    r = (timeDiff / minute);
    return r.toFixed(0) + "分钟前";
  }
  return "刚刚";
}
/**
 * 数组对象过滤
 * @param {array} array 需要转换的数组对象
 * @param {code} code 要转换的值
 * @param {key} key 判断的属性
 * @param {value} value 返回的属性
 */
const toDescribe = (array = [], code = "", key = "", value = "") => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i]) {
      if (array[i][key] === code) {
        return array[i][value]
      }
    }
  }
}

/**
 * oss路径拼接
 * @url 需要拼接的路径
 */
const ossImgShow1 = (url) => {
  return 'https://mkmarketing-oss.markorhome.com/' + url + "?x-oss-process=style/mk_sm&r=" + new Date().getTime();
}

module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber,
  timeCycle: timeCycle,
  howLongAgo: howLongAgo,
  toDescribe: toDescribe,
  ossImgShow1: ossImgShow1
}
