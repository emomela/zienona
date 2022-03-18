
$(document).on('click', '.pr-card-amount-plus', function(){
		var thisInput = $(this).prev('input'),
				thisInputVal = parseInt(thisInput.val(), 10);

		if (isNaN(thisInputVal)) {
			thisInput.val(1).change();
		} else {
			thisInput.val(parseInt(thisInput.val(), 10) + 1).change()
		}
	});

	$(document).on('click', '.pr-card-amount-minus', function(){
		var thisInput = $(this).next('input'),
				thisInputVal = parseInt(thisInput.val(), 10);

		if (isNaN(thisInputVal)) {
			thisInput.val(0).change()
		} else {
		 if (thisInputVal < 1) {
			 thisInput.val(0).change()
		 } else {
			 thisInput.val(parseInt(thisInput.val(), 10) - 1).change()
		 }
		}
	});

    
	$(document).on('change','.cart-item-amount-input',function(e){
		let val = parseInt($(this).val(),10);
		if (val < 0) {
			$(this).val(0);
		}
	});


$(document).on('click', '.cart-item-amount-plus', function(){
		var thisInput = $(this).prev('input'),
				thisInputVal = parseInt(thisInput.val(), 10);

		if (isNaN(thisInputVal)) {
			thisInput.val(1).change();
		} else {
			thisInput.val(parseInt(thisInput.val(), 10) + 1).change()
		}
	});

	$(document).on('click', '.cart-item-amount-minus', function(){
		var thisInput = $(this).next('input'),
				thisInputVal = parseInt(thisInput.val(), 10);

		if (isNaN(thisInputVal)) {
			thisInput.val(0).change()
		} else {
		 if (thisInputVal < 1) {
			 thisInput.val(0).change()
		 } else {
			 thisInput.val(parseInt(thisInput.val(), 10) - 1).change()
		 }
		}
	});

    
	$(document).on('change','.cart-item-amount-input',function(e){
		let val = parseInt($(this).val(),10);
		if (val < 0) {
			$(this).val(0);
		}
	});	