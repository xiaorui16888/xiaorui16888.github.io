<%@ Language=VBScript codepage=936%>
<%Option Explicit%>
<!--#include File="stat_inc.asp"-->
<!--#include File="inc_checklogin.asp"-->
<!--#include File="inc_head.asp"-->
<%
	dim mail_id, mail_idname
	mail_id = get_request( false, "mail_id" )
	
	if mail_id="" then
		mail_id = Request.Cookies("mail_id")	
	end if
	if mail_id<>"" then
		Response.Cookies("mail_id")=mail_id
	else
		Response.Write "��Ч ID"
		Response.End
	end if
	
	dim f,fp

	dim selstr
	
	' mail_id ����������
	if not IsNumeric( mail_id ) then
		Response.Write "mail_id ��������"
		Response.End
	end if
	
	selstr = "select * from stat where id="&mail_id
	rs.Open selstr, Connect,adOpenKeyset, adLockReadOnly
	if rs.RecordCount>=1 then
		mail_idname = rs("mail_id")
	end if
	rs.Close()

	selstr = "select email, times, maxdate from ( select email, count(email) as times, max(date) as maxdate from list where mailid="&mail_id&" group by email )"
	' ����
	dim sortby, sc
	sortby = Request.QueryString("sortby")
	
	if sortby="" then
		sortby = Request.Cookies("sortby_times")
		sc = Request.Cookies("sc_times")
	else
		' ���򡢽���
		if Request.Cookies("sc_times")="" then
			sc="ASC"
			Response.Cookies("sc_times")="ASC"
		else
			if Request.Cookies("sc_times")="ASC" then
				sc="DESC"
				Response.Cookies("sc_times")="DESC"
			else
				sc="ASC"
				Response.Cookies("sc_times")="ASC"
			end if	 		
		end if
	end if
	
	if sortby="" or ( sortby<>"email" and sortby<>"times" and sortby<>"maxdate") then
		sortby = "email"
	end if
	
	' �����������ݡ���ӵ� SQL �ַ���
	Response.Cookies("sortby_times")=sortby

	selstr = selstr & " order by " & sortby & " " & sc
	
	rs.Open selstr, Connect, adOpenKeyset, adLockReadOnly		
	
%>
<%
	'  ����ҳ��
	dim page	page = Request.QueryString("page")	if page="" then		page=Request.Form("page")	end if
	if page = "" then
		page = 1
	end if
	rs.PageSize = getpagesize(2)
		if rs.PageCount>0 then
		rs.AbsolutePage = page	end if
%>
<% writehead 1 %>
<table align=center border=1 width=500 cellspacing=0 cellpadding=5 bgcolor=gold  bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF">
<tr><td>
<b>������</b>
<input type=button value=��ҳ onclick="window.navigate('stat_view.asp');" id=button2 name=button2>
<input value=������һ�� type=button onclick="gopre();" id=button1 name=button1>
</td><td height=20>
�ʼ���ʶ��<%=mail_idname%>
</td></tr></table><br>
<table align=center width=500 border="1" cellspacing="0" bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF">
	<tr height=20 bgcolor=MintCream>
		<td align=center><a href=?sortby=email>�ռ����ʼ���ַ</a><%write_sortsign "email", sortby%></td>
		<td align=center><a href=?sortby=times>����</a><%write_sortsign "times", sortby%></td>
		<td align=center><a href=?sortby=maxdate>���һ�β鿴ʱ��</a><%write_sortsign "maxdate", sortby%></td>
	<td align=center>����</td></tr>
<%		
	if rs.RecordCount>0 then
		dim num
		num = 0
		while not rs.EOF and num<rs.PageSize
			num = num + 1
%>
	<tr height=20>
		<td><%=rs("email")%></td>
		<td align=right><%=rs("times")%></td>
		<td align=center><%=rs("maxdate")%></td>
		<td><a href="stat_query.asp?q=<%=rs("email")%>">�鿴��ϸ��¼</a></td>
	</tr>
<%		
			rs.MoveNext
		wend
	end if
	
	

%>
	</table>
<!--#include file="page.asp"-->
<%	WritePageSelection "?mail_id=" & mail_id, rs.PageCount, page %>

</body>
</html>
<%		
	rs.Close
	Connect.Close
%>