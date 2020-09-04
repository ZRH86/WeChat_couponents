/**
 * 来源
 */
const sourceData = [
    { key: '', label: '全部' },
    { key: 'search', label: '搜索' },
    { key: 'scan_designer_card', label: '扫设计顾问名片' },
    { key: 'scan_designer_ab', label: ' 扫设计顾问ab券活动码' },
    { key: 'scan_openid_ab ', label: '扫用户ab券活动码' },
    { key: 'share_imagetext ', label: '分享方案页面' },
    { key: 'share_card_designer ', label: '分享设计顾问名片' },
    { key: 'share_ab  ', label: '分享ab券的活动页面' },
    { key: 'share_other ', label: '分享其他页面' }
];
/**
 * 新旧用户
 */
const cateData = [
    {key: '', label: '全部'},
    {key: '0', label: '新用户'},
    {key: '1', label: '有联系方式'},
];
/**
 * 线索类型
 */
const cluesType = [
    {name: '全部', type: ''},
    {name: '查看名片', type: 'page_businesscard'},
    {name: '复制微信', type: 'btn_businesscard_copywechat'},
    {name: '保存电话', type: 'btn_businesscard_savephonenumber'},
    {name: '收藏方案', type: 'btn_plan_like'},
    {name: '找你设计', type: 'btn_plan_design'},
    {name: '拨打手机', type: 'btn_businesscard_mobilephone'},
    {name: '拨打座机', type: 'btn_businesscard_telephone'},
    {name: '复制邮箱', type: 'btn_businesscard_copyemail'},
    {name: '分享方案', type: 'btn_planlist_share'},
    {name: '分享名片', type: 'btn_businesscard_sharecard'},
    {name: 'AB券转发', type: 'btn_invitedgift_invite'},
];
/**
 * 商品列表
 */
const goodsList = [
    {title: '单人沙发', like: 1, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/EAD670176 D1882/common/SM_IMAGE/SM_001.jpg'},
    {title: '双人沙发', like: 0, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/11M9007U212301/common/SM_IMAGE/SM_001.jpg?x-oss-process=image/resize,m_pad,h_500,w_500,color_FFFFFF'},
    {title: '早安床头柜', like: 0, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/CACLA-016-063/common/SM_IMAGE/SM_001.jpg'},
    {title: '单人沙发', like: 1, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/EAD670176 D1882/common/SM_IMAGE/SM_001.jpg'},
    {title: '双人沙发', like: 0, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/11M9007U212301/common/SM_IMAGE/SM_001.jpg?x-oss-process=image/resize,m_pad,h_500,w_500,color_FFFFFF'},
    {title: '早安床头柜', like: 0, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/CACLA-016-063/common/SM_IMAGE/SM_001.jpg'},
    {title: '单人沙发', like: 0, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/EAD670176 D1882/common/SM_IMAGE/SM_001.jpg'},
    {title: '双人沙发', like: 1, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/11M9007U212301/common/SM_IMAGE/SM_001.jpg?x-oss-process=image/resize,m_pad,h_500,w_500,color_FFFFFF'},
    {title: '早安床头柜', like: 0, goodsImg: 'http://mkmarketing.oss-cn-hangzhou.aliyuncs.com/Marketing/namecard/product/image/CACLA-016-063/common/SM_IMAGE/SM_001.jpg'}
];

module.exports = {
    sourceData,
    cateData,
    cluesType,
    goodsList
};