
window.onload = function() {
    $(".content").show();


};

$(".content").css("margin-left" ,"-"+$(".content").width()*.5+"px" );



// meta================
function mkmeta() {
    var meta = document.createElement("meta");
    meta.setAttribute("name", "Author");
    meta.setAttribute("content", "duanyong");
    // document.head.appendChild(meta);
    $("head").append(meta);
}
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
        normalScrollElementTouchThreshold: 5,


    });
    $('#six-btn-2').click(function() {
        $.fn.fullpage.moveTo(2, 0);
    });
    $('#six-btn-3').click(function() {
        $.fn.fullpage.moveTo(6, 0);
    });
    $('.backfirst').click(function() {
        $.fn.fullpage.moveTo(1, 0);
    });
    $('.mathcommon').click(function() {
        $.fn.fullpage.moveTo(3, 0);
    });
    $('#oneenglish').click(function() {
        $.fn.fullpage.moveTo(6, 0);
    });
    $('#twoenglish').click(function() {
        $.fn.fullpage.moveTo(6, 0);
    });
    $('#threeenglish').click(function() {
        $.fn.fullpage.moveTo(6, 0);
    });
    $('#fourenglish').click(function() {
        $.fn.fullpage.moveTo(6, 0);
    });
    $('#sixenglish').click(function() {
        $.fn.fullpage.moveTo(7, 0);
    });
    $('#sevenenglish').click(function() {
        $.fn.fullpage.moveTo(7, 0);
    });
    $('#eightphy').click(function() {
        $.fn.fullpage.moveTo(6, 0);
    });
    $('#eightenglish').click(function() {
        $.fn.fullpage.moveTo(8, 0);
    });
    $('#ninephy').click(function() {
        $.fn.fullpage.moveTo(7, 0);
    });
    $('#ninechem').click(function() {
        $.fn.fullpage.moveTo(9, 0);
    });
    // fullpage点击下一页
    $(document).on('click', '.nextpage', function() {
        $.fn.fullpage.moveTo(2, 0);
    });
    $(document).on('click', '.prepage', function() {
        $.fn.fullpage.moveSectionUp();
    });



});


$(".btn.newstudent").on("click", function() {
    $(".old").addClass("none");
    $(".new").removeClass("none");
});
$(".btn.oldstudent").on("click", function() {
    $(".old").removeClass("none");
    $(".new").addClass("none");
});

$("#onetime").html("11月30日一年级数学9:00  <br/>一年级英语9:30");
$("#onenewtime").html("12月7日一年级数学9:00  <br/>一年级英语9:30");
// 二年级=============================================================
$("#twotime").html("11月30日二年级数学10:00 <br/> 二年级英语10:30");
$("#twonewtime").html("11月7日二年级数学10:00  <br/>二年级英语10:30");

$("#there-time").html("11月30日三年级数学11:00  <br/>三年级英语11:30");
$("#there-new-time").html("12月7日三年级数学9:00 <br />英语9:30 <br />10月26日三年级语文");

$("#four-time").html("11月30日四年级数学13:00 <br/> 四年级英语13:30");
$("#four-new-time").html("12月7日四年级数学10:00 <br/> 四年级英语10:30");
$("#fivetime").html("11月30日五年级数学9:00 <br/> 一年级英语9:30");
$("#fivenewtime").html("11月30日五年级数学9:00 <br/> 一年级英语9:30");
// 六年级======================================================================
$("#sixtime").html("12月1日六年级数学9:00 <br/> 六年级英语9:30");
$("#sixnewtime").html("12月7日六年级数学13:00 <br/> 六年级英语13:30");
// 七年级================================================================
$("#seventime").html("12月1日七年级数学10:00 <br/> 七年级英语10:30");
$("#sevennewtime").html("12月7日七年级数学11:00  <br/>七年级英语11:30");
// 八年级=====================================================================================
$("#eighttime").html("12月1日数学11:00 <br/> 英语11:30&nbsp;物理12:00");
$("#eightnewtime").html("12月7日数学13:00 <br/> 物理14:00&nbsp;英语13:30");
$("#ninetime").html("12月1日数学13:00 <br/> 物理13:30&nbsp;化学14:00");
$("#ninenewtime").html("12月7日数学14:30 <br/> 物理15:00&nbsp;化学15:30");
$("#tentime").html("12月1日数学14:30 <br/> 物理15:00&nbsp;化学15:30");
$("#tennewtime").html("12月7日数学14:30 <br/> 物理15:00&nbsp;化学15:30");
$("#eleventime").html("12月1日数学14:30 <br/> 物理15:00&nbsp;化学15:30");
$("#elevennewtime").html("12月7日数学14:30 <br/> 物理15:00&nbsp;化学15:30");
// 高中
// $(".ten-15 .col-xs-4").css({"height":$(".ten-15 .row").height()+"px","line-height":$(".ten-15 .row").width()+"px","border-radius":$(".ten-15 .row").width()+"px"})
