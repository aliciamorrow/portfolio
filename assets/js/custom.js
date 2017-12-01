$(document).ready(function () {

    "use strict";

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Intro Height  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    function introHeight() {
        var wh = $(window).height();
        $('#intro').css({height: wh});
    }

    introHeight();
    $(window).bind('resize',function () {
        //Update slider height on resize
        introHeight();
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Navbar Toggle Transparency  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $(function () {
      $(document).scroll(function () {
        var $nav = $(".fixed-top");
        if($(this).scrollTop() > $nav.height()) {
          $nav.css("background-color", "#433e6b");
          $('.navbar-brand').css("opacity", "1");
        } else {
          $nav.css("background-color", "transparent");
          $('.navbar-brand').css("opacity", "0");
        }
      });
    });

    $(document).ready(function () {
      $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* contact form  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    //on the click of the submit button
    $("#submit").click(function(){
       //get the form values

      $( "#valid-contact" ).validate({
        rules: {
          email: {
            required: true,
            email: true
          }
        }
      });
       var validator = $( "#contact_form" ).validate();

       if($('#name').val() != '' && validator.element( "#email" ) && $('#message').val() != '') {
         var name = $('#name').val();
         var email = $('#email').val();
         var subject = $('#subject').val();
         var message = $('#message').val();

         //call your input.php script in the background, when it returns it will call the success function if the request was successful or the error one if there was an issue (like a 404, 500 or any other error status)

         $.ajax({
            url : "submit.php",
            type: "POST",
            data : {name : name, email : email, subject : subject, message : message},
            success: function(data, status, xhr)
            {
                //if success then just output the text to the status div then clear the form inputs to prepare for new data
                alert('Email Sent!');
                $('#name').val('');
                $('#email').val('');
                $('#subject').val('');
                $('#message').val('');
            },
            error: function (jqXHR, status, errorThrown)
            {
                alert('ERROR');
            }
        });
      } else {
        return;
      }
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* click switched with touch for mobile  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    $('.gallery-inner img').bind('touchstart', function() {
        $(this).addClass('.gallery-inner  .captionWrapper');
    });

    $('.gallery-inner  img').bind('touchend', function() {
        $(this).removeClass('.gallery-inner  .captionWrapper');
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Parallax init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(window).stellar({
        responsive: true,
        horizontalOffset: 0,
        horizontalScrolling:false
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Smooth Scroll */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $(document).ready(function(){
      $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();

          var target = this.hash;

          if(target === '#portfolio') {
            $('html, body').animate({
              scrollTop: $(target).offset().top - 100
            }, 800, function(){
              return window.history.pushState(null, null, target);
            });
          } else {
            $('html, body').animate({
              scrollTop: $(target).offset().top - 50
            }, 800, function(){
              return window.history.pushState(null, null, target);
            });
          }
        }
      });
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Rocket Animation */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(window).load(function() {
      $("body").removeClass("preloader");
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Active Link Scroll */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var sections = $('section')
      , nav = $('nav')
      , nav_height = nav.outerHeight(true);

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        if($(this).attr('id') === 'portfolio') {
          var top = $(this).offset().top - 50 - nav_height,
            bottom = top + $(this).outerHeight(true);
        } else {
          var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight(true);
        }

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    });



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Isotope */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var $container = $('.gallery').imagesLoaded( function() {
        $container.isotope({
            // options
        });
    });


    $('#filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    $container.isotope({
        filter: '*' // IF YOU WANT TO DISPLAY AT FIRST ONLY ONE FILTER, FOR EXAMPLE DESIGNS: SUBSTIUTE '*' WITH '.designs'
    });


    //    masonry 3 columns
    $( function() {
        var $container2 = $('.blogPostsWrapper');
        // initialize Masonry after all images have loaded
        $container2.imagesLoaded(function () {
            $container2.isotope({
                itemSelector: '.blogPost',
                masonry: {
                    columnWidth: '.grid-sizer-blog-3'
                }
            });
        });
    });


    //    masonry 2 columns
    $( function() {
        var $container3 = $('.blogPostsWrapper2');
        // initialize Masonry after all images have loaded
        $container3.imagesLoaded(function () {
            $container3.isotope({
                itemSelector: '.blogPost2',
                masonry: {
                    columnWidth: '.grid-sizer-blog-2'
                }
            });
        });
    });


    //    masonry 2 columns
    $( function() {
        var $container3 = $('.gallery-ecommerce');
        // initialize Masonry after all images have loaded
        $container3.imagesLoaded(function () {
            $container3.isotope({
                itemSelector: '.ShoppingRelated',
                masonry: {
                    columnWidth: '.grid-sizer-three-columns'
                }
            });
        });
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* overlay portfolio */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $("a.overlay-ajax").click(function(){
        var url = $(this).attr("href");
        $(".overlay-section").load(url + ' #transmitter');
        $('.overlay-close img').tooltip();
        return false;
    });




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* scrollreveal */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
    }

    else{
        window.scrollReveal = new scrollReveal();
    }





    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* timers */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#text-separator-timers').waypoint(function() {
        "use strict";
        // first timer
        $('.timer1').countTo({

            from: 0, // the number you want to start
            to: 8679, // the number you want to reach
            speed: 4000,
            refreshInterval: 100

        });

        // second timer
        $('.timer2').countTo({

            from: 0,// the number you want to start
            to: 340,// the number you want to reach
            speed: 2500,
            refreshInterval: 50

        });


        // third timer
        $('.timer3').countTo({

            from: 0,// the number you want to start
            to: 100,// the number you want to reach
            speed: 2000,
            refreshInterval: 10
        });


        // fourth timer
        $('.timer4').countTo({

            from: 0,// the number you want to start
            to: 3456,// the number you want to reach
            speed: 4000,
            refreshInterval: 10,


        });


    }, { offset: 500 });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* shortcodes */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
    });

    $('#myTabPills a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });


    $( ".SearchTrigger" ).on( "click", function() {
        $('.SearchInput').addClass('ActiveSearchInput');
        $('.SearchInput').css({'opacity':1, '-moz-transition':'width 0.5s ease-out','-webkit-transition':'width 0.5s ease-out','transition':'width 0.5s ease-out'});
        });

    $( ".SearchCloseTrigger" ).on( "click", function() {
        $('.SearchInput').css({'opacity':0, '-moz-transition':'width 0.5s ease-out','-webkit-transition':'width 0.5s ease-out','transition':'width 0.5s ease-out'})
        setTimeout( function() {
            $('.SearchInput').removeClass('ActiveSearchInput');
        }, 500);
    });


//
//    $('.collapse').collapse();



    $('.CubeWrapper').on({
        mouseenter: function () {
            $(this).removeClass( 'show-front' );
            $(this).addClass( 'show-bottom' );
        },
        mouseleave: function () {
            $(this).removeClass( 'show-bottom' );
            $(this).addClass( 'show-front' );
        }
    });








    (function ($, window, undefined) {
        // outside the scope of the jQuery plugin to
        // keep track of all dropdowns
        var $allDropdowns = $();

        // if instantlyCloseOthers is true, then it will instantly
        // shut other nav items when a new one is hovered over
        $.fn.dropdownHover = function (options) {
            // don't do anything if touch is supported
            // (plugin causes some issues on mobile)
            if('ontouchstart' in document) return this; // don't want to affect chaining

            // the element we really care about
            // is the dropdown-toggle's parent
            $allDropdowns = $allDropdowns.add(this.parent());

            return this.each(function () {
                var $this = $(this),
                    $parent = $this.parent(),
                    defaults = {
                        delay: 500,
                        hoverDelay: 0,
                        instantlyCloseOthers: true
                    },
                    data = {
                        delay: $(this).data('delay'),
                        hoverDelay: $(this).data('hover-delay'),
                        instantlyCloseOthers: $(this).data('close-others')
                    },
                    showEvent   = 'show.bs.dropdown',
                    hideEvent   = 'hide.bs.dropdown',
                // shownEvent  = 'shown.bs.dropdown',
                // hiddenEvent = 'hidden.bs.dropdown',
                    settings = $.extend(true, {}, defaults, options, data),
                    timeout, timeoutHover;

                $parent.hover(function (event) {
                    // so a neighbor can't open the dropdown
                    if(!$parent.hasClass('open') && !$this.is(event.target)) {
                        // stop this event, stop executing any code
                        // in this callback but continue to propagate
                        return true;
                    }

                    openDropdown(event);
                }, function () {
                    // clear timer for hover event
                    window.clearTimeout(timeoutHover)
                    timeout = window.setTimeout(function () {
                        $this.attr('aria-expanded', 'false');
                        $parent.removeClass('open');
                        $this.trigger(hideEvent);
                    }, settings.delay);
                });

                // this helps with button groups!
                $this.hover(function (event) {
                    // this helps prevent a double event from firing.
                    // see https://github.com/CWSpear/bootstrap-hover-dropdown/issues/55
                    if(!$parent.hasClass('open') && !$parent.is(event.target)) {
                        // stop this event, stop executing any code
                        // in this callback but continue to propagate
                        return true;
                    }

                    openDropdown(event);
                });

                // handle submenus
                $parent.find('.dropdown-submenu').each(function (){
                    var $this = $(this);
                    var subTimeout;
                    $this.hover(function () {
                        window.clearTimeout(subTimeout);
                        $this.children('.dropdown-menu').show();
                        // always close submenu siblings instantly
                        $this.siblings().children('.dropdown-menu').hide();
                    }, function () {
                        var $submenu = $this.children('.dropdown-menu');
                        subTimeout = window.setTimeout(function () {
                            $submenu.hide();
                        }, settings.delay);
                    });
                });

                function openDropdown(event) {
                    // clear dropdown timeout here so it doesnt close before it should
                    window.clearTimeout(timeout);
                    // restart hover timer
                    window.clearTimeout(timeoutHover);

                    // delay for hover event.
                    timeoutHover = window.setTimeout(function () {
                        $allDropdowns.find(':focus').blur();

                        if(settings.instantlyCloseOthers === true)
                            $allDropdowns.removeClass('open');

                        // clear timer for hover event
                        window.clearTimeout(timeoutHover);
                        $this.attr('aria-expanded', 'true');
                        $parent.addClass('open');
                        $this.trigger(showEvent);
                    }, settings.hoverDelay);
                }
            });
        };

        $(document).ready(function () {
            // apply dropdownHover to all elements with the data-hover="dropdown" attribute
            $('[data-hover="dropdown"]').dropdownHover();
        });
    })(jQuery, window);

});
