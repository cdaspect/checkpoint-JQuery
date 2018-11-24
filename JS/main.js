var a =  $("#text")
let x = true
let y = true
let z = true
$(document).ready(function(){
	$("#bold").click(function(){
		$(a.css("font-weight",x?"bold":"normal"))
		x=!x;
	})
	$("#italic").click(function(){
		$(a.css("font-style",y?"italic":"normal"))
		y=!y;
	})
	$("#underline").click(function(){
		$(a.css("text-decoration",z?"underline solid rgb(0, 0, 0)":"none solid rgb(0, 0, 0)"))
		z=!z;
	})
	$("#font").change(function(){
		$(a.css("font-family", $("#font").val()));
	})
	$("#size").change(function(){
		$(a.css("font-size", $("#size").val()));
	})
	$("#color").change(function(){
		$(a.css("color", $("#color").val()));
	})
	$("#display").change(function(){
		$(a.css("text-align", $("#display").val()));
	})
});