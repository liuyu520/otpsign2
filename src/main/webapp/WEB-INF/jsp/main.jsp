<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="pragma" content="no-cach" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" /> 
<s:include value="/WEB-INF/jsp/include.jsp"></s:include>
<s:include value="/WEB-INF/jsp/script.jsp"></s:include>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>天地融OTP认证系统后台管理系统</title>
<link rel="shortcut icon" href="<s:url value="/favicon.ico" />" type="image/x-icon">
</head>
<body>
	<div class="panel top">
		<s:include value="/WEB-INF/jsp/header.jsp"></s:include>
	</div>
	<div class="panel barline">
		<s:include value="/WEB-INF/jsp/bar.jsp"></s:include>
	</div>
	<div class="panel left">
		<s:include value="/WEB-INF/jsp/left.jsp"></s:include>
	</div>
	<div class="panel content" id="content">
		<s:include value="/WEB-INF/jsp/content.jsp"></s:include>
	</div>
	<div class="panel bottom">
		<s:include value="/WEB-INF/jsp/footer.jsp"></s:include>
	</div>
	<div id="loadPanel"></div>
</body>
</html>