$(document).ready(function(){

    $(".one").hover(function(){
        $(this).attr("src","images/domo-cat.png");
    }, function(){
        $(this).attr("src","images/adventure-cat.png");
    });

    $(".two").hover(function(){
        $(this).attr("src","images/visionary.jpg");    
    }, function(){
        $(this).attr("src","images/ironcat.png");
    });

    $(".three").hover(function(){
        $(this).attr("src","images/linkcat.png");
    }, function(){
        $(this).attr("src","images/defunktocat.png");
    });

    $(".four").hover(function(){
        $(this).attr("src","images/kantana.jpg");    
    }, function(){
        $(this).attr("src","images/chellocat.jpg");
    });

    $(".five").hover(function(){
        $(this).attr("src","images/oktobercat.png");    
    }, function(){
        $(this).attr("src","images/cherry.jpg");
    });
    
    $(".six").hover(function(){
        $(this).attr("src","images/stormtroopocat.png");    
    }, function(){
        $(this).attr("src","images/heisencat.png");
    });
    
    $(".seven").hover(function(){
        $(this).attr("src","images/cooler.png");    
    }, function(){
        $(this).attr("src","images/daftpunk.gif");
    });

    $(".eight").hover(function(){
        $(this).attr("src","images/dojocat.jpg");    
    }, function(){
        $(this).attr("src","images/mario.png");
    });

});
