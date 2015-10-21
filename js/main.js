$(document).ready(function(){	
    var brow = browser(),
        tmp = brow.splice(","),
    
    brow = (brow == "MSIE,8.0")?"MSIE":tmp[0];
    function browser(){
        var N= navigator.appName, ua= navigator.userAgent, tem;
        var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
        M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
        return M;
    }

    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }

        $(".b-3 .b-back").css("height",( myHeight > myWidth )?1000:900);
    }
    $(window).resize(resize);
    resize();

    $(window).stellar({
        hideDistantElements: false,
        horizontalScrolling: false,
        positionProperty: 'transform'
    });

    $(".b-gradient-butt").mousemove(function(e){
        var mX = e.clientX-$(this).offset().left,
            w = 300,
            p = Math.round((80*(mX/w))+10);

        $(this).find(".b-center-point").attr("offset",p+"%");
    }).mousedown(function(){
        $(this).find(".b-gradient-rect").attr("fill",(brow == "Safari")?("rgba(42, 48, 255, 0.1)"):("url(#"+$(this).attr("data-id")+"2)"));
    }).mouseup(function(){
        $(this).find(".b-gradient-rect").attr("fill",(brow == "Safari")?("rgba(42, 48, 255, 0.05)"):("url(#"+$(this).attr("data-id")+"1)"));
    }).hover(function(){
        $(this).find(".b-gradient-rect").attr("fill",(brow == "Safari")?("rgba(42, 48, 255, 0.05)"):("url(#"+$(this).attr("data-id")+"1)"));
    },function(){
        $(this).find(".b-gradient-rect").attr("fill","none");
        $(this).find(".b-gradient-text").attr("fill","url(#"+$(this).attr("data-id")+")");
    });
    $("body").on("dragleave",resetActive);

    function resetActive(){
        $(".b-gradient-rect").attr("fill","none");
        $(".b-gradient-butt").each(function(){
            $(this).find(".b-gradient-text").attr("fill","url(#"+$(this).attr("data-id")+")");
        });
    }
    
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);

});