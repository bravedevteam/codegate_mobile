$(function(){
	var _select = $(".selectLock select");
	_select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});

	var loginItem = new Swiper('.boxNoLogin .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 0
	});

	$("#btnGnb").click(function(e){
		e.preventDefault();

		$("body").css("overflow", "hidden");
		$("#gnb").fadeIn(300);
	});

	$("#gnb .btnClose").click(function(){
		$("body").css("overflow", "auto");
		$("#gnb").fadeOut(300);
	});

	$("input[type='checkbox']").change(function(){
		var _parent = $(this).parents(".boxAgree");
		var t_val = $(this).prop("checked");
		var t_name = $(this).attr("name");

		if($(this).parent().hasClass("all")){
			$("input[name="+t_name+"]").prop("checked", t_val);
		}else{
			var ck_all;
			_parent.children(".check").each(function(){
				var checked = $(this).children("input").prop("checked");
				if(checked == false){
					ck_all = false;
					return false;
				}else{
					ck_all = true;
				}
			});
			_parent.children(".all").children("input").prop("checked", ck_all);
		}
	});


	$(".openPopup").click(function(e){
		e.preventDefault();
		var target = $(this).attr("data-pop");

		$("#"+target).addClass("is--active");
		openDim();
	});

	$(".popBasic .btnClose").click(function(){
		$(this).parents(".popBasic").removeClass("is--active");
		closeDim();
	});

	$("#dim").click(function(){
		$(".popBasic").removeClass("is--active");
		$(".popAlert").removeClass("is--active");
		closeDim();
	});

	function openDim(){
		$("body").css("overflow", "hidden");
		$("#dim").fadeIn(300);
	}
	function closeDim(){
		$("body").css("overflow", "auto");
		$("#dim").fadeOut(300);
	}
});