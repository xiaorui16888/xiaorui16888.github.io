<!--#include File="adovbs.inc"-->
<%
	'�û������������ã� �����޸�������û���������
	dim cuser, cpass
%>
<!--#include File="inc_userpass.inc"-->
<%
	' ����Ƿ��Ѿ���¼
	dim seid1, seid2
	seid1 = Request.Cookies("seid_stat_login")
	seid2 = Session("seid_stat_login")
			
	dim blogin
	if seid1<>"" and CStr(seid1) = CStr(seid2) then
		blogin=True	
	else
		blogin=false
	end if  
	
	dim checkversion
%>
<html>
<head>
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<style>
	body,table,td{font-size:12px}
	A{COLOR: blue;TEXT-DECORATION: none;}
A:hover{COLOR: red;TEXT-DECORATION: underline;}
A:active{COLOR: lime;}
INPUT
{
    BORDER-RIGHT: #3399ff 1px solid;
    BORDER-TOP: #3399ff 1px solid;
    FONT-SIZE: 9pt;
    BORDER-LEFT: #3399ff 1px solid;
    BORDER-BOTTOM: #3399ff 1px solid;
    FONT-FAMILY: ����;
    HEIGHT: 18px
}
</style>
<title>�ʼ�ͳ���˶�����</title>
<script type="text/javascript">
	function showdlg( msg, url )
	{
		if ( window.confirm("��ȷ��Ҫִ�� ��" + msg + "�� ������") == true ) 
		{
		    
			url = url + "&url=" +  window.location.toString().replace( "&", "%26" );
			window.navigate( url );
		}
	}
	function gopre()
	{
		window.history.back();
	}
</script>
<%
    dim Connect, rs
    set Connect = Server.CreateObject("ADODB.Connection")
    set rs = Server.CreateObject("ADODB.Recordset")
%>
<!--#include File="inc_conn.inc"-->
<!--#include File="inc_funcs.asp"-->
</head>
<body style="background-color:white">
<!--#include File="inc_title.asp"-->