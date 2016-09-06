
    $(document).ready(function(){
      $(".menu2 a").hover(function() {
        $(this).next("em").animate({ opacity: "show", top: "-95"}, "slow");
      }, function(){
        $(this).next("em").animate({ opacity: "hide", top: "-105"}, "fast");
      }); 
    });
