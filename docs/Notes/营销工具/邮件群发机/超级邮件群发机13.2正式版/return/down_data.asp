<%@ Language=VBScript codepage=936%>
<%Option Explicit%>
<!--#include File="stat_inc.asp"-->
<!--#include File="inc_checklogin.asp"-->
<%
    dim st, fs
    Set st = Server.CreateObject("ADODB.Stream")
    set fs = Server.CreateObject("Scripting.FileSystemObject")
%>
<%
	on error resume next
	
	' �ļ���ȡ��ʽ�� 1 ����ȡֱ�� Redirect 0 ��ȡ�����
	dim direct_type	
	direct_type = 0
	
	dim downtype
	downtype=Request.QueryString("downtype")
	
	dim str_fromfile, str_downfile
	
	if downtype="statdb" then
		str_fromfile="data/#stat.mdb"
		str_downfile="data/stat.mdb"
	end if
	
	if downtype="returndb" then
		str_fromfile="data/#return.mdb"
		str_downfile="data/return.mdb"
	end if
	
	if str_fromfile="" then
		Response.Write "��������"
		Response.End
	end if
	
	
	'�����ļ�
	fs.CopyFile Server.MapPath(str_fromfile), Server.MapPath(str_downfile), true
	
	if Err.number<>0 then
		Response.Write Err.Description
		Response.End
	end if
	
	if direct_type=1 then
		'ֱ��ת�������ļ�
		do_output_direct
	else
		' Flush �����ʽ
		do_output
	end if			
		
	function do_output_direct()
		' ת�������ļ�
		Response.Redirect str_downfile	
	end function
		
	function do_output()
		Response.ContentType = "application/msaccess"

		Response.Clear
		Response.Buffer=true

		'����ļ�
		st.Open
		st.Type = 1
		st.LoadFromFile( Server.MapPath(str_downfile) )
	
		dim fd
		fd = st.Read( 1024 )
		do while isNull(fd)=false
			Response.BinaryWrite fd
			fd = st.Read( 1024 )
		loop
	
		st.Close
			
		'ɾ���ļ�
		fs.DeleteFile Server.MapPath(str_downfile)
	
		Response.Flush()
	end function
%>