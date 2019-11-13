$( document ).ready(function() {
	var h = window.innerHeight
	var w =  window.innerWidth
	$('#logo_5').css({width: h})
	$('#logo_6').css({width: h})
	// setTimeout(function(){ $('#intro_logo').fadeIn(200) }, 50);
	setTimeout(function(){ $('#intro_logo').fadeOut(500) }, 500);
	
	$('.close').click(function(){
		$('.content').fadeOut(300)
		$('.menu_wrapper_mobile').css({'opacity':1})
		$('.menu_in').css({'opacity':0})
	})
	$('.menu_1').click(function(){
		$('.menu_wrapper_mobile').css({'opacity':0})

		$('.menu_in').css({'opacity':0})
		$('.content_1').fadeIn(300)
		$('.menu_in.menu_1').css({'opacity':1})
	})
	$('.menu_2').click(function(){
		$('.menu_wrapper_mobile').css({'opacity':0})

		$('.menu_in').css({'opacity':0})
		$('.content_2').fadeIn(300)
		$('.menu_in.menu_2').css({'opacity':1})
	})
	$('.menu_3').click(function(){
		$('.menu_wrapper_mobile').css({'opacity':0})

		$('.menu_in').css({'opacity':0})
		$('.content_3').fadeIn(300)
		$('.menu_in.menu_3').css({'opacity':1})
	})
	$('.menu_wrapper_mobile').click(function(){
		$('.menu_wrapper_desk').fadeIn(300)

		$('.bg_img_mo').fadeIn(300)
	})
	$('.close_mo').click(function(){
		$('.menu_wrapper_desk').fadeOut(300)
		$('.bg_img_mo').fadeOut(300)
	})
	$( window ).resize(function() {
		h = window.innerHeight
		w =  window.innerWidth
		if(w/h<119/90){
			$('.menu_wrapper_desk').css({'display':'flex'})
			
		}
			$('#logo_5').css({width: h})
			$('#logo_6').css({width: h})
	});
});