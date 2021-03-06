$(document).ready(function(){
	var count = $(".b-review").length,
		nowItem = 0,
		items = new Array(),
		inter;

	$(".b-review").each(function(){
		items.push($(this));
	});
	items[0].show();

	$(".b-review-prev").click(function(){
		goTo( ( nowItem > 0 )?(nowItem-1):(count-1), -1 );
		clearInterval(inter);
	});
	$(".b-review-next").click(function(){
		goTo( ( nowItem < count-1 )?(nowItem+1):0, 1 );
		clearInterval(inter);
	});

	function goTo(next,side){
		TweenLite.to(items[nowItem], 0.3, { "left" : -1*side*50, ease : Quad.easeInOut } );
		items[nowItem].fadeOut(300);
		setTimeout(function(){
			items[next].css("left",1*side*50);
			TweenLite.to(items[next], 0.3, { "left" : 0, ease : Quad.easeInOut } );
			items[next].fadeIn(300);
			nowItem = next;
		},300);
	}

	inter = setInterval(function(){
		goTo( ( nowItem < count-1 )?(nowItem+1):0, 1 );
	},4000);

});