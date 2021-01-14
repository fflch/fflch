jQuery(document).ready(function(){
    if(jQuery(window).scrollTop() < 767) { 
      jQuery(".dropdown-menu > li > svg, .main-navigation-dropdown svg").bind("click", toggleSubmenu);
    }
});
jQuery(window).resize(function(){
    if(jQuery(window).scrollTop() < 767) { 
      jQuery(".dropdown-menu > li > svg, .main-navigation-dropdown svg").unbind("click", toggleSubmenu);
      jQuery(".dropdown-menu > li > svg, .main-navigation-dropdown svg").bind("click", toggleSubmenu);
    }
});
  
function toggleSubmenu(){//hablita o click nos submenus do main-navigation
    var li = jQuery(this).parent();
    jQuery(li).find('.dropdown-menu').toggleClass('toggle');
}

$.fn.dropdown = (function() {
    var $bsDropdown = $.fn.dropdown;
    return function(config) {
        if (typeof config === 'string' && config === 'toggle') { // dropdown toggle trigged
            $('.has-child-dropdown-show').removeClass('has-child-dropdown-show');
            $(this).closest('.dropdown').parents('.dropdown').addClass('has-child-dropdown-show');
        }
        var ret = $bsDropdown.call($(this), config);
        $(this).off('click.bs.dropdown'); // Turn off dropdown.js click event, it will call 'this.toggle()' internal
        return ret;
    }
})();

$(function() {
    $('.dropdown [data-toggle="dropdown"]').on('click', function(e) {
        $(this).dropdown('toggle');
        e.stopPropagation();
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        if ($(this).is('.has-child-dropdown-show')) {
            $(this).removeClass('has-child-dropdown-show');
            e.preventDefault();
        }
        e.stopPropagation();
    });
});


