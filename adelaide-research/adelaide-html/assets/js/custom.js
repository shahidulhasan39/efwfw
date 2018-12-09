$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        }
    }
});

//Match height 
 function equal_height() {
            // Equal Card Height, Text Height and Title Height
            jQuery('.partner').jQueryEqualHeight('.card .card-body .card-title');
            jQuery('.partner').jQueryEqualHeight('.card .card-body .card-text');
            jQuery('.partner').jQueryEqualHeight('.card');
        }
        // mess height jquery diclear
         jQuery(window).on('load', function(event) {
            equal_height();
        });
        jQuery(window).resize(function(event) {
            equal_height();
        });

