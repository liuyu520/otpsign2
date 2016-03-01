popupDiv = function(div_id) {
	var div_obj = $("#" + div_id);

	var popupWidth = div_obj.width();
	
	var functionWidth = $("#function").width();
	var functionHeight = $("#function").height();
	
	// 添加并显示遮罩层
	$("<div id='mask'></div>").addClass("mask").width(functionWidth * 0.98)
			.height(functionHeight * 0.98).click(function() {
				hideDiv(div_id);
			}).appendTo("#function").fadeIn(200);
	
	// 弹出层设置
	div_obj.css({
		"position" : "absolute"
	}).animate({
		left : functionWidth / 2 - popupWidth / 2,
		top : 0,
		opacity : "show"
	}, "slow");
};

hideDiv = function(div_id) {
	$("#mask").remove();
	$("#" + div_id).animate({
		left : 0,
		top : 0,
		opacity : "hide"
	}, "slow");
};