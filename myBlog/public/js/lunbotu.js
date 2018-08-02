window.onload = function() {
    var imgList = document.getElementById("imgLists");
    var imgArr = document.getElementsByClassName("lunBopic");
    //设置imgList的宽度
    imgList.style.width = (1000+10) * imgArr.length +  "px";

    //设置导航按钮居中
    var navList = document.getElementById("navLists");
    var outer = document.getElementById("lunBo");

    //设置navList的left值
    navList.style.left = (outer.offsetWidth - navList.offsetWidth)/2 + "px";

    var index = 0;
    var allA = document.getElementsByClassName("item");
    allA[index].style.backgroundColor = "black";

    /*
    点击超链接切换到指定的图片
    点击第一个超链接，显示第一张图片
    点击第二个超链接，显示第二张图
     */

    //为所有的超链接绑定单击响应函数
    for(var i = 0;i < allA.length;i++) {
        //为每一个超链接添加一个num属性
        allA[i].num = i;
        allA[i].onclick = function () {
            //关闭自动切换的定时器
            clearInterval(timer);

            //获取超链接的索引，并将其赋值给index
            index = this.num;
            //切换图片
            setA();
            moveDiv(imgList,(-1000-10)*index,50,"left",function() {
                //动画执行完毕，开启自动切换
                autoChange();
            });
        };
    }

    //自动切换图片
    autoChange();

    //创建一个方法，用来设置选中的a
    function setA() {
        //判断当前索引是否是最后一张图片
        if(index >= imgArr.length - 1) {
            index = 0;
            //此时显示的是最后一张图片，而最后一张和第一张一样
            //通过css将最后一张切换从第一张
            imgList.style.left = 0;
        }

        //遍历所有的a,并将其背景设置为红色
        for(var i = 0;i < allA.length;i++) {
            allA[i].style.backgroundColor = "red";
        }
        //将选中的a设置黑色
        allA[index].style.backgroundColor = "black";
    }

    var timer;//定义定时器标识

    //创建一个函数，用来开启自动切换图片
    function autoChange() {
        //开启一个定时器，用来定时切换图片
        timer = setInterval(function () {
            //使索引自增
            index++;

            //判断Index值
            index %= imgArr.length;

            //执行动画
            moveDiv(imgList,(-1000-10)*index,50,"left",function(){
                //修改导航按钮
                setA();
            });
        },2000);

    }
};