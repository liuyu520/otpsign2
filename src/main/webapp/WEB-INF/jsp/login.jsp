<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<!--<OBJECT id="Sign" name="Sign" classid="clsid:53719DD6-63CF-4AD0-965C-55F7C00C09F0" VIEWASTEXT></OBJECT>  -->

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
<meta http-equiv="expires" content="Wed, 26 Feb 1997 08:21:57 GMT">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/theme/green/css.css"
	type="text/css" />
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/theme/green/login.css"
	type="text/css" />
<link rel="stylesheet"
	href="<s:url value="/js/alert/jquery.alerts.css" />" type="text/css"
	media="screen" />
<script type="text/javascript" src='<s:url value="/js/page.js" />'></script>
<script type="text/javascript" src='<s:url value="/js/md5.js" />'></script>
<script type="text/javascript" src='<s:url value="/js/alert/jquery.alerts.js" />'></script>
<script  src='<s:url value="/js/Ajax.js" />'
	type="text/javascript"></script>
<script  src='<s:url value="/js/common_util.js" />'
	type="text/javascript"></script>
<title></title>
<link rel="shortcut icon" href="<s:url value="/favicon.ico" />"
	type="image/x-icon">
<script type="text/javascript">
	window.history.forward(1);
	changeVerifyCode = function() {
		var timestamp = (new Date()).valueOf();
		var verifyCodeImg = document.getElementById("verifyCodeImg");
		verifyCodeImg.src = "../ImageValidation/validation.jpg?timestamp="
				+ timestamp;
	};
	formCheck = function() {
		var accountNo = document.getElementById("accountNo");
		var password = document.getElementById("password");
		//var verifyCode = document.getElementById("verifyCode");

		if (accountNo != null && accountNo.value.trim().length == 0) {

			jAlert("亲,还没输入邮箱耶", "温馨提示", function() {
				accountNo.focus();
			});
			return false;
		}
		if(!emailCheck(accountNo.value)){
			jAlert("亲,邮箱格式不对哦", "温馨提示", function() {
				accountNo.focus();
			});
			return false;
		}

		if (password != null && password.value.trim().length == 0) {
			jAlert("亲,快输入动态口令啦", "温馨提示", function() {
				password.focus();
			});
			return false;
		}

		var abc44 = function(obj) {//页面跳转之后，该函数就不会执行了。
			//alert(obj)//{"hasUser":true}
			var isHasObj = eval('(' + obj + ')');
			if (isHasObj.success) {
				jInfo("亲,工作辛苦了!", "签到成功", null);
			}else{
				jAlert("额,主公不给力啊!", "签到失败", null);
			}
		}
		var args3 = "email=" + accountNo.value + "&otp=" + password.value;
		var url2 = "signVerify.action";
		var xmlhw5 = new XMLHttpHuangWei(url2, args3, abc44);
		xmlhw5.XMLGetMethod();

		/*if(verifyCode!=null&&verifyCode.value.trim().length==0) {
			jAlert("<s:text name='alert.requried.verifyCode' />",null,function(){verifyCode.focus();});
			return false;
		}*/
		

		// 验证key值
		/* 	var result =getSign(accountNo.value,"20140318160229"); 
		 if(result==false){
		 return false;
		 } */
		// document.getElementById("view.dataSign").value=result;
		return false;
	};
	resetForm = function() {
		document.getElementById("loginResetForm").submit();
	};
	
</script>
</head>
<body class="login_bg">
	<form id="loginResetForm" action='<s:url action="login" />'></form>
	<div class="login_panel" id="loginDiv">
		<form id="loginForm" action="" method="post"
			onsubmit="return formCheck();">
			<div class="login_left"></div>
			<input type="hidden" value="" name="view.dataSign" id="view.dataSign" />
			<div class="login_right">
				<table>
					<tr>
						<td><s:hidden id="loginStatus" name="view.longinStatus"></s:hidden>
							<div class="login_input login_input_username">
								<s:textfield maxlength="20" style="ime-mode:disabled;"
									onkeyup="accountNoRule(event);" name="view.accountNo"
									id="accountNo" cssClass="login_input_demo" tabindex="1"></s:textfield>
							</div></td>
						<td align="left"><span><s:fielderror
									fieldName="view.accountNo" /></span></td>
					</tr>
					<tr>
						<td>
							<div class="login_input login_input_password">
								<s:password maxlength="20" style="ime-mode:disabled;"
									oncopy="return false;" oncut="return false;"
									onpaste="return false;" onkeyup="onlyNumAndAlphKeyUp(event);"
									name="view.password" id="password" cssClass="login_input_demo"
									tabindex="2"></s:password>
							</div>
						</td>
						<td align="left"><span><s:fielderror
									fieldName="view.password" /></span></td>
					</tr>

					
				</table>
			</div>
			<div class="login_bottom">
				<input class="login_button" type="submit" value="签到" tabindex="4" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input class="login_button" type="button"
					value="重置" tabindex="5"
					onclick="resetForm()" />
			</div>
		</form>
	</div>
</body>
<script type="text/javascript">
	var accountNo = document.getElementById('accountNo');
	var password = document.getElementById("password");

	if (accountNo.value.trim() == "") {
		accountNo.focus();
	} else if (password.value.trim() == "") {
		password.focus();
	}

	var msg = '<s:property value="view.msg" />';
	var loginDiv = document.getElementById("loginDiv").parentNode;

	if (loginDiv.tagName != "BODY") {
		loginCallBack = function() {
			window.top.location.href = '<s:url action="login" />';
		};

		if (msg != null && msg != "") {
			jAlert(msg, null, loginCallBack);
		}

	} else {
		readyCallBack = function() {
			$(document).ready(function() {
				loadJs('<s:url value="/js/jquery.bgiframe.js" />');
				loadJs('<s:url value="/js/alert/jquery.alerts.js" />');
				// 键盘按下时，清理错误提示
				clearError = function() {
					$(".errorMessage").hide(1000);
				};
				$(document).bind("keypress", clearError);
				var loginStatus = document.getElementById("loginStatus");
				//if(loginStatus.value==){
				//jAlert("<s:text name='login.user.sameLogined' />",null,function(){window.location.href='<s:url action="home"/>';});
				//}
			});
		};
		loadJs('<s:url value="/js/jquery-1.9.0.min.js" />', readyCallBack);
	}

	// 清除密码保存时的背景色丢失
	if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0
			|| navigator.userAgent.toLowerCase().indexOf("safari") >= 0) {
		window.setInterval(function() {
			$('input:-webkit-autofill').each(function() {
				var clone = $(this).clone(true, true);
				$(this).after(clone).remove();
			});
		}, 20);
	}
</script>
</html>