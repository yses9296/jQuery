$(function(){

    var $btnSubmit = $("#btnSubmit"),
        $fields = $(".form-control"),
        imageURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/winter.jpg";

    // 이미지 load - imgae foogy
    $(window).load(function(){
        $('.img-bg-blur').foggy();
        $('.img-bg').css({backgroundImage: 'url( ' +imageURL+ ')'}).fadeIn(400);
    })

    //form
    $btnSubmit.on("click", function() {
        
        $fields.each(function() {

            var value = $(this).val();

            if (value == "") {
                $(this).addClass("error");
                $(this).parent().find(".validation").show(1000);
            }
            else {
                $(this).removeClass("error");
                $(this).parent().find(".validation").hide(1000);
            }
        });//$fields each()

        var errorCount = $(".error").length;
        if (errorCount == 0) {
            $btnSubmit.prop("disabled", true).text("Loading...");
        }

    });//$btnSubmit click()

})//document ready()