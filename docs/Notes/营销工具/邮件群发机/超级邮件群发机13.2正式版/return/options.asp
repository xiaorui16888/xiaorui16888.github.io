<%@ Language=VBScript codepage=936%>
<%Option Explicit%>
<!--#include File="stat_inc.asp"-->
<!--#include File="inc_checklogin.asp"-->
<!--#include File="inc_head.asp"-->

<%writehead 3%>
<table align=center border=1 width=500 cellspacing=0 cellpadding=5 bgcolor=gold  bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF">
<tr height=35>
<td style="width:100px"><b>������</b>
<input value=ˢ�� type=button onclick="window.location.reload();return false;">
</td><td>��</td>
<td style="width:50px; text-align:center">
<input value=�˳� type=button language=javascript onclick="window.navigate('stat_login.asp?logout=true');return false;" id=button3 name=button3>
</td></tr></table><br>

<table align=center border=1 width=500 cellspacing=0 cellpadding=5  bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF" bgcolor=white>
<tr><td><b></b>
<b>ͳ������</b><br>
<br>
<input value=�ۺ����� type=button onclick="window.open('set_other.asp','','width=480,height=400');return false;" id=button2 name=button2>
<input value=���ð����� type=button onclick="window.open('set_white.asp','','width=480,height=400');return false;" id=button2 name=button2>
<input value=���ú����� type=button onclick="window.open('set_black.asp','','width=480,height=400');return false;" id=button2 name=button2><br>
<br>
<input value=����ͳ�����ݿ� type=button onclick="window.open('down_data.asp?downtype=statdb');return false;" id=button1 name=button1>
<input value=�������ͳ�Ƽ�¼ type=button onclick="showdlg('�������ͳ�Ƽ�¼','stat_opt.asp?del=true');return false;" id=button4 name=button4><br>
<br>
<b>�˶�����</b><br>
<br>
<input value=�����˶����ݿ� type=button onclick="window.open('down_data.asp?downtype=returndb');return false;" id=button1 name=button1>

</td></tr></table>

</body>
</html>