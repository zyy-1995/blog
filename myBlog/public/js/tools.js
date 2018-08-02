function moveDiv(obj,target,speed,attr,callback) {
    //关闭上一个定时器
    clearInterval(obj.timer);

    var current = parseInt(getStyle(obj,attr));
    //判断speed速度的正负
    if(current > target) {
        speed = -speed;
    }
    //开启一个定时器，用来执行动画效果
    //向执行动画的对象中添加一个Timer属性，用来保存它自己的定时器标识
    obj.timer = setInterval(function() {

        var oldValue = parseInt(getStyle(obj,attr));

        //speed代表速度
        var newValue = oldValue + speed;

        if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }

        obj.style[attr] = newValue + "px";

        //关闭定时器
        if(newValue == target) {
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            callback && callback();
        }
    },30);
}



/*
定义一个函数，用来获取指定元素的当前的样式
参数：
    obj:要获取样式的元素
    name:要获取的样式名
 */
function getStyle(obj,name){
    if(window.getComputedStyle){
        //正常浏览器的方法
        return  getComputedStyle(obj,null)[name];
    }else{
        //IE8的方式
        return  obj.currentStyle[name];
    }
}