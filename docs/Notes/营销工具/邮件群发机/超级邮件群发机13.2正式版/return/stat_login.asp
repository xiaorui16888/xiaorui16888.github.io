<%@ Language=VBScript codepage=936%>
<%Option Explicit%>
<!--#include File="inc_md5.asp"-->
<!--#include File="stat_inc.asp"-->
<%
	'�Ƿ�ע��
	dim blogout
	blogout = Request.QueryString("logout")
	if Cbool(blogout)=true then
		Session("seid_stat_login")=""
		Response.Cookies("seid_stat_login")=""
		
		Response.Write "<script type=""text/javascript"">window.onload=function(){window.alert(""���ѳɹ��˳���¼~"");}</script>"
		blogin = false
	end if 
	
	if Cbool(blogin)=false then
		dim user, pass
		
		user = Request.Form("user")
		pass = Request.Form("pass")
		
		' �±߿����޸��û���������
		if user=cuser and md5(pass)=cpass then
			Randomize 
			dim seid, i
			'���� SEID ���20λ��ĸ
			seid = ""
			for i=1 to 20
				seid = seid & Chr( Int((26 * Rnd) + 0) +97)
			next

			Response.Cookies("seid_stat_login") = seid
			
			Session.Timeout = 10
			Session("seid_stat_login")=seid
			
			Response.Redirect "stat_view.asp"
		else
			' ��ʾ��¼���봰��
			if user<>"" and pass<>"" then
				Response.Write "<script type=""text/javascript"">window.onload=function(){window.alert(""�û�����ע����������������룡"");}</script>"
			end if
			
			WriteLoginForm
		end if
	else
	    Response.Redirect "stat_view.asp"
	end if  
%>
</body>
</html>

<%
	Sub WriteLoginForm()
%>
<table align="center" border="1" width="350" cellspacing="0" cellpadding="5" bgcolor="white"  bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF">
<tr style="background-color:gold">
<td><div style="font-size:14px; font-weight:bold">�����û�����������֤�������</div></td>
</tr>
<tr><td>		
	<form action="stat_login.asp" method="POST" id="form1" name="form1">	<p style="padding:20px; line-height:160%">	�û�����<input type="text" name="user" style="width:120" /><br />	�ܡ��룺<input type="password" name="pass" style="width:120" /><br />	��������<input type="submit" value="��¼"  style="width:80" /><br />
	</p>
	</form>
</td></tr>
</table>
<%
	End Sub
%>