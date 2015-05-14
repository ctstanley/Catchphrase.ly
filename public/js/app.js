$(function () {
  alert("The Page Has Loaded!");
  $.get("/phrases", function(data){
  	$(".result").html(data);
  	console.log(data);	
  });
});

// var tmpl_str = $("#tmpl-loop").html();
// 	var compile = _.template(tmpl_str);
// 	var html_st = compile(phrases);
// 	$("body").html(html_st);