<%
	function WritePageSelection( aurl, amax, acur )
%>	<form action="<%=aurl%>" method=post id=form1 name=form1>
<table align=center border=1 width=500 cellspacing=0 cellpadding=5 bgcolor=MintCream  bordercolorlight="#C0C0C0" bordercolordark="#FFFFFF">
<tr><td>
�� <font color="red"><%=amax%></font> ҳ �� <font color="red"><%=acur%></font> ҳ  ֱ��ת���� <input type=text name=page style="width:30" value=<%=acur%>> ҳ <input type=submit value=GO style="width:40" id=submit1 name=submit1>
<br>ѡ��ҳ�룺
<% if amax>0 then%><a href="<%=aurl%>&page=<%=1%>"><font face=webdings>9</font></a><% end if%>
<b>
<%	dim min, max
	min=page-5	max=page+5	if min<1 then		min=1	end if	if max>amax then		max = amax	end if
		dim i
	for i=min to max
		if CInt(page)=CInt(i) then			Response.Write i
		else			Response.Write "<a href=" & aurl & "&page="&i&">"&i&"</a>"
		end if		Response.Write " "
	next%></b>
<% if amax>0 then%><a href="<%=aurl%>&page=<%=amax%>"><font face=webdings>:</font></a>
<% end if%>
<% if acur-1>=1 then %>
[<a href="<%=aurl%>&page=<%=(acur-1)%>">��һҳ</a>]
<% else %>
[��һҳ]
<% end if %>
<% if acur+1<=amax then %>
[<a href="<%=aurl%>&page=<%=(acur+1)%>">��һҳ</a>]
<% else %>
[��һҳ]
<% end if %>
</td></tr></table></form>
<%
	end function
%>