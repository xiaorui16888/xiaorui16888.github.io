<%@ Language=VBScript codepage=936%>
<%Option Explicit%>
<!--#include File="stat_inc.asp"-->
<!--#include File="inc_c_CheckUserAgent.asp"-->
<!--#include File="inc_checklogin.asp"-->
<!--#include File="inc_stat_functions.asp"-->
<!--#include File="inc_head.asp"-->
<%
	dim email, qtype
	email = get_request( false, "q" )
	qtype = Request.QueryString("qtype")
	
	if not IsNumeric( qtype ) then
		qtype = 1
	end if
	
	email = Replace( email, "%", "" )
	
	dim f,fp
	dim selstr
	
	
	dim sortby, sc
	sortby = get_request( false, "sortby")
	if sortby = "" then
		sortby = "mail_id"
	end if
	
	sc = get_request( false, "sc")
	if sc<>"ASC" and sc<>"DESC" then
		sc = "ASC"
	end if

	select case qtype 
	case 1
		selstr = "select * from list,stat where stat.id=list.mailid and ip like ? order by " & sortby & " " & sc & ";"
	case else
		selstr = "select * from list,stat where stat.id=list.mailid and email like ? order by " & sortby & " " & sc & ";"
	end select

    dim emaillike
    emaillike =  Replace( email, "*", "%" ) & "%"
	
	'���� Command ����
	dim cmd
	set cmd = Server.CreateObject("ADODB.Command")
	cmd.CommandText = selstr
	' ����
	dim p1
    Set p1 = cmd.CreateParameter ("@P1", adVarChar, 1, 256, emaillike )
	cmd.Parameters.Append p1
	cmd.CommandType=adCmdText
	
	cmd.ActiveConnection = Connect
	rs.Open cmd, ,adOpenKeyset, adLockReadOnly
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
<table align=center border=1 width=500 cellspacing=0 cellpadding=5 bgcolor=gold  bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF"><tr><td>
<p><b>������</b>
<input type=button value=��ҳ onclick="window.navigate('stat_view.asp');">
<input value=������һ�� type=button onclick="gopre();" id=button1 name=button1>
</p>
</td><td>
<%
	Response.Write "���������"
	if qtype=1 then
		Response.Write "IP"
	else 
		Response.Write "Email"
	end if
	Response.Write "Ϊ<font color=red>" & email & "</font>�ĵ�ַ"
%>
<%
	function writetitle( name, listid )%>
		<a href="?q=<%=email%>&qtype=<%=qtype%>&sortby=<%=listid%><%=write_sortpara(listid, sortby)%>"><%=name%></a><%write_sortsign listid, sortby%>
<%	end function
%>
</td></tr></table>
<br>
<table align=center width=700 border="1" cellspacing="0" bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF">
	<tr height=20 bgcolor=MintCream>
		<td width=80><%writetitle "�ʼ���ʶ", "mail_id"%></td>
		<td><%writetitle "�ռ��˵�ַ", "email"%></td>
		<td><%writetitle "����IP", "ip"%></td>
		<td>����</td>
		<td><%writetitle "��������", "date"%></td>
		<td>����ϵͳ</td><td>�����</td></tr>

<%		
	if rs.RecordCount>0 then
		dim num, cua
		num = 0
		set CUA=new CheckUserAgent
		while not rs.EOF and num<rs.PageSize
			num = num + 1
			
			on error resume next
			CUA.execute rs("client")
%>
	<tr height=20><td><%=rs("mail_id")%></td><td><%=rs("email")%></td><td><%=rs("ip")%></td><td><%=findArea(rs("ip"))%></td>
	<td><%=rs("date")%></td>
		<td><%=cua.vos%>&nbsp;</td>
		<td><%=cua.vsoft%>&nbsp;</td>
	</tr>
<%
			Err.Clear 
			rs.MoveNext
		wend
	end if	
%>
	</table>
	<br>
	
<!--#include file="page.asp"-->
<%	WritePageSelection "?q="& email &"&qtype="&qtype, rs.PageCount, page %>

</body>
</html>
<%
	rs.Close
	Connect.Close
%>