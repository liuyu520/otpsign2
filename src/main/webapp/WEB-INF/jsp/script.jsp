<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!-- header页 -->
<script type="text/javascript">
home=function(url) {
	formChange(function(){window.top.location = url;});
};
updatePassword=function(id) {
	var data = {"user.id": id};
	var url = "<s:url action='userUpdateSelf' />";
	callBack=function(html){
		functionChange(html);
	     $("#navigation").html('<s:text name="user.updateSelf" />');
	};
	ajax(url,data,callBack);
};
logout=function(url) {
	formChange(function(){window.top.location = url;});
};
</script>

<!-- menu页 -->
<script type="text/JavaScript">
    <!--
    // 功能列表
    var zTree;

    var setting = {
    		view: {
				dblClickExpand: false
			},
			callback: {
				onClick: onClickNode
			},
			data: {
				simpleData: {
					enable: true
				}
			}
		};

    // ztre的JSON数据格式
    zNodes =[<s:property value="view.userInfo.menuJson" escape="false" ></s:property>];
	
    function zTreeOnClick(event, treeId, treeNode) {
        if (treeNode != null && treeNode.page != null) {
            var parent = treeNode.getParentNode();
            var navigationTitle = treeNode.name;
            
            var root = false;
            while (parent != null && parent != undefined && root!=false) {
                navigationTitle = parent.name + '<i class="icon-angle-right"></i>' + navigationTitle;
                parent = parent.getParentNode();
                grand = parent.getParentNode();
                if(grand == null && grand !=undefined){
                	root = true;
                }
            }
            $("#navigation").html(navigationTitle);

            if(treeNode.page!=null&&treeNode.page.length>0) {
                ajax(treeNode.page);
            }
        }
    }

    function getNavigator(treeNode){
        if (treeNode != null && treeNode.page != null) {
            var parent = treeNode.getParentNode();
            var navigationTitle = treeNode.name;
            while (parent != null && parent != undefined) {
                navigationTitle = parent.name + '<i class="icon-angle-right"></i>' + navigationTitle;
                parent = parent.parentNode;
            }
            navigationTitle=getNavigator(treeNode)+navigationTitle;
            return navigationTitle;
        }
        
        return "";
    }

    function onClickNode(e,treeId, treeNode) {
        var zTree = $.fn.zTree.getZTreeObj("menu_tree");
        zTree.expandNode(treeNode);
        if(!treeNode.isParent){
            zTreeOnClick(e, treeId, treeNode);
        }
	}
    
    // 多级展开菜单
	function createMenu(arr) {
        var $ul_1 = $('<ul></ul>');
        $.each(arr,
        function() {
                var $oLi = $('<li><h2>' + this.name + '</h2></li>');
                if (this.submenu) {
                        createSubMenu(this.submenu, $oLi);
                };
                $ul_1.append($oLi);
        });

        //层级缩进
        var $oUl = $ul_1;
        var lev = 1;
        var initTextIndent = 2;
        while ($oUl.find('ul').length > 0) {
                initTextIndent = parseInt(initTextIndent) + 2 + 'em'; //增加一个级别，缩进增加2em
                $oUl.children().children('ul').addClass('lev-' + lev)
							.children('li').css('text-indent', initTextIndent);
                $oUl = $oUl.children().children('ul');
                lev++;
        };

        $ul_1.find('ul').hide();
        $ul_1.children(':first').addClass('current').children('ul').show();
        //绑定事件
        $ul_1.find('h2,a').click(function() {
                if ($(this).siblings('ul').length > 0) 
				$(this).siblings('ul').slideToggle('fast').end()
						.children('img').toggleClass('unfold');
                else {
                        $ul_1.find('li,a').removeClass('current');
                        $(this).addClass('current');
                }
                $(this).parent('li').siblings().find('ul').hide()
						.end().find('img.unfold').removeClass('unfold');
                if(!($(this).attr("page")==undefined || $(this).attr("page")=="")) {
                	ajax($(this).attr("page"));
                	$("#navigation").html($(this).text());
                }
        });

        $('.wrap-menu').append($ul_1);
	};

	//创建子菜单
	function createSubMenu(sArr, $tLi) {
	        var self = arguments.callee;
	        var $sUl = $("<ul></ul>");
	        var oUrl, $sLi;
	        $.each(sArr,
	        function() {
	                oUrl = this.page || 'javascript:void(0)';
	                $sLi = $('<li><a href="#" page="' + oUrl + '">' + this.name + '</a></li>');
	                if (this.submenu) {
	                        $sLi.children('a').prepend('<img src="images/blank.gif" alt=""/>');
	                        self(this.submenu, $sLi);
	                }
	                $sUl.append($sLi);
	        });
	        $tLi.append($sUl);
	};

    $(document).ready(function () {
    	//$.fn.zTree.init($("#menu_tree"), setting, zNodes);
		createMenu(zNodes);
    });

    //-->
</script>

<!-- 主界面 -->
<script type="text/javascript">
    function toggleClass(dom, className) {
        var reg = new RegExp(className, "g"), cn = dom.className, newcn = cn
                .indexOf(className) == -1 ? (cn + " " + className) : cn
                .replace(reg, "");
        dom.className = newcn;
    }

</script>
<!-- 通用页 -->
<script type="text/javascript">
// IE下禁用刷新
document.onkeydown = function(){
	if(window.event && window.event.keyCode == 116){
	    window.event.keyCode = 505;
	 }

	if(window.event && window.event.keyCode == 505){
	    return false;
	}
};
$(document).ready(function(){
		$.ajaxSetup({ cache: false });
		$(document).keydown(function (event) {
			// firefox下禁用刷新
			if(event.keyCode == "116"){
	    		event.keyCode = "505";
			}
			if(event.keyCode == 505) {
			    return false;
			}
		});

		$("body").keypress(function(event) {
			if (!event.ctrlKey && event.keyCode == "13") {//keyCode=13是回车键
				var target = $(event.target);
				// 寻找当前输入框的关联按钮
				var click = target.attr("relClick");
				var clickTarget = null;
				if(click!=undefined){
					clickTarget = $("#"+click);	
				}

				// 存在关联按钮则调用关联，没有关联则调用默认
				if(clickTarget!=null&&clickTarget.length>0){
					clickTarget.click();
				} else if($("#default").length>0){
					$("#default").click();
				}
				event.stopPropagation();
				event.preventDefault();
			}
		});	
	}
);
// 禁用后退      
window.onhashchange = function(){
	window.history.go(1);
}; 
</script>
