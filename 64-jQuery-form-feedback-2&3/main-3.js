$(function(){

    var $btnSubmit = $("#btnSubmit"),
        $fields = $(".form-control");

    $btnSubmit.on("click", function(e) {
        e.preventDefault();//임시 버튼 기능 정지

        $fields.each(function() {
            var value = $(this).val();
            if (value == "") {
                $(this).addClass("error");
                $(this).parent().find(".validation").show(1000);
                // == $(this).prev().show(300)
            }
            else{
                $(this).removeClass("error");
                $(this).parent().find(".validation").hide(1000);
                // == $(this).prev().hide(300)
            }

        });//$fields each()

        var $errorCount = $('.error').length;
        if( $errorCount > 0 ){
            $(this).prop('disabled', true).text('Complete the Form')
        }

    });//$btnSubmit click()

    $fields.click(function(){
        $(this).removeClass("error");
        $(this).parent().find(".validation").hide(1000);
        $btnSubmit.prop('disabled', false).text('Send')
    })//$fields click()

})//document ready()

