

$(document).ready(function () {
    

/*Sticky_Header */
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".main-menu").addClass("sticky");
        } else {
            $(".main-menu").removeClass("sticky");
        }
    }); 
   
    /*Username_Dropdown */
    $('.user-name-text').click(function(){
        $('.name-dropdown').toggleClass('active');
      });

      /*Notification_dropdown */
      $('.notification').click(function(){
        $('.notify-box').toggleClass('active');
      });



    /*Responsive_header_toggle */
        $(".menu-toggle").click(function () {
            $("#navbarSupportedContent").slideToggle();
        });

        /*main-site-sidebar_collapse */
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
               $('#sidebarCollapse').find('#collapseIcon').toggleClass('fa-arrow-left').toggleClass('fa-arrow-right');
      
            });
        });

/*inner_page_dropdown */
        $(".s-title").click(function (j) {
            var dropDown = $(this).closest(".s-card").find(".s-panel");
            $(this).closest(".s-drop").find(".s-panel").not(dropDown).slideUp();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").removeClass("selected");
            } else {
                $(this).closest(".s-drop").find(".s-title.active").removeClass("active").removeClass("selected");
                $(this).addClass("active selected");
            }
            dropDown.stop(false, true).slideToggle();
            j.preventDefault();
        });

        /*datepicker */
        $( function() {
            $( "#datepicker" ).datepicker();
          } );


          /*file-upload */
        
       
        $('.map-container')
        .click(function () {
            $(this).find('iframe').addClass('clicked')
        })
        .mouseleave(function () {
            $(this).find('iframe').removeClass('clicked')
        });
});



  