<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<style>
.breadcrumb {
  -webkit-border-radius: 0px;
     -moz-border-radius: 0px;
          border-radius: 0px;
  box-shadow: none;
  padding-right: 0px;
  padding-left: 8px;
  margin-bottom: 25px;
  border:0px !important;  
  background-color: #eee;
  list-style: none outside none;
  width:100%;
}

.breadcrumb a, 
.breadcrumb i {
  color: #333;
  font-size: 14px;
  text-shadow:none;
}

.breadcrumb li {
  line-height:25px;
  display: inline-block;
  *display:inline;
  text-shadow: 0 1px 0 #FFFFFF;
  padding-left:8px;
}
</style>
<div>
<ul class="breadcrumb">
      <li>
          <i class="icon-home"></i>
          <a>管理平台：</a>
          <i class="icon-angle-right"></i>
      </li>
      <li><a id="navigation">主控面板</a></li>
 </ul>
 </div>
<div id="function">
	<s:include value="/WEB-INF/jsp/welcome.jsp"></s:include>
</div>
