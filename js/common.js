$(function(){
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', vh + 'px')
	$(window).resize(function(){
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', vh + 'px')
	});

	$(document).on("click", ".inp_field .btn_del", function (e) {
		$(this).parents('.row').find('input').val('');
		$(this).hide();
		$(this).parents('.row').removeClass('alert');
		$('.txt_alert').hide();
	});

	$(document).on("click", ".sel_box > a", function (e) {
		$(this).parent('.sel_box').siblings('.sel_box').removeClass('on');
		$(this).parent('.sel_box').toggleClass('on');
	});

	$(document).on("click", ".pop_data .menu a.all", function (e){
		$('.menu .list_depth2').slideDown();
	});

	$(document).on("click", ".pop_data .menu .list_depth1 > li > a", function (e) {
		$(this).next('.list_depth2').slideToggle();
	});
	

	//파일선택
	$(".file_box input[type='file']").on('change',function(){
		var fileName = $(this).val();
		var file = $(this).prop("files")[0];
		var blobURL = window.URL.createObjectURL(file);

		if(fileName != ""){
			var ext = fileName.split('.').pop().toLowerCase(); //확장자분리
			//아래 확장자가 있는지 체크
			if($.inArray(ext, ['jpg','jpeg','gif','png', 'svg']) == -1) {
				alert('이미지 파일만 업로드 할 수 있습니다.');
				return;
			}else{
				$(this).parent('.file_box').find(".file_name").val(fileName);
				$(this).parent('.file_box').find(".file_name").attr('readonly',true);
				if($(this).next('.btn_preview').length < 1){
					$(this).after('<a href="'+blobURL+'" class="btn_preview" target="_blank">파일 미리보기</a>');
				}else{
					$(this).next('.btn_preview').attr('href', blobURL);
				}
			}
		}
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