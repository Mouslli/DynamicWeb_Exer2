
$("#q1").on("click", function () {
	$(this).hide();
	$("#p1").show();
})
$("#p1").on("click", function () {
	$(this).hide();
	$("#q2").show();
})
$("#q2").on("click", function () {
	$(this).hide();
	$("#p2").show();
})
$("#p2").on("click", function () {
	$(this).hide();
	$("#q3").show();
})
$("#q3").on("click", function () {
	$(this).hide();
	$("#p3").show();
})
$("#p3").on("click", function () {
	$(this).hide();
	$("#q1").show();
})