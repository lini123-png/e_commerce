/*
在手机上展示项目，需要通过rem适配屏幕大小
 */
function remSize() {
    //获取设备的宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750) {//一般手机不会超过750，iPhone只有375
        deviceWidth = 750;
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320;
    }
    //设置html的字体大小，如果为750px，那么fontSize大小为100px; 1rem=100px;
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    //设置body的fontSize大小
    document.querySelector("body").style.fontSize = 0.3 + 'rem';
}

remSize()
//当窗口变化就发生适配
window.onresize = function () {
    remSize();
}
//需要使用就去main.js中引用