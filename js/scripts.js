
$("#q1").on("click", function () {
	$(this).hide();
	$("#p1").show();
	$("body").css("background-color","#65A1B8");
})
$("#p1").on("click", function () {
	$(this).hide();
	$("#q2").show();
	$("body").css("background-color","#F4A261");

})
$("#q2").on("click", function () {
	$(this).hide();
	$("#p2").show();
	$("body").css("background-color","#2A9D8F");
})
$("#p2").on("click", function () {
	$(this).hide();
	$("#q3").show();
	$("body").css("background-color","#f2f2f2");
})
$("#q3").on("click", function () {
	$(this).hide();
	$("#p3").show();
	$("body").css("background-color","#F7D572");
})
$("#p3").on("click", function () {
	$(this).hide();
	$("#q1").show();
	$("body").css("background-color","#f2f2f2");
})