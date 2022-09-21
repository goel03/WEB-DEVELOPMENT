$(document).ready(function()
{

    $("button").click(function()
    {

        $('tr').fadeOut(10); 
        $('#1').fadeIn(1000); 
        $('#2').fadeIn(3000); 
        $('#3').fadeIn(7000); 
        $('#4').fadeIn(8000); 
        $('#5').fadeIn(11000); 

        $("body").css(
            {
                "background-color":""
            }
        );

        $("h1").css({
            "font-family":"Times New Romans",
            "text-align":"center",
            "background-color":"pink",
             "border":"2 px solid black"
        });

$("table").css({
    "background-color":"red",
   
});

$("li").css({
    "background-color":"pink",
    
    "font-family":"Times New Romans"
});



$("th").css({
    "background-color":"pink",
    "font-size":"40px",
    "font-family":"Times New Romans"
});


$("tr").css({
    "background-color":"yellow",

    
    "font-family":"Times New Romans",
    "padding":"23px"
});



$("p").animate({
    opacity:0.3,
    height:'50px',
    width:'50px'
},3000)

$("button").hide();



    });

    





});