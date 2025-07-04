$(window).load( function() {
 

    function smokeeffect () { 
        var modalTrigger = $('.nav-icon'),
            transitionLayer = $('.cd-transition-layer'),
            transitionBackground = transitionLayer.children(),
            modalWindow = $('.full-menu');
    
        var frameProportion = 1.78, //png frame aspect ratio
            frames = 25, //number of png frames
            resize = false;
    
        //set transitionBackground dimentions
        setLayerDimensions();
        $(window).on('resize', function(){
            if( !resize ) {
                resize = true;
                (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
            }
        });
    
        //open modal window
        modalTrigger.on('click', function(event){   
            event.preventDefault();
            transitionLayer.addClass('visible opening');
            var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
            setTimeout(function(){
                modalWindow.addClass('visible');
            }, delay);
        });
    
        //close modal window
        modalWindow.on('click', '.close-id', function(event){
            event.preventDefault();
            transitionLayer.addClass('closing');
            modalWindow.removeClass('visible');
            transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
                transitionLayer.removeClass('closing opening visible');
                transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
        });
    
        function setLayerDimensions() {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                layerHeight, layerWidth;
    
            if( windowWidth/windowHeight > frameProportion ) {
                layerWidth = windowWidth;
                layerHeight = layerWidth/frameProportion;
            } else {
                layerHeight = windowHeight*1.2;
                layerWidth = layerHeight*frameProportion;
            }
    
            transitionBackground.css({
                'width': layerWidth*frames+'px',
                'height': layerHeight+'px',
            });
    
            resize = false;
        }
    
    }
    smokeeffect()
    
     
        
    /*--------------------------------------------------
     Hero Section Height
    ---------------------------------------------------*/	
         function homeh() {
            var hometext = $('.main')
    
            hometext.css({
                "height": $(window).height() + "px"
            });
        }
        homeh();
        $(window).resize(homeh);
    
    
        $( ".page-menu li:not(.social) a, .portfolio_filter ul li a").append( "<span></span>" );
    
        $('.nav-icon').on("click", function(){
                $(this).toggleClass('close-id');
        });
     
     
         
    });