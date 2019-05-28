'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide         = require('page/common/nav-side/index.js');
var templateBanner  = require('./banner.string');
var _bs             = require('util/bs.js');

$(function() {
	//隐藏详细分类
	$(".category-item-on").hide()
	var i = 0;
	//鼠标移入分类列表时显示详细分类
	$(".category-item").mouseover(function() {
		//获取分类class并正则提取数字
		i = $(this).prop("className").replace(/[^0-9]/ig,"");
		$(".category-item"+i).css("background","rgba(153, 153, 153,.8)");
		$(".category-item-on"+i).show();
	});
	$(".category-item-on").mouseover(function() {
		i = $(this).prop("className").replace(/[^0-9]/ig,"");
		$(".category-item"+i).css("background","#999");
		$(".category-item-on"+i).show();
	});
	//鼠标移出时隐藏详细分类
	$(".category-item").mouseout(function(){
		$(".category-item"+i).css("background","#666");
		$(".category-item-on").hide();
	});
	$(".category-item-on").mouseout(function(){
		$(".category-item"+i).css("background","#666");
		$(".category-item-on").hide();
	});
	
	
    // 渲染banner的html
    var bannerHtml  = _bs.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});
