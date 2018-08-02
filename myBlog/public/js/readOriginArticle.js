//点击阅读原文按钮，让页面跳转到对应页面
var readBtns = document.getElementsByClassName("readBtn");

for(let i = 0;i < readBtns.length;i++){
    readBtns[i].onclick = function () {
        const w=window.open('about:blank');
        w.location.href='../src/readOriginArticle.html?id='+`${i+1}`;
    }
}