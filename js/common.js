$(function(){
	var _select = $(".selectLock select");
	_select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});
});