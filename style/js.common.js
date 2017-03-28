// JavaScript Document

/*

js函数列表：

1.两个值比较

2.字符串长度

3.检测电话

4.检测邮政编码

5.检测email

6.检测特殊字符,有特殊字符返回true，反之返回false

7.中文字判断

8.创建遮罩层

9.图片预加载

*/

//字符串长度,中文占2个字节，英文占1个字节

function stringlength(TargetStr) {

	var TmpStr, TmpChar;

	var nOriginLen = 0;

	var nStrLength = 0;



	TmpStr = new String(TargetStr);

	nOriginLen = TmpStr.length;

	for ( var i=0 ; i < nOriginLen ; i++ ) {

		TmpChar = TmpStr.charAt(i);

		if (escape(TmpChar).length > 4) {

				nStrLength += 2;

		} else if (TmpChar!='\r') {

				nStrLength ++;

		}

	}

	return nStrLength;

}

//检测电话

function isphone(s) {

	var digits="0123456789-";

	var i=0;

	var sLength=s.length;

	while((i<sLength)){

		var c=s.charAt(i);

		if(digits.indexOf(c)==-1) return false;

		 i++;

	 }

	 return true;

}

function isMobil(s) {

    //var patrn = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;

    var patrn = /^(13[0-9]{9})|(14[0-9])|(18[0-9])|(15[0-9][0-9]{8})|(17[0-9]{9})$/;

    if (!patrn.exec(s)) return false

    return true

}

//检测价格

function isprice(s) {

	var digits="0123456789.";

	var i=0;

	var sLength=s.length;

	while((i<sLength)){

		var c=s.charAt(i);

		if(digits.indexOf(c)==-1) return false;

		 i++;

	 }

	 return true;

}

//检测邮政编码

function iszip(zip){

	var regu=/^[0-9]{6}$/;

	return regu.test(zip);

}

//检测email

function isemail(email){

	email=email.toLowerCase();

	var strSuffix = "cc|com|edu|gov|int|net|org|biz|info|pro|name|coop|al|dz|af|ar|ae|aw|om|az|eg|et|ie|ee|ad|ao|ai|ag|at|au|mo|bb|pg|bs|pk|py|ps|bh|pa|br|by|bm|bg|mp|bj|be|is|pr|ba|pl|bo|bz|bw|bt|bf|bi|bv|kp|gq|dk|de|tl|tp|tg|dm|do|ru|ec|er|fr|fo|pf|gf|tf|va|ph|fj|fi|cv|fk|gm|cg|cd|co|cr|gg|gd|gl|ge|cu|gp|gu|gy|kz|ht|kr|nl|an|hm|hn|ki|dj|kg|gn|gw|ca|gh|ga|kh|cz|zw|cm|qa|ky|km|ci|kw|cc|hr|ke|ck|lv|ls|la|lb|lt|lr|ly|li|re|lu|rw|ro|mg|im|mv|mt|mw|my|ml|mk|mh|mq|yt|mu|mr|us|um|as|vi|mn|ms|bd|pe|fm|mm|md|ma|mc|mz|mx|nr|np|ni|ne|ng|nu|no|nf|na|za|aq|gs|eu|pw|pn|pt|jp|se|ch|sv|ws|yu|sl|sn|cy|sc|sa|cx|st|sh|kn|lc|sm|pm|vc|lk|sk|si|sj|sz|sd|sr|sb|so|tj|tw|th|tz|to|tc|tt|tn|tv|tr|tm|tk|wf|vu|gt|ve|bn|ug|ua|uy|uz|es|eh|gr|hk|sg|nc|nz|hu|sy|jm|am|ac|ye|iq|ir|il|it|in|id|uk|vg|io|jo|vn|zm|je|td|gi|cl|cf|cn";

	var regu = "^[a-z0-9][_a-z0-9\-]*([\.][_a-z0-9\-]+)*@([a-z0-9\-_]+[\.])+(" + strSuffix + ")$";

	var re = new RegExp(regu);

	if(email.search(re)==-1){return false;}else{return true;}

}

//检测特殊字符,有特殊字符返回true，反之,返回false

function checkerr(string){

	var regu=/[^a-zA-Z_0-9]/;

	return regu.test(string);

}



//创建遮罩层

function createMask(){

	var sWidth,sHeight;

	sWidth = window.screen.availWidth;

	if(window.screen.availHeight > document.body.scrollHeight){  //当高度少于一屏

		sHeight = window.screen.availHeight;  

	}else{//当高度大于一屏

		sHeight = $(document).height();   

	}

	//创建遮罩背景

	var maskObj = document.createElement("div");

	maskObj.setAttribute('id','BigDiv');

	maskObj.style.position = "absolute";

	maskObj.style.top = "0";

	maskObj.style.left = "0";

	maskObj.style.background = "#000000";

	maskObj.style.filter = "Alpha(opacity=40);";

	maskObj.style.opacity = "0.4";

	maskObj.style.width = sWidth-20 + "px";

	maskObj.style.height = sHeight + "px";

	maskObj.style.zIndex = "999";

	document.body.appendChild(maskObj);

}

//创建遮罩层

function createMask2(width,opacity,zIndex){

	if(arguments.length==1){ opacity=0.8;zIndex=999;}

	else if(arguments.length==2) zIndex=999;

	var sWidth,sHeight;

	sHeight = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop + $(document).height();

	sWidth = $(document).width();

	//创建遮罩背景

	var maskObj = document.createElement("div");

	if(document.getElementById("BigDiv")) return false;

	maskObj.setAttribute('id','BigDiv');

	maskObj.setAttribute('class','BigDiv');

	maskObj.style.position = "absolute";

	maskObj.style.top = "0";

	maskObj.style.left = "0";

	maskObj.style.background = "#000";

	maskObj.style.filter = "Alpha(opacity="+opacity*100+");";

	maskObj.style.opacity = opacity;

	maskObj.style.width = "100%";

	maskObj.style.height = sHeight + "px";

	maskObj.style.zIndex = zIndex;

	document.body.appendChild(maskObj);

}

function closeMask(){

	$("#BigDiv").remove();$(".BigDiv").remove();

}

function showDialog(dom,top,left){

	dom.show();

	if(arguments.length==1) setCenter(dom);

	else if(arguments.length==2){setCenter(dom);dom.css("top",top);}

	else{setCenter(dom);dom.css("top",top);dom.css("left",left);}

	createMask2(document.body.scrollWidth,0.3);

}

function closeDialog(dom){

	dom.hide();closeMask();

}



//中文字判断,中文字返回true

function isChinese(temp) { 

	var re = /[^\u4e00-\u9fa5]/; 

	if(re.test(temp)) return false; 

	return true; 

}

//上下，左右居中

function setCenter(dom){

	$(dom).css("left",($(document).width()-$(dom).width())/2);

	var top2=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;

	$(dom).css("top",top2+(window.screen.availHeight-$(dom).height()-130)/2);

}

function getPosition(dom,width,height){

	var scroll2=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;

	$(dom).css("left",(document.body.scrollWidth-width)/2);

	$(dom).css("top",scroll2+(window.screen.availHeight-height-130)/2);

	$(dom).show();

}

String.prototype.trim = function(){

  return this.replace(/(^[\s]*)|([\s]*$)/g,"");

}

function addBookmark() {

	try{

	var url=location.href;

	var title=document.title;

	var brow=getBrowser();

	

	if(brow=="ie"){

		window.external.AddFavorite( url, title);

		return;

	}else if(brow=="firefox"){

		window.sidebar.addPanel(title, url,"");

		return;

	}else{

		alert("请按ctrl+d 收藏网页！");

		return;

	}

	}catch(e){alert(e.description);}

	

}

function SetHomepage(url) {    

	if(!url){ url=document.URL;}   

	if(document.all){   

		document.body.style.behavior = 'url(#default#homepage)';   

		document.body.setHomePage(url);   

	}   

    else if(window.sidebar){   

        if(window.netscape){   

			try {   

				window.netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");   

			}catch (e){   

				alert("此操作被浏览器拒绝！请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]的值设置为'true',双击即可。");   

		   }   

     	}   

	 var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);   

	 prefs.setCharPref('browser.startup.homepage', url);   

     }   

}   





function setCookie(c_name,value,expiredays){

	var exdate=new Date();

	exdate.setDate(exdate.getDate()+expiredays);

	document.cookie=c_name+ "=" +escape(value)+

	((expiredays==null) ? "" : ";expires="+exdate.toGMTString());

}

function getCookie(c_name){

	if (document.cookie.length>0){

		c_start=document.cookie.indexOf(c_name + "=")

		if (c_start!=-1){ 

			c_start=c_start + c_name.length+1 

			c_end=document.cookie.indexOf(";",c_start)

			if (c_end==-1) c_end=document.cookie.length;

			return unescape(document.cookie.substring(c_start,c_end));

		} 

	}

	return "";

}

//flash插入方法

function getFlash(src,width,height,flashid){

	return "<object id='"+flashid+"' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='"+width+"' height='"+height+"'><param name='movie' value='"+src+"' /><param name='quality' value='high' /><param name='allowscriptaccess' value='always' /><param name='menu' value='false' /><param name='wmode' value='transparent' /><embed allowscriptaccess='always' id='"+flashid+"55' src='"+src+"' width='"+width+"' height='"+height+"' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' menu='false' wmode='transparent'></embed></object>";

}



//浏览器判断

function getBrowser(){

	var Sys = {}; 

	var ua = navigator.userAgent.toLowerCase(); 

	var s; 

	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0; 

	 

	if(Sys.ie) return "ie"; 

	if(Sys.firefox) return "firefox"; 

	if(Sys.chrome) return "chrome";

	if(Sys.opera) return "opera";

	if(Sys.safari) return "safari";

}

function getAllBrowser(){

	var browser={

    versions:function(){

           var u = navigator.userAgent, app = navigator.appVersion;

           return {//移动终端浏览器版本信息

                trident: !!u.toLowerCase().match(/msie ([\d.]+)/), //IE内核

                presto: u.indexOf('Presto') > -1, //opera内核

                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核

                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核

                mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端

                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端

                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器

                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器

                iPad: u.indexOf('iPad') > -1, //是否iPad

                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部

            };

         }(),

         language:(navigator.browserLanguage || navigator.language).toLowerCase()

	}

	return browser;

}

//dom靠底设置

function setDomBottom(dom,height){

	var scrollheight=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;

	dom.css("position","absolute");

	dom.css("top",scrollheight+document.documentElement.clientHeight-height);

	$(window).scroll(function(){

		var top=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;

		dom.css("top",top+document.documentElement.clientHeight-height);

	});	

}

function closepage(){

	var browserName = navigator.appName;

	if (browserName == "Netscape") {

		window.open('', '_self', '');

		window.close();

	}else if (browserName == "Microsoft Internet Explorer") {

		window.opener = "whocares";

		window.close();

	}

}

function inputTips(dom,text,textcolor,mrcolor){

	dom.attr("value",text);

	dom.css("color",textcolor);

	dom.bind("focus",function(){

		if(dom.attr("value") == text){

			dom.attr("value","");

		}

		dom.css("color",mrcolor);

	});

	dom.bind("blur",function(){

		if(dom.attr("value") == ""){

			dom.attr("value",text);

			dom.css("color",textcolor);

		}

	});

}

function jDrawImage(ImgD,width,height){ 

	var rzwidth,rzheight;

	//var realimgwidth =  ImgD.width();

	//var realimgheight = ImgD.height();

	var image=new Image(); 

	image.src=ImgD.attr("src"); 

	var realimgwidth =  image.width?image.width:ImgD.width();

	var realimgheight = image.height?image.height:ImgD.height();

	if(realimgwidth>0 && realimgheight>0){ 

		flag=true; 

		if(realimgwidth/realimgheight>1){ 

			if(realimgwidth>width){

				rzwidth  = width;

				rzheight = (realimgheight*width)/realimgwidth;

			}else{

				rzwidth  = realimgwidth;

				rzheight = realimgheight;

			} 

			

		}else{ 

			if(realimgheight>height){

				rzwidth = (realimgwidth*height)/realimgheight;

				rzheight = height;

			}else{

				rzwidth = realimgwidth;

				rzheight = realimgheight;

			} 

		//ImgD.alt="点击查看大图片"; 

		}

		

		if(rzwidth>width){ rzwidth = width;rzheight = (realimgheight*width)/realimgwidth;}

		if(rzheight>height){ rzheight = height;rzwidth = (realimgwidth*height)/realimgheight;}



		ImgD.width(rzwidth);

		ImgD.height(rzheight); 

		ImgD.css("height",rzheight+"px");

		ImgD.css("width",rzwidth+"px");

	}

}

function isIdCardNo(num){  

	  num = num.toUpperCase(); 

	 //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。  

	  if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)))  

	  {

		   alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');

		  return false;

	 }

	 return true;

}