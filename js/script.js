$(function(){
	bb=true;
	$('#wrap #mob_nav_bg').hide();
	$('#nav_icon>a>span').click(function(){
		if(bb){
			$('html').css({'overflow-y':'hidden'});
			$('#wrap #mob_nav_bg').fadeIn(500);
			$('#nav_icon>a>span').addClass('icon_open');
			$('#wrap #mob_nav').stop().animate({'top':'0px'},500,function(){
				bb=false;
			})
		}else{
			$('html').css({'overflow-y':'scroll'});
			$('#wrap #mob_nav_bg').fadeOut(500);
			$('#nav_icon>a>span').removeClass('icon_open');
			$('#wrap #mob_nav').stop().animate({'top':'-100%'},500,function(){
				bb=true;
			})
		}
		return false;
	});
});