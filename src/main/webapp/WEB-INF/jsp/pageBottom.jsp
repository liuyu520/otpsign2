<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<table class="pageBottom">
	<tr>
		<td class="pageBottom_top"></td>
		<td ><table>
				<tr>
					<td width="75%" height="29" nowrap="nowrap">
					<span>共<s:property value="view.totalRecords"/>条记录,
					当前第<s:if test="view.totalPages==0">0</s:if><s:else><s:property value="view.currentPage"/></s:else>/<s:property value="view.totalPages"/>页,
					每页<s:property value="view.recordsPerPage"/>条记录</span></td>
					<td width="300px" nowrap="nowrap" style="float: right; padding:3px 0 0 0;">
                        <table><tr style="float: right; ">
							<td width="42px"><a href="#" class="pageBottom_first" onclick="toPageFirst(${param.action})"></a></td>
                            <td width="48px"><a href="#" class="pageBottom_back" onclick="toPagePre(${param.action})"></a></td>
                            <td width="48px"><a href="#" class="pageBottom_next" onclick="toPageNext(${param.action})"></a></td>
                            <td width="42px"><a href="#" class="pageBottom_last" onclick="toPageLast(${param.action})"></a></td>
                            <td width="42px"><a href="#" id="pageButtomGoToButton" class="pageBottom_go" onclick="toPageGo(${param.action})"></a></td>
                            <td>
                            <s:if test="view.totalPages==0"><input id="view.currentPage" name="view.currentPage" size="5" onkeypress="return onlyNumber(event);" onpaste="return false;" onkeyup="onlyNumberKeyUp(event)" style="ime-mode:disabled;text-align:right;padding-right:1px;" relClick="pageButtomGoToButton" value="0"/>页</s:if>
                            <s:else><s:textfield id="view.currentPage" name="view.currentPage" size="5" onkeypress="return onlyNumber(event);" onpaste="return false;" onkeyup="onlyNumberKeyUp(event)" style="ime-mode:disabled;text-align:right;padding-right:1px;" relClick="pageButtomGoToButton" />&nbsp;页</s:else>
                            <!-- 符策鹏 输入页码后点击下一页和上一页跳转修正 2013/7/25 -->
                            <input type="hidden" id="view.thisPage" value="<s:property value='view.currentPage' />" />
                            
                            <s:hidden id="view.totalPages" name="view.totalPages"></s:hidden>
                            <s:hidden id="view.ascDesc" name="view.ascDesc"></s:hidden>
                            <s:hidden id="view.sortKey" name="view.sortKey"></s:hidden>
                            </td>
                        </tr></table>
					</td>
				</tr>
			</table></td>
		<td class="pageBottom_bottom"></td>
	</tr>
</table>