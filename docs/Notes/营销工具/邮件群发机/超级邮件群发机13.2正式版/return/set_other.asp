<%@ Language=VBScript codepage=936%>
<%Option Explicit%>
<!--#include File="inc_md5.asp"-->
<!--#include File="stat_inc.asp"-->
<!--#include File="inc_checklogin.asp"-->
<table border=1 width=400 align=center cellspacing=0 cellpadding=5 bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF">
<tr style="background-color:gold"><td><div style="font-size:14px; font-weight:bold;">�ۺ�����</div></td></tr>
<tr>
<td>
<%
	dim how
	how=Request.QueryString("how")
	if how="save" then
		
		on error resume next
		
		dim mainpgsize,listpgsize, bcheckok
		mainpgsize=Request.Form("mainpgsize")
		listpgsize=Request.Form("listpgsize")
		
		dim editpass, password, username
		editpass = Request.Form("editpass")
		username = Trim( Request.Form("username") )
		password = Trim( Request.Form("password1") )
		
		bcheckok=true
		if editpass="on" then
			if Len( username )<1 then
				Response.Write "���û�������Ϊ��"	
				bcheckok=false
			end if
			if Len( password )<5 then
				Response.Write "�����볤�Ȳ���С�� 5 ���ַ�"	
				bcheckok=false
			end if
		end if
		
		if mainpgsize="" or listpgsize="" or IsNumeric(mainpgsize)=false or IsNumeric(listpgsize)=false then
			Response.Write "����д����������ÿҳ��ʾ����������д����"	
			bcheckok=false
		end if
		
		if bcheckok=True then
			if (mainpgsize<1 or mainpgsize>1000) or (listpgsize<1 or listpgsize>1000) then
				Response.Write "������1��1000��ÿҳ��ʾ������ҳ����������������ʾ�ٶȱ仯�����ط�����������"
				bcheckok=false
			end if
		end if

		if bcheckok=True then
			rs.Open "select * from setup where id=1", Connect, adOpenKeyset, adLockOptimistic
			rs("mainpgsize")=mainpgsize
			rs("listpgsize")=listpgsize
			rs.Update
			if Err.number<>0 then
				Response.Write "<h3>���ñ���ʧ�ܣ�" & Err.Description & "</h3>"
			else
				Response.Write "<h3>���ñ�����ϡ�</h3>"
			end if
			Err.Clear
			
			'�޸�����
			if editpass="on" then
			
			dim fs, a
				Set fs = CreateObject("Scripting.FileSystemObject")
				Set a = fs.CreateTextFile( Server.MapPath("inc_userpass.inc"), True )
				a.WriteLine( "<%")
				a.WriteLine( "'��¼�û�������")
				a.WriteLine( "cuser=""" & username & """	'�û���")
				a.WriteLine( "cpass=""" & md5(password) & """	'����")
				a.Write(     "%" )
				a.WriteLine( ">")
				a.Close

				if Err.number<>0 then
					Response.Write "<h3>�ʻ���Ϣ����ʧ�ܣ�" & Err.Description & "</h3>"
				else
					Response.Write "<h3>�ʻ���Ϣ������ϡ�</h3>"
				end if
			end if
		end if
	else 
		rs.Open "setup", Connect, adOpenKeyset, adLockOptimistic
%>
<SCRIPT ID=clientEventHandlersJS LANGUAGE=javascript>
<!--

function fm_other_onsubmit() {
	if ( fm_other.editpass.checked==true )
	{
		if ( fm_other.username.value.length<=0 )
		{
			window.alert("���û�������Ϊ�գ�" );
			return false;
		}
		if ( fm_other.password1.value.length< 5 )
		{
			window.alert("���볤�Ȳ���С�� 5 ���ַ���" );
			return false;
		}
		
		if ( fm_other.password1.value != fm_other.password2.value )
		{
			window.alert("������������벻һ�£�" );
			return false;
		}
	}
}

//-->
</SCRIPT>
<form method=post action="?how=save" name=fm_other LANGUAGE=javascript onsubmit="return fm_other_onsubmit()">
�ʼ���ʶ�б�ÿҳ��ʾ������<input type=text name=mainpgsize style="width:60px;" value=<%=getpagesize(1)%>><br>
����ͳ���б�ÿҳ��ʾ������<input type=text name=listpgsize style="width:60px;" value=<%=getpagesize(2)%>><br>
<br>

<div style="border:1px #ccddff solid; background:#eef4ff;">
<div style="margin:4px;">
�¡��û�����<input type=text name=username value=<%=cuser%>><br>
���������룺<input type=password name=password1><br>
������ȷ�ϣ�<input type=password name=password2><br>
<br>
<input type=checkbox name=editpass value="on" style="border:0px white none" id=m_editpass>
<label for="m_editpass">�����û���������</label><br>
</div>
</div>
<br>
<input type=submit value="��������"><input type=reset value="�ָ�">
</form>
<%	end if	%>

<%	Connect.Close %>
</td></tr></table>
</body>
</html>