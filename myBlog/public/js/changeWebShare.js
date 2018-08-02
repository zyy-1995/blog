
var webMsgBtn = document.getElementById("webMsgBtn");
var reviewMsgBtn = document.getElementById("reviewMsgBtn");

var webShareBox = document.getElementById("webShareBox");
var reviewMsgBox = document.getElementById("reviewMsgBox");

//初始化样式
webMsgBtn.style.backgroundColor = "palevioletred";
webMsgBtn.style.color = "white";
webShareBox.style.display = "block";
reviewMsgBox.style.display = "none";
reviewMsgBtn.style.backgroundColor = "rgba(219,112,147,0.2)";


webMsgBtn.onclick = function () {
    reviewMsgBox.style.display = "none";
    webShareBox.style.display = "block";
    webMsgBtn.style.backgroundColor = "palevioletred";
    webMsgBtn.style.color = "white";

    reviewMsgBtn.style.backgroundColor = "rgba(219,112,147,0.2)";
    reviewMsgBtn.style.color = "black";
};

reviewMsgBtn.onclick = function () {
    webShareBox.style.display = "none";
    reviewMsgBox.style.display = "block";
    reviewMsgBtn.style.backgroundColor = "palevioletred";
    reviewMsgBtn.style.color = "white";

    webMsgBtn.style.backgroundColor = "rgba(219,112,147,0.2)";
    webMsgBtn.style.color = "black";
};