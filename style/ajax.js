/*
  ajax������
*/
//����ajax����
function createXMLHTTP(){
    var xmlhttp=null;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest(); //firefox��ִ�д����
    }
    else if(window.ActiveXObject){
        try{
          xmlhttp = new ActiveXObject("Msxm12.XMLHTTP");
        }catch(e){
            try{ // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){}
        }
    }
	return xmlhttp;
}
//ȫ��XMLHTTP����ʵ������
var http  = createXMLHTTP();
//��α�뷢�Ͳ�ѯ������
function GetQueryFw(){
    var bianhao       = document.getElementById("bianhao").value;
	var yzm_status    = document.getElementById("yzm_status").value;		
	var search        = document.getElementById("search").value;		
	if(yzm_status == 1){
	  var yzm         = document.getElementById("yzm").value;
	}
	if(bianhao == ""){
	  alert("�������α�룬����Ϊ��");
	  document.getElementById("bianhao").focus();
	  return false;
	}
	if(yzm_status == 1 && yzm == ""){
	  alert("��������֤�룬����Ϊ��");
	  document.getElementById("yzm").focus();
	  return false;
	}
	if(yzm_status == 1 && yzm.length != 4){
	  alert("��֤���ʽ����");
	  document.getElementById("yzm").focus();
	  return false;
	}
	////���¸�ֵ
	document.getElementById("search").value = 'no';		
	if(search == ""){		
	  var url="/fangwei/index99.php?act=query";			
	  url+=("&bianhao="+bianhao+"&yzm="+yzm+"&search="+search);
	  http.open("GET",url,true);
	  http.onreadystatechange=ProcessHttpResponse;
	  http.send(null);
	  return;			
	}
}
//�����̷��Ͳ�ѯ������
function GetQueryAg(){
    var keyword      = document.getElementById("keyword").value;
	var ag_status    = document.getElementById("ag_status").value;		
	var search       = document.getElementById("search").value;		
	if(ag_status == 1){
	  var agyzm      = document.getElementById("agyzm").value;
	}
	if(keyword == ""){
	  alert("������ؼ��ʣ�����Ϊ��");
	  document.getElementById("keyword").focus();
	  return false;
	}
	if(ag_status == 1 && agyzm == ""){
	  alert("��������֤�룬����Ϊ��");
	  document.getElementById("agyzm").focus();
	  return false;
	}
	if(ag_status == 1 && agyzm.length != 4){
	  alert("��֤���ʽ����");
	  document.getElementById("agyzm").focus();
	  return false;
	}
	////���¸�ֵ
	document.getElementById("search").value = 'no';		
	if(search == ""){		
	  var url="agent.php?act=query";			
	  url+=("&keyword="+keyword+"&agyzm="+agyzm+"&search="+search);
	  http.open("GET",url,true);
	  http.onreadystatechange=ProcessHttpResponse;
	  http.send(null);
	  return;
	}
}
//�����ѯ������
function ProcessHttpResponse(){
    if(http.readyState==4){
	   if(http.status==200){
		 var jieguo = http.responseText;
		 var arr_str=new Array();
		 arr_str= jieguo.split("|");
		 document.getElementById("result_str").innerHTML  = arr_str[1];
	   }else{
		 alert("error:"+http.status);
	   }
	}
}

