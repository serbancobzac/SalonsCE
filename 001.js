$(document).ready(function(){

    console.log("DASdada");

    $("li").on("click", function(){

        $("i").removeClass();
        $("i").addClass("far fa-circle");
        $(this).children().children().removeClass();
        $(this).children().children().addClass("fas fa-circle checked");
    });


    $(".content-box .right-side .button").on("click", function(){

        
        var title = $("i.checked").parent().text().trim();
        var subtitle = $("i.checked").parent().next().text().trim();
        console.log(title);
        console.log(subtitle);
    })
});