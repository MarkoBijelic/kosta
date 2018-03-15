jQuery(function ($) {
    var $document = jQuery(document),
            $element = jQuery('.top-menu'),
            className = 'scrolled';

    $document.scroll(function () {
        $element.toggleClass(className, $document.scrollTop() >= 50);
    });
    $document.ready(function () {
        $element.toggleClass(className, $document.scrollTop() >= 50);
    });
});

jQuery(function ($) {
    jQuery('.input-holder').click(function () {
        jQuery(this).find('label').addClass('stayTop');
        jQuery(this).find('input').focus();
        jQuery(this).find('textarea').focus();
    });
    jQuery('.input-holder').focusout(function () {
        if (jQuery(this).find('input').val() == '') {
            jQuery(this).find('label').removeClass('stayTop');
        }
        if (jQuery(this).find('textarea').val() == '') {
            jQuery(this).find('label').removeClass('stayTop');
        }
    });
    jQuery('input').focusin(function () {
        jQuery(this).prev('label').addClass('stayTop');
    });
    jQuery('textarea').focusin(function () {
        jQuery(this).prev('label').addClass('stayTop');
    });


});


