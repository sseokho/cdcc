$(function(){

	$(".contents-sub").prev().addClass("header-sub");


	$(".ui-input, .ui-textarea").on("change keyup paste", function() {
        var currentVal = $(this).val();
        if(currentVal == "") {
            $(this).removeClass("is-inputed");
        } else {
            $(this).addClass("is-inputed");
        }
    });

    $(".ui-select").on("change keyup paste", function() {
        var result = $('.ui-select option:selected').val();
		console.log(result);
        if(result == "") {
            $(this).removeClass("is-inputed");
        } else {
			$(this).addClass("is-inputed");
            //$(this).removeClass("is-inputed");
        }
    });


});

