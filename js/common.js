$(document).ready(function(){
	//alert field 내용 지우기
	$('.inp_field .btn_del').click(function(){
		$(this).parents('.row').find('input').val('');
		$(this).hide();
		$(this).parents('.row').removeClass('alert');
		$('.txt_alert').hide();
	});
	//selectbox
	$('.sel_box > a').click(function(){
		$(this).parent('.sel_box').toggleClass('on');
	});
});
