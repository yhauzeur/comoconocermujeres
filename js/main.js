$(document).ready(function () {
  $('#submit').hover( function(){
		  $(this).attr({src : 'images/btn_signup_over.gif'});
	}, function(){
		  $(this).attr({src : 'images/btn_signup.gif'});
  });

  $('#videoplay1, #videoplay1-m').click(function(){
	playVideo('shO5ivs_klY');
	$('#videoplay2, #videoplay2-m').removeClass('current');
	$('#videoplay1, #videoplay1-m').addClass('current');
	$('#videoplay3, #videoplay3-m').removeClass('current');
	$('#videoplay4, #videoplay4-m').removeClass('current');
	$('#videoplay5, #videoplay5-m').removeClass('current');
	
	$('.number2').removeClass('current');
	$('.number1').addClass('current');
	$('.number3').removeClass('current');
	$('.number4').removeClass('current');
	$('.number5').removeClass('current');

  });



  $('#videoplay2, #videoplay2-m').click(function(){
	//showImage('http://alexanderhotseat.com/hotseat/images/video1.png');
	playVideo('AGKtRGwyNYc');
	$('#videoplay2, #videoplay2-m').addClass('current');
	$('#videoplay1, #videoplay1-m').removeClass('current');
	$('#videoplay3, #videoplay3-m').removeClass('current');
	$('#videoplay4, #videoplay4-m').removeClass('current');
	$('#videoplay5, #videoplay5-m').removeClass('current');

	$('.number2').addClass('current');
	$('.number1').removeClass('current');
	$('.number3').removeClass('current');
	$('.number4').removeClass('current');
	$('.number5').removeClass('current');

  });



  $('#videoplay3, #videoplay3-m').click(function(){
	playVideo('O8c-ijxS8CY');
	$('#videoplay3, #videoplay3-m').addClass('current');
	$('#videoplay1, #videoplay1-m').removeClass('current');
	$('#videoplay2, #videoplay2-m').removeClass('current');
	$('#videoplay4, #videoplay4-m').removeClass('current');
	$('#videoplay5, #videoplay5-m').removeClass('current');

	$('.number1').removeClass('current');
	$('.number2').removeClass('current');
	$('.number3').addClass('current');
	$('.number4').removeClass('current');
	$('.number5').removeClass('current');

  });



  $('#videoplay4, #videoplay4-m').click(function(){
	playVideo('G2H9o6z1oKU');
	$('#videoplay4, #videoplay4-m').addClass('current');
	$('#videoplay1, #videoplay1-m').removeClass('current');
	$('#videoplay2, #videoplay2-m').removeClass('current');
	$('#videoplay3, #videoplay3-m').removeClass('current');
	$('#videoplay5, #videoplay5-m').removeClass('current');


	$('.number1').removeClass('current');
	$('.number2').removeClass('current');
	$('.number3').removeClass('current');
	$('.number4').addClass('current');
	$('.number5').removeClass('current');

  });



  $('#videoplay5, #videoplay5-m').click(function(){
	//playVideo('tlWrFgIR6CU');
	playVideo('s2H2BfvX3v4');
	$('#videoplay5, #videoplay5-m').addClass('current');
	$('#videoplay1, #videoplay1-m').removeClass('current');
	$('#videoplay2, #videoplay2-m').removeClass('current');
	$('#videoplay3, #videoplay3-m').removeClass('current');
	$('#videoplay4, #videoplay4-m').removeClass('current');

	$('.number1').removeClass('current');
	$('.number2').removeClass('current');
	$('.number3').removeClass('current');
	$('.number4').removeClass('current');
	$('.number5').addClass('current');

  });
  
  
  
  // Animate buttons to pop in
  $('#videoplay1, #videoplay1-m').animate({marginTop:0}, 700);
  $('#videoplay2, #videoplay2-m').delay(300).animate({marginTop:0}, 700);
  $('#videoplay3, #videoplay3-m').delay(600).animate({marginTop:0}, 700);
  $('#videoplay4, #videoplay4-m').delay(900).animate({marginTop:0}, 700);
  $('#videoplay5, #videoplay5-m').delay(1200).animate({marginTop:0}, 700);
  
//  $('body').supersleight();
  $('#phonebtn_open').click(function(){
	$('#callContent').modal({overlayClose:true});
  });
  $('#phonebtn_close').click(function(){
	$('#phonebtn').hide();
  });
  $('#tab_tip .tip').delay(1500).fadeOut(1000).fadeIn(1000).delay(500).fadeOut(1000).fadeIn(1000).delay(500).fadeOut(1000).fadeIn(1000);
              // $("#phonebtn_open").modal();
});

function playVideo(youtubeId){
  $('.video-div .replaceable').fadeOut(400, function(){
    $('.video-div').html('<div class="replaceable" style="display:none;"><iframe width="786" height="442" src="https://www.youtube.com/embed/'+ youtubeId +'?autoplay=1&controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe></div>');
    $('.video-div .replaceable').delay(100).fadeIn(800);
  });
}
/*http://www.youtube-nocookie.com/embed/*/
function displayImage(imageId){
$('.video-div .replaceable').fadeOut(400, function(){
    $('.video-div').html('<div class="replaceable" style="display:none;"><img src="http://hotseatathome.com/offer/img/section02-bg.jpg" /></div>');
    $('.video-div .replaceable').delay(100).fadeIn(800);
  });
}

function showImage(){
	document.getElementById('loadingImage').style.visibility=visible;
}
function displayMessage(msg){
  $('.video-div .replaceable').fadeOut(400, function(){
    $('.video-div').html('<div class="replaceable video_message" style="display:none;">'+msg+'</div>');
    $('.video-div .replaceable').delay(100).fadeIn(800);
  });
}

