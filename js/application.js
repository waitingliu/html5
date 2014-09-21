$(function(){
	$("#pictures,#tips,#contact").hide().addClass("hidden");
	$("#articles").addClass("visible");
	
	$("nav ul").click(function(event){
		target = $(event.target);
		if(target.is("a")){
			event.preventDefault();
			if($(target.attr("href")).hasClass("hidden")){
				$(".visible").removeClass("visible").addClass("hidden").hide();
				$(target.attr("href")).removeClass("hidden").addClass("visible").show();
			};
		};
	});
});