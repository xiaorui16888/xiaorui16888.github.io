<%
'=========================================================
' QQWry.DAT ���ó��� �޸��Ի�������������
' ������ASP������ʹ�ô����QQWry.datͨ����������
' ������ķ�����������֧��ADodb.Stream�����޷�ʹ�ô˳���
' �Ƽ�ʹ�ô������ݿ⣬����Ҳ����
' ========================================================

' ============================================
' ����IP��Ϣ
' ============================================
Function Look_Ip(IP)
 Dim Wry, IPType, QQWryVersion, IpCounter
 ' ���������
 Set Wry = New TQQWry
 ' ��ʼ�������������������
 ' �����Ը��� QQWry(IP) ����ֵ���жϸ�IP��ַ�����ݿ����Ƿ���ڣ���������ڿ���ִ��������һЩ����
 ' �������Խ�һ�����ݿ���Ϊ׷���ȣ������ҾͲ���ϸ˵����
 IPType = Wry.QQWry(IP)
 ' Country�����ҵ����ֶ�
 ' LocalStr��ʡ�м�������Ϣ�ֶ�
 Look_Ip = Wry.Country & " " & Wry.LocalStr
End Function
' ============================================
' ����IP��Ϣ JS����
' ============================================
Function GetIpInfoAv(IP, sType)
 Dim Wry, IPType
 Set Wry = New TQQWry
 IPType = Wry.QQWry(IP)
 
 Select Case sType
  Case 1 GetIpInfoAv = "document.write(""" & IP & """);"
  Case 2 GetIpInfoAv = "document.write(""" & Wry.Country & """);"
  Case 3 GetIpInfoAv = "document.write(""" & Wry.LocalStr & """);"
  Case Else GetIpInfoAv = "document.write(""�����ԣ�" & IP & " ��������" & Wry.Country & " " & Wry.LocalStr & """);"
 End Select
End Function
' ============================================
' ����QQWry��Ϣ(QQWry.Dat�汾�Լ���¼����)
' ============================================
Function WryInfo()
 Dim Wry, IPType, QQWry(1)
 ' ���������
 Set Wry = New TQQWry
 IPType = Wry.QQWry("255.255.255.255")
 ' ��ȡ���ݿ�汾��Ϣ
 QQWry(0) = Wry.Country & " " & Wry.LocalStr
 ' ��ȡ���ݿ�IP��ַ��Ŀ
 QQWry(1) = Wry.RecordCount + 1
 WryInfo = QQWry
End Function
' ============================================
' IP����λ������
' ============================================
Class TQQWry
 ' ============================================
 ' ��������
 ' ============================================
 Dim Country, LocalStr, Buf, OffSet
 Private StartIP, EndIP, CountryFlag
 Public QQWryFile
 Public FirstStartIP, LastStartIP, RecordCount
 Private Stream, EndIPOff
 ' ============================================
 ' ��ģ���ʼ��
 ' ============================================
 Private Sub Class_Initialize
  Country   = ""
  LocalStr   = ""
  StartIP   = 0
  EndIP    = 0
  CountryFlag  = 0 
  FirstStartIP  = 0 
  LastStartIP  = 0 
  EndIPOff   = 0 
  QQWryFile = Server.MapPath("QQWry.dat") 'QQ IP��·����Ҫת��������·��
 End Sub
 ' ============================================
 ' IP��ַת��������
 ' ============================================
 Function IPToInt(IP)
  Dim IPArray, i
  IPArray = Split(IP, ".", -1)
  FOr i = 0 to 3
   If Not IsNumeric(IPArray(i)) Then IPArray(i) = 0
   If CInt(IPArray(i)) < 0 Then IPArray(i) = Abs(CInt(IPArray(i)))
   If CInt(IPArray(i)) > 255 Then IPArray(i) = 255
  Next
  IPToInt = (CInt(IPArray(0))*256*256*256) + (CInt(IPArray(1))*256*256) + (CInt(IPArray(2))*256) + CInt(IPArray(3))
 End Function
 ' ============================================
 ' ������תIP��ַ
 ' ============================================
 Function IntToIP(IntValue)
  p4 = IntValue - Fix(IntValue/256)*256
  IntValue = (IntValue-p4)/256
  p3 = IntValue - Fix(IntValue/256)*256
  IntValue = (IntValue-p3)/256
  p2 = IntValue - Fix(IntValue/256)*256
  IntValue = (IntValue - p2)/256
  p1 = IntValue
  IntToIP = Cstr(p1) & "." & Cstr(p2) & "." & Cstr(p3) & "." & Cstr(p4)
 End Function
 ' ============================================
 ' ��ȡ��ʼIPλ��
 ' ============================================
 Private Function GetStartIP(RecNo)
  OffSet = FirstStartIP + RecNo * 7
  Stream.Position = OffSet
  Buf = Stream.Read(7)
  
  EndIPOff = AscB(MidB(Buf, 5, 1)) + (AscB(MidB(Buf, 6, 1))*256) + (AscB(MidB(Buf, 7, 1))*256*256) 
  StartIP  = AscB(MidB(Buf, 1, 1)) + (AscB(MidB(Buf, 2, 1))*256) + (AscB(MidB(Buf, 3, 1))*256*256) + (AscB(MidB(Buf, 4, 1))*256*256*256)
  GetStartIP = StartIP
 End Function
 ' ============================================
 ' ��ȡ����IPλ��
 ' ============================================
 Private Function GetEndIP()
  Stream.Position = EndIPOff
  Buf = Stream.Read(5)
  EndIP = AscB(MidB(Buf, 1, 1)) + (AscB(MidB(Buf, 2, 1))*256) + (AscB(MidB(Buf, 3, 1))*256*256) + (AscB(MidB(Buf, 4, 1))*256*256*256) 
  CountryFlag = AscB(MidB(Buf, 5, 1))
  GetEndIP = EndIP
 End Function
 ' ============================================
 ' ��ȡ������Ϣ���������Һͺ�ʡ��
 ' ============================================
 Private Sub GetCountry(IP)
  If (CountryFlag = 1 or CountryFlag = 2) Then
   Country = GetFlagStr(EndIPOff + 4)
   If CountryFlag = 1 Then
    LocalStr = GetFlagStr(Stream.Position)
    ' ����������ȡ���ݿ�汾��Ϣ
    If IP >= IPToInt("255.255.255.0") And IP <= IPToInt("255.255.255.255") Then
     LocalStr = GetFlagStr(EndIPOff + 21)
     Country = GetFlagStr(EndIPOff + 12)
    End If
   Else
    LocalStr = GetFlagStr(EndIPOff + 8)
   End If
  Else
   Country = GetFlagStr(EndIPOff + 4)
   LocalStr = GetFlagStr(Stream.Position)
  End If
  ' �������ݿ��е�������Ϣ
  Country = Trim(Country)
  LocalStr = Trim(LocalStr)
  If InStr(Country, "CZ88.NET") Then Country = ""
  If InStr(LocalStr, "CZ88.NET") Then LocalStr = ""
 End Sub
 ' ============================================
 ' ��ȡIP��ַ��ʶ��
 ' ============================================
 Private Function GetFlagStr(OffSet)
  Dim Flag
  Flag = 0
  Do While (True)
   Stream.Position = OffSet
   Flag = AscB(Stream.Read(1))
   If(Flag = 1 or Flag = 2 ) Then
    Buf = Stream.Read(3) 
    If (Flag = 2 ) Then
     CountryFlag = 2
     EndIPOff = OffSet - 4
    End If
    OffSet = AscB(MidB(Buf, 1, 1)) + (AscB(MidB(Buf, 2, 1))*256) + (AscB(MidB(Buf, 3, 1))*256*256)
   Else
    Exit Do
   End If
  Loop
  
  If (OffSet < 12 ) Then
   GetFlagStr = ""
  Else
   Stream.Position = OffSet
   GetFlagStr = GetStr() 
  End If
 End Function
 ' ============================================
 ' ��ȡ�ִ���Ϣ
 ' ============================================
 Private Function GetStr() 
  Dim c
  GetStr = ""
  Do While (True)
   c = AscB(Stream.Read(1))
   If (c = 0) Then Exit Do 
   
   '�����˫�ֽڣ��ͽ��и��ֽ��ڽ�ϵ��ֽںϳ�һ���ַ�
   If c > 127 Then
    If Stream.EOS Then Exit Do
    GetStr = GetStr & Chr(AscW(ChrB(AscB(Stream.Read(1))) & ChrB(C)))
   Else
    GetStr = GetStr & Chr(c)
   End If
  Loop 
 End Function
 ' ============================================
 ' ���ĺ�����ִ��IP����
 ' ============================================
 Public Function QQWry(DotIP)
  Dim IP, nRet
  Dim RangB, RangE, RecNo
  
  IP = IPToInt (DotIP)
  
  Set Stream = CreateObject("ADodb.Stream")
  Stream.Mode = 3
  Stream.Type = 1
  Stream.Open
  Stream.LoadFromFile QQWryFile
  Stream.Position = 0
  Buf = Stream.Read(8)
  
  FirstStartIP = AscB(MidB(Buf, 1, 1)) + (AscB(MidB(Buf, 2, 1))*256) + (AscB(MidB(Buf, 3, 1))*256*256) + (AscB(MidB(Buf, 4, 1))*256*256*256)
  LastStartIP  = AscB(MidB(Buf, 5, 1)) + (AscB(MidB(Buf, 6, 1))*256) + (AscB(MidB(Buf, 7, 1))*256*256) + (AscB(MidB(Buf, 8, 1))*256*256*256)
  RecordCount = Int((LastStartIP - FirstStartIP)/7)
  ' �����ݿ����Ҳ����κ�IP��ַ
  If (RecordCount <= 1) Then
   Country = "δ֪"
   QQWry = 2
   Exit Function
  End If
  
  RangB = 0
  RangE = RecordCount
  
  Do While (RangB < (RangE - 1)) 
   RecNo = Int((RangB + RangE)/2) 
   Call GetStartIP (RecNo)
   If (IP = StartIP) Then
    RangB = RecNo
    Exit Do
   End If
   If (IP > StartIP) Then
    RangB = RecNo
   Else 
    RangE = RecNo
   End If
  Loop
  
  Call GetStartIP(RangB)
  Call GetEndIP()

  If (StartIP <= IP) And ( EndIP >= IP) Then
   ' û���ҵ�
   nRet = 0
  Else
   ' ����
   nRet = 3
  End If
  Call GetCountry(IP)

  QQWry = nRet
 End Function
 ' ============================================
 ' ���ս�
 ' ============================================
 Private Sub Class_Terminate
  On ErrOr Resume Next
  Stream.Close
  If Err Then Err.Clear
  Set Stream = Nothing
 End Sub
End Class 
%>

<% '���������������÷��� ������������%>
<% '������������0����ʾ��ʽ���͡�����������%>
