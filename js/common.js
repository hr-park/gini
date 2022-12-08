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
		$(this).parent('.sel_box').siblings('.sel_box').removeClass('on');
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
//팝업 열기
function openPop(id) {
	$('body').css('overflow','hidden');
	$('.dim').show();
	$('.pop_wrap').hide();
	$('#'+ id).show();
}
//팝업 닫기
function closePop(id) {
	$('body').css('overflow','visible');
	$('.dim').hide();
	$('#'+ id).hide();
}