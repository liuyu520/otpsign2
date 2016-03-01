<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>404-访问地址不存在</title>
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/noframe.css" />
</head>
<body>
	<div class="full">
		<dl>
			<dt class="errorTitle">
				页面提示
			</dt>
			<dd>
				<div class="img404"></div>
			</dd>
			<dd>
				<a href="<%=request.getContextPath()%>/mm/login.action" >跳转到登录页面</a>
			</dd>
		</dl>
	</div>
</body>
</html>