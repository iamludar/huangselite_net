function dlcx(obj, obj1) {
    var $DlCode = document.getElementById(obj).value;
      var RegNumber = /^[0-9]*[1-9][0-9]*$/;
                var flag = false;

               document.getElementById(obj1).innerHTML = "";


                if ($DlCode.length == 0) {

                   alert("哥们，这个要输入点东西");

                    return false;

                }
            
				 $.ajaxSetup({ scriptCharset: "gbk" , contentType: "application/json; charset=utf8"});
				 
                document.getElementById(obj1).innerHTML ="";

                $(this).attr("disabled", true);

                var $strurl="" ;
$.getJSON("http://www.04wu.com/xt/views/chun_wen_zi?dailiweixin="+$DlCode,
function(data) {
	if(data[0]!=null)
	{
		$("#jg_main_id").removeClass("jg_main2");
	    $("#jg_main_id").addClass("jg_main");
	    $("#fangwei_id").html("");
	    $("#fangwei_id").html(data[0].dailixingming+"是葡萄牙Huang's Elite授权的("+data[0].dailijibie+"),请放心购买！");
	    $("#jg_main_id").show();
	}
	else
	{
		$("#jg_main_id").removeClass("jg_main");
	    $("#jg_main_id").addClass("jg_main2");
	    $("#fangwei_id").html("");
	    $("#fangwei_id").html("您好，您所查询代理商不存在");
	    $("#jg_main_id").show();
	}
		
	setTimeout(btnEnabled, 2000);
});

            function btnEnabled() {

                $(this).attr("disabled", false);

            }
}
