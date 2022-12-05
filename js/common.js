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
	//데이터 추가 팝업 전체교재 메뉴
	$('.pop_data .menu a.all').click(function(){
		$('.menu .list_depth2').slideDown();
	});
	//데이터 추가 팝업 전체교재 메뉴
	$('.pop_data .menu .list_depth1 > li > a').click(function(){
		$(this).next('.list_depth2').slideToggle();
	});
});
//팝업닫기 공통
function popClose(){
	$('html, body').css('overflow','visible');
	$('.pop_wrap, .dim').fadeOut('fast');
}
//데이터 추가 팝업
function fncAddData(){
	$('html, body').css('overflow','hidden');
	$('#pop_data, .dim').show();
}
//데이터 추가 팝업 - 빈칸Activity
function fncAddDataBlank(){
	$('html, body').css('overflow','hidden');
	$('#pop_data_blank, .dim').show();
}