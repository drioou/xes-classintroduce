window.onload = function() {
    $(".content").show();


};

$(".content").css("margin-left", "-" + $(".content").width() * .5 + "px");

$(".btn.zc a").attr("href", "http://ssh.speiyou.com/z2015/2016zhongce/index.html");
$(".btn.xc a").attr("href", "http://ssh.speiyou.com/z2015/2016xince/index.html");
$(".btn.xb a").attr("href", "http://ssh.speiyou.com/z2015/2016xbquestion/index.html");

function logo() {
    $(".logo").append("<a></a>");
    $(".logo a").attr("href", "http://ssh.speiyou.com");
    $(".logo a").css({
        "width": "100%",
        "height": "100%",
        "display": "block"
    });
};
logo();

function changeLastPage() {
    $(".last-section .col-xs-5:nth-child(1)").hide();
    $(".last-section .row.back .col-xs-5:nth-child(1)").show();
    // APP二维码
    $(".btn.xc").after("<div class='btn app fadeinleft'><a href='http://app.speiyou.com/sp-andior-ios.html'>用学而思APP&nbsp;&nbsp;报班不排队<i class='fa fa-caret-right'></i></a></div>");
    $(".btn.app").css({
        "background": "#4EBEC1"
    });
    $(".btn.xb").removeClass(".fadeinleft").addClass("fadeinright");
    $(".section").append(" <i class='fa fa-home backhome backfirst'></i> ");

};
changeLastPage();

// 课程大纲链接============
function addlink() {

    var link = {
        "one": "http://ssh.speiyou.com/e/20151027/562f2c6d82388.shtml",
        "two": "http://ssh.speiyou.com/e/20151027/562f4380953d6.shtml",
        "three":" http://ssh.speiyou.com/e/20151027/562f4c38bf3fa.shtml ",
        "threechinese":" http://ssh.speiyou.com/e/20151027/562f4d0cbc13a.shtml ",
        "four":" http://ssh.speiyou.com/e/20151027/562f4f636f160.shtml ",
        "five":" http://ssh.speiyou.com/e/20151027/562f51cadd708.shtml ",
        "six":" http://ssh.speiyou.com/e/20151028/56306da671b15.shtml ",
        "seven":" http://ssh.speiyou.com/e/20151028/5630703543cd8.shtml ",
        "eight":" http://ssh.speiyou.com/e/20151028/56307d84931d6.shtml ",
        "nine":"  http://ssh.speiyou.com/e/20151028/563082753dbdf.shtml",
        "ten":" http://ssh.speiyou.com/e/20151028/563085e11281c.shtml ",
        "eleven":" http://ssh.speiyou.com/e/20151028/56308b990d2e0.shtml ",

    };
    var txt = {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "color":"#fff"
    }
    $(".one .one-1 ul li:last-child a").attr("href", link.one).css( txt );
    $(".two .two-1 .col-xs-6:last-child a").attr("href", link.two).css( txt );
    $(".three .three-1 ul li:nth-child(2) a").attr("href", link.three).css( txt );
    $(".there-chinese .there-chinese-5 .there-chinese-top-left a").attr("href", link.threechinese).css( txt );
    $(".four .four-1 ul li:last-child a").attr("href", link.four).css( txt );
    $(".five .five-1 ul li:nth-child(4) a").attr("href", link.five).css( txt );
    $(".six .six-1 ul li:nth-child(4) a").attr("href", link.six).css( txt );
    $(".seven .seven-1 .col-xs-6:nth-child(4) a").attr("href", link.seven).css( txt );
    $(".eight .eight-1 .col-xs-6:nth-child(9) a").attr("href", link.eight).css( txt );
    $(".nine .nine-1 .nine-con a").attr("href", link.nine).css( txt );
    $(".ten .ten-15 .col-xs-4:nth-child(3) a").attr("href", link.ten).css( txt );
    $(".ten.eleven .ten-15 .col-xs-4:nth-child(3) a").attr("href", link.eleven).css( txt );


};
addlink();



// meta================
function mkmeta() {
    var meta = document.createElement("meta");
    meta.setAttribute("name", "Author");
    meta.setAttribute("content", "duanyong");
    // document.head.appendChild(meta);
    $("head").append(meta);
};
mkmeta();



// 屏幕旋转检测============================================

function mkup() {
    var up = document.createElement("div");
    up.setAttribute("class", "up fa fa-2x fa-chevron-circle-down");
    $(".section").append(up);
}
mkup();



var orientLayer = document.getElementById("vertical");
//判断横屏竖屏
function checkDirect() {
    if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {
        return "portrait";
    } else {
        return "landscape";
    }
};
//显示屏幕方向提示浮层
function orientNotice() {
    var orient = checkDirect();
    if (orient == "portrait") {
        $(".vertical").addClass("none");
    } else {
        $(".vertical").removeClass("none");
    }
};

function init() {
    orientNotice();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        setTimeout(orientNotice, 200);
    })
};
init();



// 屏幕旋转检测结束===============================================================


// fullpage  代码 ==================
$(document).ready(function() {
    $('#garde-there-chinese').fullpage({
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        verticalCentered: false,
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        slidesNavigation: true,
        slidesNavPosition: 'top',
        scrollBar: false,
        easing: 'easeIn',
        easingcss3: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5
});
     $('.backfirst').click(function() {
        $.fn.fullpage.moveTo(1, 0);
    });
});

