function toPageFirst(action){
		$("#form")[0].reset();
		if($("#view\\.totalPages").val()>=1){
			$("#view\\.currentPage").val(1);
		}
    	action();
}
// 符策鹏 修改view.currentPage为view.thisPage 2013/7/25
function toPagePre(action){
	if($("#view\\.thisPage").val()!=1) {
		$("#form")[0].reset();
		var pageNumber = parseInt($("#view\\.thisPage").val())-1;
		if(pageNumber>=0){
			$("#view\\.currentPage").val(pageNumber);
		}
    	action();
	}
}
// 符策鹏 修改view.currentPage为view.thisPage 2013/7/25
function toPageNext(action){  
	if($("#view\\.thisPage").val()!=$("#view\\.totalPages").val()&&$("#view\\.currentPage").val()!=0) {
		$("#form")[0].reset();
		$("#view\\.currentPage").val(parseInt($("#view\\.thisPage").val())+1);
    	action();
    	
   	}
}
function toPageLast(action){
		$("#form")[0].reset();
		$("#view\\.currentPage").val($("#view\\.totalPages").val());
    	action();
}
resetCurrentPage=function(){
	$("#view\\.currentPage").val(1);
};
function toPageGo(action){
	
	var currentPage = parseInt($("#view\\.currentPage").val());
	var totalPages = parseInt($("#view\\.totalPages").val());
	$("#form")[0].reset();
	// 判断转向页为是否为空
	
	if(isNaN(currentPage)){
		jAlert("请输入页码！");
		return false;
	}

	// 转向页大于总页数
	if(currentPage > totalPages||currentPage<=0&&totalPages!=0) {
		// $("#view\\.currentPage").val(totalPages);
		// 符策鹏
		jAlert("页码不存在，请重新输入！");
		return;	
	} else {
		$("#view\\.currentPage").val(currentPage);
	}
	action();
}
function checkedAll(event) {
	var obj = event.srcElement?event.srcElement:event.target;
	var nodeList = document.getElementsByName("checked");
	if(nodeList.length==0){
		jAlert("没有可选择的数据！");	
		obj.checked=false;
		return false;
	}else{
		for(var i=0; i < nodeList.length;i++) {
			nodeList[i].checked=obj.checked;
		}
	}
}

function dataListOnMouseOver(event) {
	var obj = event.srcElement?event.srcElement:event.target;
	if(obj.tagName=="INPUT") {
		obj=obj.parentNode;
	}
	obj.parentNode.style.cursor="pointer";
	obj.parentNode.style.backgroundColor='#F0E68C';
}

function dataListOnMouseOut(event) {
	var obj = event.srcElement?event.srcElement:event.target;
	if(obj.tagName=="INPUT") {
		obj=obj.parentNode;
	}
	obj.parentNode.style.backgroundColor='#e5f1f4';
	obj.parentNode.style.cursor="default";
}

function clickCheckedData(event) {
	var obj = event.srcElement?event.srcElement:event.target;
	
	if(obj.tagName=="INPUT") {
		return false;
	}
	obj = obj.parentNode.firstChild;
	while (!obj.tagName) {
		obj = obj.nextSibling;
	}
	obj=obj.firstChild;
	while (!obj.tagName) {
		obj = obj.nextSibling;
	}
	obj.checked=!obj.checked;
}

function dbClickCheckedData(event) {
	var obj = event.srcElement?event.srcElement:event.target;

	if(obj.tagName=="INPUT") {
		return false;
	}
	obj = obj.parentNode.firstChild;
	while (!obj.tagName) {
		obj = obj.nextSibling;
	}
	obj=obj.firstChild;
	while (!obj.tagName) {
		obj = obj.nextSibling;
	}
	obj.checked=true;
}
function getSelections(checkedName,idName,ids){
	var checkedNum = 0;
	var selecteds = document.getElementsByName(checkedName);
	var id = document.getElementsByName(idName);
	ids.value="";
	for(var i=0; i < selecteds.length;i++) {
		if(selecteds[i].checked==true) {
			checkedNum+=1;
			if(ids.value=="") {
				ids.value=id[i].value;
			} else {
				ids.value+=","+id[i].value;
			}
		}
	}
	return checkedNum;
}
function getSelectionsAndNames(checkedName,idName,nameList,ids){
	var checkedNum = 0;
	var selecteds = document.getElementsByName(checkedName);
	var id = document.getElementsByName(idName);
	var name = document.getElementsByName(nameList);
	ids.value="";
	for(var i=0; i < selecteds.length;i++) {
		if(selecteds[i].checked==true) {
			checkedNum+=1;
			if(ids.value=="") {
				ids.value=id[i].value+","+name[i].value;
			} else {
				ids.value+=","+id[i].value+","+name[i].value;
			}
		}
	}
	return checkedNum;
}

var  highlightcolor='#eafcd5';
var  clickcolor='#51b2f6';
function  changeto(event){
	var source=event.srcElement?event.srcElement:event.target;
	if  (source.tagName=="TR"||source.tagName=="TABLE")
	return;
	
	while(source.parentNode!=undefined&&source.tagName!="TD")
	source=source.parentNode;
	if(source.parentNode!=undefined) {
		source=source.parentNode;
	}
	if(source!=undefined) {
		cs  =  source.children;
		if  (cs.length>0&&cs[1].style.backgroundColor!=highlightcolor&&source.id!="nc"&&cs[1].style.backgroundColor!=clickcolor) {
			for(i=0;i<cs.length;i++){
				cs[i].style.backgroundColor=highlightcolor;
			}
		}
	}
}

function  changeback(event){
	var source=event.srcElement?event.srcElement:event.target;
	
	var fromElement = event.fromElement?event.fromElement:event.target;
	var toElement = event.toElement?event.toElement:event.relatedTarget;
	if  (fromElement==toElement||source==toElement||source.id=="nc")
	return
	while(source.parentNode!=undefined&&source.tagName!="TD")
	source=source.parentNode;
	
	if(source.parentNode!=undefined) {
		source=source.parentNode;
	}
	if(source.parentNode!=undefined) {
		var cs  =  source.children;
		if  (toElement!=source&&cs.length>0&&cs[1].style.backgroundColor!=clickcolor)
			for(i=0;i<cs.length;i++){
				cs[i].style.backgroundColor="";
			}
	}
}

function  clickto(){
	var source=event.srcElement?event.srcElement:event.target;
	if  (source.tagName=="TR"||source.tagName=="TABLE")
	return;
	while(source.tagName!="TD")
	source=source.parentElement;
	source=source.parentElement;
	cs  =  source.children;
	if  (cs[1].style.backgroundColor!=clickcolor&&source.id!="nc")
	for(i=0;i<cs.length;i++){
		cs[i].style.backgroundColor=clickcolor;
	} else { 
		for(i=0;i<cs.length;i++){
			cs[i].style.backgroundColor="";
		}
	}
}
/*
 * 将输入转成整数
 * 
 */
String.prototype.trim = function() {
	  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};
/**
 * 邮箱校验
 * 
 */
emailCheck=function(email){
	var emailPattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9])+\.[a-zA-Z]{2,3}$/;
	return emailPattern.test(email);
};
/*
 * 验证输入是否是数字
 * 
 */
onlyNumber=function(event) {
	var key = window.event ? event.keyCode : event.which;
	var keychar = String.fromCharCode(key);
	if (!(key == 8 || key == 0)) {
		reg = /\d/;
		return reg.test(keychar);
	}
	return true;
};
/*
 * 只能输入数字
 * 
 */
onlyNumberKeyUp=function(event){
	var obj=event.srcElement?event.srcElement:event.target;
	var pattern = /[^\d\.\/]/ig;
	if(pattern.test(obj.value)) {
		var i=getCursortPosition(event);
		obj.value=obj.value.replace(pattern,'');
		setCaretPosition(event,i);
	}
};
/*
 * 只能输入数字和字母
 * 
 */
onlyNumAndAlphKeyUp=function(event){
	var obj=event.srcElement?event.srcElement:event.target;
	var pattern = /[^\w\.\/]/ig;
	if(pattern.test(obj.value)) {
		var i=getCursortPosition(event);
		obj.value=obj.value.replace(pattern,'');
		setCaretPosition(event,i);
	}
};
/*
 * 用户名和邮箱输入规则，只能输入数字、字母、-、_、.
 * 
 */
accountNoRule=function(event){
	var obj=event.srcElement?event.srcElement:event.target;
	var pattern = /[^\a-zA-Z0-9\@\_\-\.]/g;
	if(pattern.test(obj.value)) {
		var i=getCursortPosition(event);
		obj.value=obj.value.replace(pattern,'');
		setCaretPosition(event,i);
	}
};

accountNoRuleCheck=function(string){
	var pattern = /[^\a-zA-Z0-9\@\_\-\.]/g;
	if(pattern.test(string)) {
		return false;
	}
	return true;
};
/*
 * 电话输入规则，只能输入数字、-、,
 * 
 */
phoneRule=function(event){
	var obj=event.srcElement?event.srcElement:event.target;
	var pattern = /[^\d\,\-]/g;
	if(pattern.test(obj.value)) {
		var i=getCursortPosition(event);
		obj.value=obj.value.replace(pattern,'');
		setCaretPosition(event,i);
	}
};

phoneRuleCheck=function(string){
	var pattern = /[^\d\,\-]/g;
	if(pattern.test(string)) {
		return false;
	}
	return true;
};
/*
 * 手机输入规则，只能输入数字、,
 * 
 */
telRule=function(event){
	var obj=event.srcElement?event.srcElement:event.target;
	var pattern = /[^\d\,]/g;
	if(pattern.test(obj.value)) {
		var i=getCursortPosition(event);
		obj.value=obj.value.replace(pattern,'');
		setCaretPosition(event,i);
	}
};

telRuleCheck=function(string){
	var pattern = /[^\d\,]/g;
	if(pattern.test(string)) {
		return false;
	}
	return true;
};
/*
 * 用户说明输入框字符长度限制
 * 
 */
isMaxLen = function(event) {
	var obj = event.srcElement?event.srcElement:event.target;
	var target = $("#"+obj.getAttribute("id").replace(".","\\."));
	var maxLength = target.attr("maxlength");
	if (target.val().length > maxLength) {
		target.blur();
		target.val(target.val().substring(0, maxLength));
		target.focus();
	}
};
/*
 * 回车+CTRL换行
 * 
 */
newline = function(event) {
	 if(event.keyCode == 13 && event.ctrlKey){
		 if (document.selection) {
			 var selectText = document.selection.createRange();
			 if(selectText){
				 if(selectText.text.length > 0)
					 selectText.text += "\r\n";
				 else
					 selectText.text = "\r\n";
				 selectText.select();
				 }
		 }
		 else{
			 var obj = event.srcElement?event.srcElement:event.target;
			 obj.value += "\r\n";
			 }
		 }
	 };
/*******************************************************************************
 * 获取光标位置
 * 
 * @param event
 * @returns {Number}
 */
getCursortPosition=function(event) {
	var obj=event.srcElement?event.srcElement:event.target;
	var pos =new Array();
	pos[0] = 0,pos[1] =0,pos[2]=0;
	pos[2] = obj.value.length;
	// IE Support
	if (document.selection) {
		var sel = document.selection.createRange();
		var initLength = sel.text.length;

		sel.moveStart('character', -obj.value.length);
		pos[1] = sel.text.length;
		if(initLength==0){
			pos[0]= pos[1];
			pos[1]= 0;
		} else {
			pos[0] = obj.value.length - initLength;
		}
	} else if (obj.selectionStart || obj.selectionStart == '0'){
		// Firefox support
		pos[0] = obj.selectionStart;
		pos[1] = obj.selectionEnd;
	}

	return pos;
};
/*******************************************************************************
 * 设置光标位置
 * 
 * @param event
 * @returns {Number}
 */
setCaretPosition=function(event, pos){// 设置光标位置函数
	var obj=event.srcElement?event.srcElement:event.target;
	
	// 字符有所减少
	var diff = pos[2] - obj.value.length;
	if(diff!=0){
		pos[0]-=diff;
	}
	if(obj.setSelectionRange){
		obj.focus();
		obj.setSelectionRange(pos[0],pos[0]);
	} else if (obj.createTextRange) {
		var range = obj.createTextRange();
		range.collapse(true);
		range.moveStart('character', pos[0]);
		range.moveEnd('character', pos[1]);
		range.select();
	}
};
/**
 * 验证只能为数字和字母的组合
 */
function onlyNumAndAlph(value){
	var re=/^([a-zA-Z0-9]+)$/;
	if(!re.test(value)){
		return false;
	}
	return true;
};

/**
 * form表单值是否改变，提示是否需要保存
 * 
 * @param callBack
 */
formChange=function(callBack) {
	var formId = $("#saveFormType").attr("relForm");
	if(formId==undefined){
		callBack();
		return;
	}
	
	var isChange = false;
	var inputs = $("#"+formId).find(":input");
	
	inputs.each(function(){
		var type =$(this).attr("type");
		if (type == 'radio' || type == 'checkbox') {
			if ($(this).attr("checked") != $(this).prop("defaultChecked")) {
				isChange = true;
		    	return;
		   }
		} else if(type=="text"||$(this).is("textarea")||type=="hidden") {
			if ($(this).val() != $(this).prop("defaultValue")) {
				isChange = true;
				return;
			}
		} else if($(this).is("select")){
			var v = $(this).val();
			$(this).find("option").each(function(){
				if($(this).prop("defaultSelected")&&$(this).val()!=v){
				     isChange = true;
				     return;
				}
			});
		}
	});
	
	if(isChange) {
		var saveFormChange=function(result){
			if(result){
				callBack();
			} else {
				// 直接保存时，会出现两次提示，暂且屏蔽
				// var relClick = $("#saveFormType").attr("relClick");
				// $("#"+relClick).click();
			}
		};
		jConfirm("数据已经修改，确定不需要保存？",null,saveFormChange);
	} else {
		callBack();
	}
};
/**
 * 功能区变化
 */
functionChange=function(html){
	$("#function").html(html);
	$("#loadPanel").hide();
};
function loadJs(url, callback){
    var done = false;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.language = 'javascript';
    script.src = url;
    script.onload = script.onreadystatechange = function(){
        if (!done && (!script.readyState || script.readyState == 'loaded' || script.readyState == 'complete')){
            done = true;
            script.onload = script.onreadystatechange = null;
            if (callback){
                callback.call(script);
            }
        }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
};
/**
 * jqueryAjax通用选项
 * 
 */
ajaxOption=function(url){
	var options = {
			   url: url,
			   type: "POST",
			   dataType:'html',
			   success:function(html) {
				   functionChange(html);
			   },
			   error:function(er){
				   functionChange(er.responseText);
			   }
	};
	$("#loadPanel").show();
	return options;
};
/**
 * jquery ajax 请求
 * 
 */
ajax=function(url,data,callback_s,callback_e){
	var callBack = function(){
		$("#loadPanel").show();
		if(data!=null&&data!=undefined){
			$.ajax({
				   url: url,
				   type: "POST",
				   timeout: 60000,
				   data: data,
				   dataType:'html',
				   success:function(html) {
					   if(callback_s!=null&&callback_s!=undefined) {
						   callback_s(html);
					   } else {
						   functionChange(html);   
					   }
				   },
				   error:function(er){
					   if(er.statusText=='timeout') {
						   functionChange("<red>连接服务器超时！</red>");
					   } else {
						   if(callback_e!=null&&callback_e!=undefined) {
							   callback_e(er);
						   } else {
							   functionChange(er.responseText);   
						   }
					   }
				   }
				});
		}else{
			$.ajax({
				   url: url,
				   type: "POST",
				   timeout: 60000,
				   dataType:'html',
				   success:function(html) {
					   if(callback_s!=null&&callback_s!=undefined) {
						   callback_s(html);
					   } else {
						   functionChange(html);   
					   }
				   },
				   error:function(er){
					   if(er.statusText=='timeout') {
						   functionChange("<red>连接服务器超时！</red>");
					   } else {
						   if(callback_e!=null&&callback_e!=undefined) {
							   callback_e(er);
						   } else {
							   functionChange(er.responseText);   
						   }
					   }
				   }
				});
		}
	};
	
	// 有回调函数时，不做数据校验
	if(callback_s==null) {
		formChange(callBack);
	} else {
		callBack();
	}
};