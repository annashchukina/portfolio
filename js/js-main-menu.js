$(document).ready(function(){
	$(".menu-link").click(function(){
	  $(".dropdown-menu").slideToggle("slow");
	  $(this).toggleClass("open");
 	});
});