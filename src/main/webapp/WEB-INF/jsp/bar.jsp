<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<div class="bar">
	<table>
		<tr>
			<td class="bar_user">
			当前登录用户：<s:property value="#session.[@com.tdr.otp.mm.action.login.LoginConstants@LOGIN_USER]"/>
			
			
			</td>
			<td align="right">
			</td>
		</tr>
	</table>
</div>