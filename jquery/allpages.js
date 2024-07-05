$(document).ready(function () {

    $('#close').click(function (e) {
        $('#boxes').hide();
        document.body.style.overflow = "visible";
   });
   

    $('.pics').cycle({
        fx: 'fade',
        speed: 3000,
        pause: 0,
        delay: -6000
    });

    fadeTitles();

}); 
    
     function fadeTitles()
     {       
                    
     $("#Slogan1").fadeIn(1000, function() 
     {
                $("#Slogan1").fadeOut(3000);
                $("#Slogan2").fadeIn(6000, function() 
                {
                        $("#Slogan2").fadeOut(3000);
                        $("#Slogan3").fadeIn(6000, function() 
                        {                    
                          $("#Slogan3").fadeOut(3000);                    
                          setTimeout('fadeTitles();', 2200);                    
                        });
                });
      });
          }


function CalendarClicked()
{   
    
    var ScrollTop = document.body.scrollTop;

    if (navigator.userAgent.indexOf("MSIE") != -1) {
        ScrollTop = document.documentElement.scrollTop;        
    }

    if (navigator.userAgent.indexOf("Firefox") != -1) {
        ScrollTop = document.documentElement.scrollTop;        
    }
    
    $('#boxes').css({ position: "absolute", color: "red", left: "-87px", top: ScrollTop - 350 + "px" });
    $('#boxes').css('background-color', 'black');
    $('#boxes').css('width', '924px');
    $('#boxes').css('height', '660px');
    $('#boxes').css('z-index', '10');
        
    $('#boxes').fadeIn(1000);
    document.body.scrollTop = ScrollTop;
    document.body.style.overflow = "hidden";
    return false;
   
}