$("document").ready(function(){

    $("#explorebox1").click(function(){
        console.log("explorebox1 have been clicked!")
            $("#explorebox1").toggleClass("grow");
    });

    $("#explorebox2").click(function(){
        console.log("explorebox2 have been clicked!")
            $("#explorebox2").toggleClass("grow");
    });

    $("#explorebox3").click(function(){
        console.log("explorebox3 have been clicked!")
            $("#explorebox3").toggleClass("grow");
    });

});


jQuery(function($) {
    $('.explorebox').click(function() {
        return false;
    }).dblclick(function() {
        window.location = this.href;
        return false;
    });
});

