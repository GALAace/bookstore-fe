'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _bs = require('util/bs.js');

$(function(){
    var type        = _bs.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
	if(type === 'payment'){
        var orderNumber  = _bs.getUrlParam('orderNumber'),
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }	
    // 显示对应的提示元素
    $element.show();
})