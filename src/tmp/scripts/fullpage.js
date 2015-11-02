!function(e,n){"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){var s=e(n),a=e(t);e.fn.fullpage=function(l){function r(){l.css3&&(l.css3=te()),l.anchors.length||(l.anchors=e("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),c(),me.setAllowScrolling(!0),Ce=s.height(),me.setAutoScrolling(l.autoScrolling,"internal");var t=e(".fp-section.active").find(".fp-slide.active");t.length&&(0!==e(".fp-section.active").index(".fp-section")||0===e(".fp-section.active").index(".fp-section")&&0!==t.index())&&le(t),H(),ne(),s.on("load",function(){var e=n.location.hash.replace("#","").split("/"),t=e[0],e=e[1];t&&(l.animateAnchor?_(t,e):me.silentMoveTo(t,e))})}function c(){Te.css({height:"100%",position:"relative"}),Te.addClass("fullpage-wrapper"),e("html").addClass("fp-enabled"),Te.removeClass("fp-destroyed"),d(),e(".fp-section").each(function(n){var t=e(this),o=t.find(".fp-slide"),i=o.length;n||0!==e(".fp-section.active").length||t.addClass("active"),t.css("height",Ce+"px"),l.paddingTop&&t.css("padding-top",l.paddingTop),l.paddingBottom&&t.css("padding-bottom",l.paddingBottom),"undefined"!=typeof l.sectionsColor[n]&&t.css("background-color",l.sectionsColor[n]),"undefined"!=typeof l.anchors[n]&&t.attr("data-anchor",l.anchors[n]),"undefined"!=typeof l.anchors[n]&&t.hasClass("active")&&N(l.anchors[n],n),l.menu&&l.css3&&e(l.menu).closest(".fullpage-wrapper").length&&e(l.menu).appendTo(he),i>0?f(t,o,i):l.verticalCentered&&X(t)}),l.fixedElements&&l.css3&&e(l.fixedElements).appendTo(he),l.navigation&&u(),l.scrollOverflow?("complete"===t.readyState&&v(),s.on("load",v)):h()}function f(n,t,o){var i=100*o,s=100/o;t.wrapAll('<div class="fp-slidesContainer" />'),t.parent().wrap('<div class="fp-slides" />'),n.find(".fp-slidesContainer").css("width",i+"%"),o>1&&(l.controlArrows&&p(n),l.slidesNavigation&&J(n,o)),t.each(function(n){e(this).css("width",s+"%"),l.verticalCentered&&X(e(this))}),n=n.find(".fp-slide.active"),n.length&&(0!==e(".fp-section.active").index(".fp-section")||0===e(".fp-section.active").index(".fp-section")&&0!==n.index())?le(n):t.eq(0).addClass("active")}function d(){e(l.sectionSelector).each(function(){e(this).addClass("fp-section")}),e(l.slideSelector).each(function(){e(this).addClass("fp-slide")})}function p(e){e.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),"#fff"!=l.controlArrowColor&&(e.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+l.controlArrowColor),e.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+l.controlArrowColor+" transparent transparent")),l.loopHorizontal||e.find(".fp-controlArrow.fp-prev").hide()}function u(){he.append('<div id="fp-nav"><ul></ul></div>');var n=e("#fp-nav");n.addClass(function(){return l.showActiveTooltip?"fp-show-active "+l.navigationPosition:l.navigationPosition});for(var t=0;t<e(".fp-section").length;t++){var o="";l.anchors.length&&(o=l.anchors[t]);var o='<li><a href="#'+o+'"><span></span></a>',i=l.navigationTooltips[t];"undefined"!=typeof i&&""!==i&&(o+='<div class="fp-tooltip '+l.navigationPosition+'">'+i+"</div>"),o+="</li>",n.find("ul").append(o)}e("#fp-nav").css("margin-top","-"+e("#fp-nav").height()/2+"px"),e("#fp-nav").find("li").eq(e(".fp-section.active").index(".fp-section")).find("a").addClass("active")}function v(){e(".fp-section").each(function(){var n=e(this).find(".fp-slide");n.length?n.each(function(){U(e(this))}):U(e(this))}),h()}function h(){var n=e(".fp-section.active"),t=n.find("SLIDES_WRAPPER"),o=n.find(".fp-scrollable");t.length&&(o=t.find(".fp-slide.active")),o.mouseover(),R(n),F(n),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,n.data("anchor"),n.index(".fp-section")+1),e.isFunction(l.afterRender)&&l.afterRender.call(Te)}function m(){var n;if(!l.autoScrolling||l.scrollBar){for(var i=s.scrollTop(),a=0,r=o.abs(i-t.querySelectorAll(".fp-section")[0].offsetTop),c=t.querySelectorAll(".fp-section"),f=0;f<c.length;++f){var d=o.abs(i-c[f].offsetTop);r>d&&(a=f,r=d)}if(n=e(c).eq(a),!n.hasClass("active")&&!n.hasClass("fp-auto-height")){if(Ie=!0,i=e(".fp-section.active"),a=i.index(".fp-section")+1,r=Y(n),c=n.data("anchor"),f=n.index(".fp-section")+1,d=n.find(".fp-slide.active"),d.length)var p=d.data("anchor"),u=d.index();Ee&&(n.addClass("active").siblings().removeClass("active"),e.isFunction(l.onLeave)&&l.onLeave.call(i,a,f,r),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,c,f),R(n),N(c,f-1),l.anchors.length&&(ge=c,Z(u,p,c,f))),clearTimeout(qe),qe=setTimeout(function(){Ie=!1},100)}l.fitToSection&&(clearTimeout(ze),ze=setTimeout(function(){Ee&&l.fitToSection&&(e(".fp-section.active").is(n)&&requestAnimFrame(function(){Ae=!0}),E(n),requestAnimFrame(function(){Ae=!1}))},l.fitToSectionDelay))}}function g(e){return e.find(".fp-slides").length?e.find(".fp-slide.active").find(".fp-scrollable"):e.find(".fp-scrollable")}function S(e,n){if(Me.m[e]){var t,o;if("down"==e?(t="bottom",o=me.moveSectionDown):(t="top",o=me.moveSectionUp),0<n.length){if(!(t="top"===t?!n.scrollTop():"bottom"===t?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0))return!0;o()}else o()}}function w(n){var t=n.originalEvent;if(!y(n.target)&&b(t)){l.autoScrolling&&n.preventDefault(),n=e(".fp-section.active");var i=g(n);Ee&&!ye&&(t=ae(t),Ve=t.y,Ne=t.x,n.find(".fp-slides").length&&o.abs(Oe-Ne)>o.abs(He-Ve)?o.abs(Oe-Ne)>s.width()/100*l.touchSensitivity&&(Oe>Ne?Me.m.right&&me.moveSlideRight():Me.m.left&&me.moveSlideLeft()):l.autoScrolling&&o.abs(He-Ve)>s.height()/100*l.touchSensitivity&&(He>Ve?S("down",i):Ve>He&&S("up",i)))}}function y(n,t){t=t||0;var o=e(n).parent();return t<l.normalScrollElementTouchThreshold&&o.is(l.normalScrollElements)?!0:t==l.normalScrollElementTouchThreshold?!1:y(o,++t)}function b(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function x(e){e=e.originalEvent,l.fitToSection&&ve.stop(),b(e)&&(e=ae(e),He=e.y,Oe=e.x)}function T(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),s=0;s<i.length;s++)t+=i[s];return o.ceil(t/n)}function C(t){var i=(new Date).getTime();if(l.autoScrolling&&!we){t=t||n.event;var s=t.wheelDelta||-t.deltaY||-t.detail,a=o.max(-1,o.min(1,s)),r="undefined"!=typeof t.wheelDeltaX||"undefined"!=typeof t.deltaX,r=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!r;return 149<Le.length&&Le.shift(),Le.push(o.abs(s)),l.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1),t=e(".fp-section.active"),t=g(t),s=i-Ye,Ye=i,s>200&&(Le=[]),Ee&&(i=T(Le,10),s=T(Le,70),i>=s&&r&&(0>a?S("down",t):S("up",t))),!1}l.fitToSection&&ve.stop()}function A(n){var t=e(".fp-section.active").find(".fp-slides"),o=t.find(".fp-slide").length;if(!(!t.length||ye||2>o)){var o=t.find(".fp-slide.active"),i=null,i="prev"===n?o.prev(".fp-slide"):o.next(".fp-slide");if(!i.length){if(!l.loopHorizontal)return;i="prev"===n?o.siblings(":last"):o.siblings(":first")}ye=!0,P(t,i)}}function k(){e(".fp-slide.active").each(function(){le(e(this),"internal")})}function E(n,t,o){requestAnimFrame(function(){var i=n.position();if("undefined"!=typeof i){var a=n.hasClass("fp-auto-height")?i.top-Ce+n.height():i.top,i={element:n,callback:t,isMovementUp:o,dest:i,dtop:a,yMovement:Y(n),anchorLink:n.data("anchor"),sectionIndex:n.index(".fp-section"),activeSlide:n.find(".fp-slide.active"),activeSection:e(".fp-section.active"),leavingSection:e(".fp-section.active").index(".fp-section")+1,localIsResizing:Ae};if(!(i.activeSection.is(n)&&!Ae||l.scrollBar&&s.scrollTop()===i.dtop&&!n.hasClass("fp-auto-height"))){if(i.activeSlide.length)var r=i.activeSlide.data("anchor"),c=i.activeSlide.index();if(l.autoScrolling&&l.continuousVertical&&"undefined"!=typeof i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i.isMovementUp?e(".fp-section.active").before(i.activeSection.nextAll(".fp-section")):e(".fp-section.active").after(i.activeSection.prevAll(".fp-section").get().reverse()),re(e(".fp-section.active").position().top),k(),i.wrapAroundElements=i.activeSection,i.dest=i.element.position(),i.dtop=i.dest.top,i.yMovement=Y(i.element)),e.isFunction(l.onLeave)&&!i.localIsResizing){if(!1===l.onLeave.call(i.activeSection,i.leavingSection,i.sectionIndex+1,i.yMovement))return;q(i.activeSection)}n.addClass("active").siblings().removeClass("active"),R(n),Ee=!1,Z(c,r,i.anchorLink,i.sectionIndex),L(i),ge=i.anchorLink,N(i.anchorLink,i.sectionIndex)}}})}function L(n){if(l.css3&&l.autoScrolling&&!l.scrollBar)j("translate3d(0px, -"+n.dtop+"px, 0px)",!0),l.scrollingSpeed?Re=setTimeout(function(){B(n)},l.scrollingSpeed):B(n);else{var t=M(n);e(t.element).animate(t.options,l.scrollingSpeed,l.easing).promise().done(function(){B(n)})}}function M(e){var n={};return l.autoScrolling&&!l.scrollBar?(n.options={top:-e.dtop},n.element=".fullpage-wrapper"):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function B(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(".fp-section:first").before(n.wrapAroundElements):e(".fp-section:last").after(n.wrapAroundElements),re(e(".fp-section.active").position().top),k()),n.element.find(".fp-scrollable").mouseover(),e.isFunction(l.afterLoad)&&!n.localIsResizing&&l.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),F(n.element),Ee=!0,e.isFunction(n.callback)&&n.callback.call(this)}function R(n){var t=n.find(".fp-slide.active");t.length&&(n=e(t)),n.find("img[data-src], source[data-src], audio[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src"),e(this).is("source")&&e(this).closest("video").get(0).load()})}function F(n){n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("autoplay")&&"function"==typeof n.play&&n.play()})}function q(n){n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-ignore")||"function"!=typeof n.pause||n.pause()})}function z(){if(!Ie&&!l.lockAnchors){var e=n.location.hash.replace("#","").split("/"),t=e[0],e=e[1],o="undefined"==typeof ge,i="undefined"==typeof ge&&"undefined"==typeof e&&!ye;t.length&&(t&&t!==ge&&!o||i||!ye&&Se!=e)&&_(t,e)}}function D(e){Ee&&(e.pageY<Ue?me.moveSectionUp():e.pageY>Ue&&me.moveSectionDown()),Ue=e.pageY}function P(n,t){var i=t.position(),s=t.index(),a=n.closest(".fp-section"),r=a.index(".fp-section"),c=a.data("anchor"),f=a.find(".fp-slidesNav"),d=ee(t),p=Ae;if(l.onSlideLeave){var u,v=a.find(".fp-slide.active"),h=v.index();if(u=h==s?"none":h>s?"left":"right",!p&&"none"!==u&&e.isFunction(l.onSlideLeave)&&!1===l.onSlideLeave.call(v,c,r+1,h,u,s))return void(ye=!1)}t.addClass("active").siblings().removeClass("active"),p||R(t),!l.loopHorizontal&&l.controlArrows&&(a.find(".fp-controlArrow.fp-prev").toggle(0!==s),a.find(".fp-controlArrow.fp-next").toggle(!t.is(":last-child"))),a.hasClass("active")&&Z(s,d,c,r);var m=function(){p||e.isFunction(l.afterSlideLoad)&&l.afterSlideLoad.call(t,c,r+1,d,s),ye=!1};l.css3?(i="translate3d(-"+o.round(i.left)+"px, 0px, 0px)",O(n.find(".fp-slidesContainer"),0<l.scrollingSpeed).css(ce(i)),Fe=setTimeout(function(){m()},l.scrollingSpeed,l.easing)):n.animate({scrollLeft:o.round(i.left)},l.scrollingSpeed,l.easing,function(){m()}),f.find(".active").removeClass("active"),f.find("li").eq(s).find("a").addClass("active")}function I(){if(H(),be){var n=e(t.activeElement);n.is("textarea")||n.is("input")||n.is("select")||(n=s.height(),o.abs(n-We)>20*o.max(We,n)/100&&(me.reBuild(!0),We=n))}else clearTimeout(Be),Be=setTimeout(function(){me.reBuild(!0)},350)}function H(){var e=l.responsive||l.responsiveWidth,n=l.responsiveHeight,t=e&&s.width()<e,o=n&&s.height()<n;e&&n?me.setResponsive(t||o):e?me.setResponsive(t):n&&me.setResponsive(o)}function O(e){var n="all "+l.scrollingSpeed+"ms "+l.easingcss3;return e.removeClass("fp-notransition"),e.css({"-webkit-transition":n,transition:n})}function V(e,n){if(825>e||900>n){var t=o.min(100*e/825,100*n/900).toFixed(2);he.css("font-size",t+"%")}else he.css("font-size","100%")}function N(n,t){l.menu&&(e(l.menu).find(".active").removeClass("active"),e(l.menu).find('[data-menuanchor="'+n+'"]').addClass("active")),l.navigation&&(e("#fp-nav").find(".active").removeClass("active"),n?e("#fp-nav").find('a[href="#'+n+'"]').addClass("active"):e("#fp-nav").find("li").eq(t).find("a").addClass("active"))}function Y(n){var t=e(".fp-section.active").index(".fp-section");return n=n.index(".fp-section"),t==n?"none":t>n?"up":"down"}function U(e){e.css("overflow","hidden");var n,t=e.closest(".fp-section"),o=e.find(".fp-scrollable");o.length?n=o.get(0).scrollHeight:(n=e.get(0).scrollHeight,l.verticalCentered&&(n=e.find(".fp-tableCell").get(0).scrollHeight)),t=Ce-parseInt(t.css("padding-bottom"))-parseInt(t.css("padding-top")),n>t?o.length?o.css("height",t+"px").parent().css("height",t+"px"):(l.verticalCentered?e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):e.wrapInner('<div class="fp-scrollable" />'),e.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:t+"px",size:"10px",alwaysVisible:!0})):W(e),e.css("overflow","")}function W(e){e.find(".fp-scrollable").children().first().unwrap().unwrap(),e.find(".slimScrollBar").remove(),e.find(".slimScrollRail").remove()}function X(e){e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+K(e)+'px;" />')}function K(e){var n=Ce;return(l.paddingTop||l.paddingBottom)&&(n=e,n.hasClass("fp-section")||(n=e.closest(".fp-section")),e=parseInt(n.css("padding-top"))+parseInt(n.css("padding-bottom")),n=Ce-e),n}function j(e,n){n?O(Te):Te.addClass("fp-notransition"),Te.css(ce(e)),setTimeout(function(){Te.removeClass("fp-notransition")},10)}function Q(n){var t=e('.fp-section[data-anchor="'+n+'"]');return t.length||(t=e(".fp-section").eq(n-1)),t}function _(e,n){var t=Q(e);"undefined"==typeof n&&(n=0),e===ge||t.hasClass("active")?G(t,n):E(t,function(){G(t,n)})}function G(e,n){if("undefined"!=typeof n){var t,o=e.find(".fp-slides");t=e.find(".fp-slides");var i=t.find('.fp-slide[data-anchor="'+n+'"]');i.length||(i=t.find(".fp-slide").eq(n)),t=i,t.length&&P(o,t)}}function J(e,n){e.append('<div class="fp-slidesNav"><ul></ul><span class="border1"></span></div>');var t=e.find(".fp-slidesNav");t.addClass(l.slidesNavPosition);for(var o=0;n>o;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.find("li").first().find("a").addClass("active")}function Z(e,n,t,o){o="",l.anchors.length&&!l.lockAnchors&&(e?("undefined"!=typeof t&&(o=t),"undefined"==typeof n&&(n=e),Se=n,$(o+"/"+n)):("undefined"!=typeof e&&(Se=n),$(t))),ne()}function $(e){if(l.recordHistory)location.hash=e;else if(be||xe)history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function ee(e){var n=e.data("anchor");return e=e.index(),"undefined"==typeof n&&(n=e),n}function ne(){var n=e(".fp-section.active"),t=n.find(".fp-slide.active"),o=ee(n),i=ee(t);n.index(".fp-section"),n=String(o),t.length&&(n=n+"-"+i),n=n.replace("/","-").replace("#",""),he[0].className=he[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g"),""),he.addClass("fp-viewing-"+n)}function te(){var e,o=t.createElement("p"),s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var a in s)o.style[a]!==i&&(o.style[a]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(s[a]));return t.body.removeChild(o),e!==i&&0<e.length&&"none"!==e}function oe(){if(be||xe){var n=se();e(".fullpage-wrapper").off("touchstart "+n.down).on("touchstart "+n.down,x),e(".fullpage-wrapper").off("touchmove "+n.move).on("touchmove "+n.move,w)}}function ie(){if(be||xe){var n=se();e(".fullpage-wrapper").off("touchstart "+n.down),e(".fullpage-wrapper").off("touchmove "+n.move)}}function se(){return n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function ae(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,xe&&b(e)&&l.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function le(e,n){me.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(Ae=!0),P(e.closest(".fp-slides"),e),"undefined"!=typeof n&&(Ae=!1),me.setScrollingSpeed(Pe.scrollingSpeed,"internal")}function re(e){l.scrollBar?Te.scrollTop(e):l.css3?j("translate3d(0px, -"+e+"px, 0px)",!1):Te.css("top",-e)}function ce(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function fe(e,n,t){switch(n){case"up":Me[t].up=e;break;case"down":Me[t].down=e;break;case"left":Me[t].left=e;break;case"right":Me[t].right=e;break;case"all":"m"==t?me.setAllowScrolling(e):me.setKeyboardScrolling(e)}}function de(){re(0),e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),e(".fp-section").css({height:"","background-color":"",padding:""}),e(".fp-slide").css({width:""}),Te.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),ve.css({overflow:"",height:""}),e("html").removeClass("fp-enabled"),e.each(he.get(0).className.split(/\s+/),function(e,n){0===n.indexOf("fp-viewing")&&he.removeClass(n)}),e(".fp-section, .fp-slide").each(function(){W(e(this)),e(this).removeClass("fp-table active")}),Te.addClass("fp-notransition"),Te.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){e(this).replaceWith(this.childNodes)}),ve.scrollTop(0)}function pe(e,n,t){l[e]=n,"internal"!==t&&(Pe[e]=n)}function ue(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var ve=e("html, body"),he=e("body"),me=e.fn.fullpage;l=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},l),function(){l.continuousVertical&&(l.loopTop||l.loopBottom)&&(l.continuousVertical=!1,ue("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),l.scrollBar&&l.scrollOverflow&&ue("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),l.continuousVertical&&l.scrollBar&&(l.continuousVertical=!1,ue("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(l.anchors,function(n,t){(e("#"+t).length||e('[name="'+t+'"]').length)&&ue("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}(),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return 1>(n/=i/2)?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e.extend(e.easing,{easeInQuart:function(e,n,t,o,i){return o*(n/=i)*n*n*n+t}}),me.setAutoScrolling=function(n,t){pe("autoScrolling",n,t);var o=e(".fp-section.active");l.autoScrolling&&!l.scrollBar?(ve.css({overflow:"hidden",height:"100%"}),me.setRecordHistory(Pe.recordHistory,"internal"),Te.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&re(o.position().top)):(ve.css({overflow:"visible",height:"initial"}),me.setRecordHistory(!1,"internal"),Te.css({"-ms-touch-action":"","touch-action":""}),re(0),o.length&&ve.scrollTop(o.position().top))},me.setRecordHistory=function(e,n){pe("recordHistory",e,n)},me.setScrollingSpeed=function(e,n){pe("scrollingSpeed",e,n)},me.setFitToSection=function(e,n){pe("fitToSection",e,n)},me.setLockAnchors=function(e){l.lockAnchors=e},me.setMouseWheelScrolling=function(e){if(e){e="";var o;n.addEventListener?o="addEventListener":(o="attachEvent",e="on");var s="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==s?t[o](e+"MozMousePixelScroll",C,!1):t[o](e+s,C,!1)}else t.addEventListener?(t.removeEventListener("mousewheel",C,!1),t.removeEventListener("wheel",C,!1),t.removeEventListener("MozMousePixelScroll",C,!1)):t.detachEvent("onmousewheel",C)},me.setAllowScrolling=function(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){fe(n,t,"m")})):n?(me.setMouseWheelScrolling(!0),oe()):(me.setMouseWheelScrolling(!1),ie())},me.setKeyboardScrolling=function(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){fe(n,t,"k")})):l.keyboardScrolling=n},me.moveSectionUp=function(){var n=e(".fp-section.active").prev(".fp-section");n.length||!l.loopTop&&!l.continuousVertical||(n=e(".fp-section").last()),n.length&&E(n,null,!0)},me.moveSectionDown=function(){var n=e(".fp-section.active").next(".fp-section");n.length||!l.loopBottom&&!l.continuousVertical||(n=e(".fp-section").first()),n.length&&E(n,null,!1)},me.silentMoveTo=function(e,n){requestAnimFrame(function(){me.setScrollingSpeed(0,"internal")}),me.moveTo(e,n),requestAnimFrame(function(){me.setScrollingSpeed(Pe.scrollingSpeed,"internal")})},me.moveTo=function(e,n){var t=Q(e);"undefined"!=typeof n?_(e,n):0<t.length&&E(t)},me.moveSlideRight=function(){A("next")},me.moveSlideLeft=function(){A("prev")},me.reBuild=function(n){if(!Te.hasClass("fp-destroyed")){requestAnimFrame(function(){Ae=!0});var t=s.width();Ce=s.height(),l.resize&&V(Ce,t),e(".fp-section").each(function(){var n=e(this).find(".fp-slides"),t=e(this).find(".fp-slide");l.verticalCentered&&e(this).find(".fp-tableCell").css("height",K(e(this))+"px"),e(this).css("height",Ce+"px"),l.scrollOverflow&&(t.length?t.each(function(){U(e(this))}):U(e(this))),1<t.length&&P(n,n.find(".fp-slide.active"))}),(t=e(".fp-section.active").index(".fp-section"))&&me.silentMoveTo(t+1),requestAnimFrame(function(){Ae=!1}),e.isFunction(l.afterResize)&&n&&l.afterResize.call(Te),e.isFunction(l.afterReBuild)&&!n&&l.afterReBuild.call(Te)}},me.setResponsive=function(n){var t=Te.hasClass("fp-responsive");n?t||(me.setAutoScrolling(!1,"internal"),me.setFitToSection(!1,"internal"),e("#fp-nav").hide(),Te.addClass("fp-responsive")):t&&(me.setAutoScrolling(Pe.autoScrolling,"internal"),me.setFitToSection(Pe.autoScrolling,"internal"),e("#fp-nav").show(),Te.removeClass("fp-responsive"))};var ge,Se,we,ye=!1,be=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),xe="ontouchstart"in n||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,Te=e(this),Ce=s.height(),Ae=!1,ke=!0,Ee=!0,Le=[],Me={m:{up:!0,down:!0,left:!0,right:!0}};Me.k=e.extend(!0,{},Me.m);var Be,Re,Fe,qe,ze,De,Pe=e.extend(!0,{},l);e(this).length&&r();var Ie=!1;s.on("scroll",m);var He=0,Oe=0,Ve=0,Ne=0,Ye=(new Date).getTime();n.requestAnimFrame=function(){return n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(e){e()}}(),s.on("hashchange",z),a.keydown(function(n){clearTimeout(De);var t=e(":focus");t.is("textarea")||t.is("input")||t.is("select")||!l.keyboardScrolling||!l.autoScrolling||(-1<e.inArray(n.which,[40,38,32,33,34])&&n.preventDefault(),we=n.ctrlKey,De=setTimeout(function(){var t=n.shiftKey;switch(n.which){case 38:case 33:Me.k.up&&me.moveSectionUp();break;case 32:if(t&&Me.k.up){me.moveSectionUp();break}case 40:case 34:Me.k.down&&me.moveSectionDown();break;case 36:Me.k.up&&me.moveTo(1);break;case 35:Me.k.down&&me.moveTo(e(".fp-section").length);break;case 37:Me.k.left&&me.moveSlideLeft();break;case 39:Me.k.right&&me.moveSlideRight()}},150))}),a.keyup(function(e){ke&&(we=e.ctrlKey)}),e(n).blur(function(){we=ke=!1}),Te.mousedown(function(e){2==e.which&&(Ue=e.pageY,Te.on("mousemove",D))}),Te.mouseup(function(e){2==e.which&&Te.off("mousemove")});var Ue=0;a.on("click touchstart","#fp-nav a",function(n){n.preventDefault(),n=e(this).parent().index(),E(e(".fp-section").eq(n))}),a.on("click touchstart",".fp-slidesNav a",function(n){n.preventDefault(),n=e(this).closest(".fp-section").find(".fp-slides");var t=n.find(".fp-slide").eq(e(this).closest("li").index());P(n,t)}),l.normalScrollElements&&(a.on("mouseenter",l.normalScrollElements,function(){me.setMouseWheelScrolling(!1)}),a.on("mouseleave",l.normalScrollElements,function(){me.setMouseWheelScrolling(!0)})),e(".fp-section").on("click touchstart",".fp-controlArrow",function(){e(this).hasClass("fp-prev")?Me.m.left&&me.moveSlideLeft():Me.m.right&&me.moveSlideRight()}),s.resize(I);var We=Ce;me.destroy=function(n){me.setAutoScrolling(!1,"internal"),me.setAllowScrolling(!1),me.setKeyboardScrolling(!1),Te.addClass("fp-destroyed"),clearTimeout(Fe),clearTimeout(Re),clearTimeout(Be),clearTimeout(qe),clearTimeout(ze),s.off("scroll",m).off("hashchange",z).off("resize",I),a.off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",l.normalScrollElements).off("mouseout",l.normalScrollElements),e(".fp-section").off("click",".fp-controlArrow"),clearTimeout(Fe),clearTimeout(Re),n&&de()}}});