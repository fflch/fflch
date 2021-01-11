
jQuery(document).ready(function(){
  if(jQuery(window).scrollTop() < 767) { //hablita o click nos submenus do main-navigation
    jQuery(".dropdown-menu > li > svg, .main-navigation-dropdown svg").click(function(){
      var li = jQuery(this).parent();
      jQuery(li).find('.dropdown-menu').toggleClass('toggle');
    });
  }
});

/** Deixa o scroll mais suave quando o botão de top (inferior direita) é clicado */
jQuery('.btn-btt').smoothScroll({speed: 1000});
/** Esconde o botão top no início da página, e o esconde quando o scroll desce mais de 200px */
jQuery(window).scroll(function() {
  if(jQuery(window).scrollTop() > 200) {
      jQuery('.btn-btt').show();
  }
  else {
      jQuery('.btn-btt').hide();
  }
}).resize(function(){
  if(jQuery(window).scrollTop() < 767) { //hablita o click nos submenus do main-navigation
    jQuery(".dropdown-menu > li > svg, .main-navigation-dropdown svg").click(function(){
      var li = jQuery(this).parent();
      jQuery(li).find('.dropdown-menu').toggleClass('toggle');
    });
  }
  else
  if(jQuery(window).scrollTop() > 200) {
      jQuery('.btn-btt').show();
    }
    else {
      jQuery('.btn-btt').hide();
    }
});
