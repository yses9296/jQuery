$(function(){

    var $btnSubmit = $("#btnSubmit"),
        $fields = $(".form-control");

    $btnSubmit.on("click", function(e) {
        e.preventDefault();//임시 버튼 기능 정지

        $fields.each(function() {

            var value = $(this).val();
            if (value == "") { //if(!value)
                $(this).addClass("error");
                $(this).prev().show(300);
            }
            
        });//$fields each()

    });//$btnSubmit click()

})//document ready()