$(window).on("load", function() {
    "use strict";

    

    // HEADER SEARCH 

    $(".search-btn").on("click", function() {
      $(".header-search").addClass("active");
      return false;
    });
    $(".search-close-btn").on("click", function() {
      $(".header-search").removeClass("active");
    })

    // STICKY HEADER 

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1) {
            $("header").addClass("sticky animated slideInDown");
        } else {
            $("header").removeClass("sticky animated slideInDown");
        }
    });

    // CONTACT FORM VALIDATION  

    if($('#contact-form').length){
      $('#submit').on("click", function(){
        
              var o = new Object();
              var form = '#contact-form';
        
              var name = $('#contact-form .name').val();
              var email = $('#contact-form .email').val();
              // var phone = $('#contact-form .phone').val();
        
        if(name == '' || email == '')
        {
          $('#contact-form .response').html('<div class="failed">Please fill the required fields.</div>');
          return false;
        }
              
        $.ajax({
            url:"sendemail.php",
            method:"POST",
            data: $(form).serialize(),
            beforeSend:function(){
                $('#contact-form .response').html('<div class="text-info"><img src="images/preloader.gif"> Loading...</div>');
            },
            success:function(data){
                $('form').trigger("reset");
                $('#contact-form .response').fadeIn().html(data);
                setTimeout(function(){
                    $('#contact-form .response').fadeOut("slow");
                }, 5000);
            },
            error:function(){
                $('#contact-form .response').fadeIn().html(data);
            }
        });
    });
    }

    //  RESPONSIVE MOBILE MENU 

  	$("header nav ul ul").parent().addClass("active");

  	$(".menu-btn").on("click", function(){
      $(".responsive-mobile-menu").toggleClass("active");
      return false;
    });

    $(".close-menu, html").on("click", function(){
      $(".responsive-mobile-menu").removeClass("active");
    });

    $(".responsive-mobile-menu ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-mobile-menu ul li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    $(".close-menu, .responsive-mobile-menu").on("click", function(e) {
      e.stopPropagation();
    });


    // PAGE LOADER 

    $(".page-loading").fadeOut();

    // SCROLL TO TOP BUTTON

	  $('.scrollTop').on("click", function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

	// handle links with @href started with '#' only
	  $(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	  });


    // TOGGLE BUTTONS

    $(".toggle").each(function(){
        $(this).find('.content').hide();
        $(this).find('h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
        $('h2', this).on("click touchstart", function() {
            if ($(this).next().is(':hidden')) {
                $(this).parent().parent().parent().find("h2").removeClass('active').next().slideUp(500).removeClass('animated fadeInUp').parent().removeClass("activate");
                $(this).toggleClass('active').next().slideDown(500).addClass('animated fadeInUp').parent().toggleClass("activate");
            }
        });
    });

    // ANIMATION ON DEFAULT THEME BUTTTON

    $('.btn-default').on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    }).on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });

    
    
});


