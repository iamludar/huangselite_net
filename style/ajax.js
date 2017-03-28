/*
  ajax请求处理
*/
//创建ajax函数
function createXMLHTTP(){
    var xmlhttp=null;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest(); //firefox下执行此语句
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
//全局XMLHTTP对象实力变量
var http  = createXMLHTTP();
//防伪码发送查询的请求
function GetQueryFw(){
    var bianhao       = document.getElementById("bianhao").value;
	var yzm_status    = document.getElementById("yzm_status").value;		
	var search        = document.getElementById("search").value;		
	if(yzm_status == 1){
	  var yzm         = document.getElementById("yzm").value;
	}
	if(bianhao == ""){
	  alert("请输入防伪码，不能为空");
	  document.getElementById("bianhao").focus();
	  return false;
	}
	if(yzm_status == 1 && yzm == ""){
	  alert("请输入验证码，不能为空");
	  document.getElementById("yzm").focus();
	  return false;
	}
	if(yzm_status == 1 && yzm.length != 4){
	  alert("验证码格式错误");
	  document.getElementById("yzm").focus();
	  return false;
	}
	////重新赋值
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
//代理商发送查询的请求
function GetQueryAg(){
    var keyword      = document.getElementById("keyword").value;
	var ag_status    = document.getElementById("ag_status").value;		
	var search       = document.getElementById("search").value;		
	if(ag_status == 1){
	  var agyzm      = document.getElementById("agyzm").value;
	}
	if(keyword == ""){
	  alert("请输入关键词，不能为空");
	  document.getElementById("keyword").focus();
	  return false;
	}
	if(ag_status == 1 && agyzm == ""){
	  alert("请输入验证码，不能为空");
	  document.getElementById("agyzm").focus();
	  return false;
	}
	if(ag_status == 1 && agyzm.length != 4){
	  alert("验证码格式错误");
	  document.getElementById("agyzm").focus();
	  return false;
	}
	////重新赋值
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
//处理查询的请求
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

