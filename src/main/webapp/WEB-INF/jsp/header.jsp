<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<table class="header">
	<tr class="header_bg3">
		<td>
		<!--[if lte IE 6]>
			<div class="header_bg4_ie6"></div>
		<![endif]-->
		<!--[if gte IE 7]>
			<div class="header_bg4"></div>
		<![endif]-->  
		<![if !IE]>
			<div class="header_bg4"></div>
		<![endif]>
		</td>
		<td align="right"><img class="header_bg8" src="../theme/<s:property value='colorStyle' />/images/header_bg8.gif"
			usemap="#Map" /></td>
	</tr>
</table>

<input type="hidden" id="page_user_id" name="pageUserId" value="xxx"/>
<map name="Map" id="Map">
	<area shape="rect" coords="3,1,55,22" href="javascript:home('<s:url action="home" />')" />
	<area shape="rect" coords="60,1,153,22" href="javascript:updatePassword('xxx');" />
	<area shape="rect" coords="158,1,210,22" href="javascript:logout('<s:url action="logout" />');" />
</map>