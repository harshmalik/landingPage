"use strict";var $portfolio;var $ParallaxPortfolio;var $masonry_block;var $portfolio_selectors;var $Parallaxportfolio_selectors;var $blog;var isMobile=false;var isiPhoneiPad=false;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile=true;}
if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){isiPhoneiPad=true;}
(function($){$(document).ready(function(){HamburderMenuCustomScroll();$(document).on("scroll",OnePageActiveOnScroll);$('input, textarea').placeholder({customClass:'my-placeholder'});$('.inner-top').smoothScroll({speed:900,offset:-68});SetResizeHeaderMenu();IpadMobileHover();if(!isMobile){$(".top-cart a.shopping-cart, .cart-content").hover(function(){$(".cart-content").css('opacity','1');$(".cart-content").css('visibility','visible');},function(){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden');});$(document).on({mouseenter:function(){$(".cart-content").css('opacity','1');$(".cart-content").css('visibility','visible');},mouseleave:function(){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden');}},".top-cart a.shopping-cart, .cart-content");}
$(".top-cart a.shopping-cart").click(function(){if(!isMobile){var carturl=$(this).attr('href');window.location=carturl;}
if($('.cart-content').css('visibility')=='visible'){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden');}
else{$(".cart-content").css('opacity','1');$(".cart-content").css('visibility','visible');}});if(!$('nav.navigation-menu, nav.navbar').hasClass('no-shrink-nav')){if($(window).scrollTop()>10){$('nav.navigation-menu, nav.navbar').addClass('shrink-nav');}else{$('nav.navigation-menu, nav.navbar').removeClass('shrink-nav');}}
if(Modernizr.touch){$(".close-overlay").removeClass("hidden");$(".porfilio-item").click(function(e){if(!$(this).hasClass("hover")){$(this).addClass("hover");}});$(".close-overlay").click(function(e){e.preventDefault();e.stopPropagation();if($(this).closest(".porfilio-item").hasClass("hover")){$(this).closest(".porfilio-item").removeClass("hover");}});}else{$(".porfilio-item").mouseenter(function(){$(this).addClass("hover");}).mouseleave(function(){$(this).removeClass("hover");});}
$portfolio=$('.masonry-items');var portfolio_selector=$portfolio.parents('section').find('.portfolio-filter li.nav.active a').attr('data-filter');$portfolio.imagesLoaded(function(){$portfolio.isotope({itemSelector:'li',layoutMode:'masonry',filter:portfolio_selector});});$masonry_block=$('.masonry-block-items');$masonry_block.imagesLoaded(function(){$masonry_block.isotope({itemSelector:'li',layoutMode:'masonry'});});$portfolio_selectors=$('.portfolio-filter > li > a');$portfolio_selectors.on('click',function(){$portfolio_selectors.parent().removeClass('active');$(this).parent().addClass('active');var selector=$(this).attr('data-filter');$portfolio.isotope({filter:selector});return false;});$blog=$('.blog-masonry');$blog.imagesLoaded(function(){$blog.isotope({itemSelector:'.blog-listing',layoutMode:'masonry'});});$ParallaxPortfolio=$('.parallax-masonry-items');var parallax_portfolio_selector=$ParallaxPortfolio.parents('section').find('.portfolio-filter li.nav.active a').attr('data-filter');$ParallaxPortfolio.imagesLoaded(function(){$ParallaxPortfolio.isotope({itemSelector:'.parallax-portfolio-filter',layoutMode:'masonry',filter:parallax_portfolio_selector});});$Parallaxportfolio_selectors=$('.portfolio-filter > li > a');$Parallaxportfolio_selectors.on('click',function(){$Parallaxportfolio_selectors.parent().removeClass('active');$(this).parent().addClass('active');var selector=$(this).attr('data-filter');$ParallaxPortfolio.isotope({filter:selector});return false;});$(window).resize(function(){setTimeout(function(){$portfolio.imagesLoaded(function(){$portfolio.isotope('layout');});$ParallaxPortfolio.imagesLoaded(function(){$ParallaxPortfolio.isotope('layout');});$blog.imagesLoaded(function(){$blog.isotope('layout');});$masonry_block.imagesLoaded(function(){$masonry_block.isotope('layout');});},500);});SetParallax();$(".blog-gallery").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]});$("#owl-demo-small").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]});$(".owl-pagination > .owl-page").click(function(e){if($(e.target).is('.mfp-close'))
return;return false;});$(".owl-buttons > .owl-prev").click(function(e){if($(e.target).is('.mfp-close'))
return;return false;});$(".owl-buttons > .owl-next").click(function(e){if($(e.target).is('.mfp-close'))
return;return false;});var sync1=$(".hcode-single-big-product-thumbnail-carousel");var sync2=$(".hcode-single-product-thumbnail-carousel");sync1.owlCarousel({singleItem:true,slideSpeed:1000,navigation:true,pagination:false,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],afterAction:syncPosition,responsiveRefreshRate:200,});sync2.owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsTablet:[768,3],itemsMobile:[479,2],pagination:false,navigation:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsiveRefreshRate:100,afterInit:function(el){el.find(".owl-item").eq(0).addClass("active");}});function syncPosition(el){var current=this.currentItem;$(".hcode-single-product-thumbnail-carousel").find(".owl-item").removeClass("active").eq(current).addClass("active");if($(".hcode-single-product-thumbnail-carousel").data("owlCarousel")!==undefined){center(current)}}
$(".hcode-single-product-thumbnail-carousel").on("click",".owl-item",function(e){e.preventDefault();var number=$(this).data("owlItem");sync1.trigger("owl.goTo",number);});function center(number){var sync2visible=sync2.data("owlCarousel").owl.visibleItems;var num=number;var found=false;for(var i in sync2visible){if(num===sync2visible[i]){var found=true;}}
if(found===false){if(num>sync2visible[sync2visible.length-1]){sync2.trigger("owl.goTo",num-sync2visible.length+2)}else{if(num-1===-1){num=0;}
sync2.trigger("owl.goTo",num);}}else if(num===sync2visible[sync2visible.length-1]){sync2.trigger("owl.goTo",sync2visible[1])}else if(num===sync2visible[0]){sync2.trigger("owl.goTo",num-1)}}
if($('section').hasClass('intro-page')){$('section').removeClass('intro-page');$('body').addClass('intro-page');}
var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:90,mobile:false,live:true});wow.init();$('.collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-minus"></i>');});$('.collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-plus"></i>');});$('.nav.navbar-nav a.inner-link').click(function(){$(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');$(this).addClass('active');if($('.navbar-header .navbar-toggle').is(':visible'))
$(this).parents('.navbar-collapse').collapse('hide');});$('.accordion-style2 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>');});$('.accordion-style2 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-down"></i>');});$('.accordion-style3 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>');});$('.accordion-style3 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-down"></i>');});$('toggles .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-minus"></i>');});$('toggles .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-plus"></i>');});$('.toggles-style2 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>');});$('.toggles-style2 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-down"></i>');});try{$(".fit-videos").fitVids();}
catch(err){}
$('#map_canvas1').addClass('scrolloff');$('#canvas1').on('click',function(){$('#map_canvas1').removeClass('scrolloff');});$("#map_canvas1").mouseleave(function(){$('#map_canvas1').addClass('scrolloff');});$("input.search-input").bind("keypress",function(event){if(event.which==13&&!isMobile){$("button.search-button").click();event.preventDefault();}});$("input.search-input").bind("keyup",function(event){if($(this).val()==null||$(this).val()==""){$(this).css({"border":"none","border-bottom":"2px solid red"});}
else{$(this).css({"border":"none","border-bottom":"2px solid #000"});}});function validationSearchForm(){var error=true;$('#search-header input[type=text]').each(function(index){if(index==0){if($(this).val()==null||$(this).val()==""){$("#search-header").find("input:eq("+index+")").css({"border":"none","border-bottom":"2px solid red"});error=false;}
else{$("#search-header").find("input:eq("+index+")").css({"border":"none","border-bottom":"2px solid #000"});}}});return error;}
$("form.search-form, form.search-form-result").submit(function(event){var error=validationSearchForm();if(error){var action=$(this).attr('action');action=action+'?'+$(this).serialize();window.location=action;}
event.preventDefault();});$('.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart').click(function(e){e.preventDefault();});$('body').on('touchstart click',function(e){if($(window).width()<992){if(!$('.navbar-collapse').has(e.target).is('.navbar-collapse')&&$('.navbar-collapse').hasClass('in')&&!$(e.target).hasClass('navbar-toggle')){$('.navbar-collapse').collapse('hide');}}
else{if(!$('.navbar-collapse').has(e.target).is('.navbar-collapse')&&$('.navbar-collapse ul').hasClass('in')){$('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');$('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');$('.navbar-collapse a.dropdown-toggle').removeClass('active');}}});$('.navbar-collapse a.dropdown-toggle').on('touchstart',function(e){$('.navbar-collapse a.dropdown-toggle').not(this).removeClass('active');if($(this).hasClass('active'))
$(this).removeClass('active');else
$(this).addClass('active');});$("button.navbar-toggle").click(function(){if(isMobile){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden');}});$("a.dropdown-toggle").click(function(){if(isMobile){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden');}});var $elem=$('#content');$('#scroll_to_top').fadeIn('slow');$('#nav_down').fadeIn('slow');$(window).bind('scrollstart',function(){$('#scroll_to_top,#nav_down').stop().animate({'opacity':'0.2'});});$(window).bind('scrollstop',function(){$('#scroll_to_top,#nav_down').stop().animate({'opacity':'1'});});$('#nav_down').click(function(e){$('html, body').animate({scrollTop:$elem.height()},800);});$('#scroll_to_top').click(function(e){$('html, body').animate({scrollTop:'0px'},800);});$(document).on('click','.pull-menu a.inner-link',function(e){if(!($(this).parents('.hamburger-menu1').length>0)||isMobile){$('#close-button').click();}});if($('div').hasClass('feature_nav')){$(".feature_nav .next").click(function(){$(this).parent().parent().find('.owl-carousel').trigger('owl.next');});$(".feature_nav .prev").click(function(){$(this).parent().parent().find('.owl-carousel').trigger('owl.prev');});}});$(document).ready(function(){$('.counter-number').appear();$(document.body).on('appear','.counter-number',function(e){var element=$(this);if(!$(this).hasClass('appear')){animatecounters(element);$(this).addClass('appear');}});$('.chart').appear();$(document.body).on('appear','.chart',function(e){var element=$(this);if(!$(this).hasClass('appear')){animatecharts(element);$(this).addClass('appear');}});});function animatecounters(element){var getCounterNumber=$(element).attr('data-to');$({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:getCounterNumber},{duration:2000,easing:"swing",step:function(currentLeft){var roundNumber=Math.ceil(currentLeft);$(element).text(roundNumber);}});}
function animatecharts(element){element.data('easyPieChart').update(0);element.data('easyPieChart').update(element.attr("data-percent"));}
$(window).scroll(function(){if(!$('nav.navigation-menu, nav.navbar').hasClass('no-shrink-nav')){if($(window).scrollTop()>10){$('nav.navigation-menu, nav.navbar').addClass('shrink-nav');}else{$('nav.navigation-menu, nav.navbar').removeClass('shrink-nav');}}});function SetResizeHeaderMenu(){var width=$('nav.navbar').children('div.container').width();$("ul.mega-menu-full").each(function(){$(this).css('width',width+'px');});}
$('.parallax-fix').each(function(){if($(this).children('.parallax-background-img').length){var imgSrc=$(this).children('.parallax-background-img').attr('src');$(this).css('background','url("'+imgSrc+'")');$(this).children('.parallax-background-img').remove();$(this).css('background-position','50% 0%');}});var IsParallaxGenerated=false;function SetParallax(){if(isiPhoneiPad)
return false;if($(window).width()>1030&&!IsParallaxGenerated){$('.parallax1').parallax("50%",0.1);$('.parallax2').parallax("50%",0.2);$('.parallax3').parallax("50%",0.3);$('.parallax4').parallax("50%",0.4);$('.parallax5').parallax("50%",0.5);$('.parallax6').parallax("50%",0.6);$('.parallax7').parallax("50%",0.7);$('.parallax8').parallax("50%",0.8);$('.parallax9').parallax("50%",0.05);$('.parallax10').parallax("50%",0.02);$('.parallax11').parallax("50%",0.01);$('.parallax12').parallax("50%",0.099);IsParallaxGenerated=true;}}
$('.mobile-toggle').click(function(){$('nav').toggleClass('open-nav');});$('.dropdown-arrow').click(function(){if($('.mobile-toggle').is(":visible")){if($(this).children('.dropdown').hasClass('open-nav')){$(this).children('.dropdown').removeClass('open-nav');}else{$('.dropdown').removeClass('open-nav');$(this).children('.dropdown').addClass('open-nav');}}});$("form.wpcf7-form input").focus(function(){if($(this).hasClass("wpcf7-not-valid")){$(this).removeClass("wpcf7-not-valid");$(this).parent().find(".wpcf7-not-valid-tip").remove();$(this).parents().find(".wpcf7-validation-errors").css("display","none");}});$('.dropdown-fullwidth').each(function(){$(this).css('width',$('.row').width());var subNavOffset=-($('nav .row').innerWidth()-$('.menu').innerWidth()-15);$(this).css('left',subNavOffset);});var scrollAnimationTime=1200,scrollAnimation='easeInOutExpo';$('a.scrollto').bind('click.smoothscroll',function(event){event.preventDefault();var target=this.hash;$('html, body').stop().animate({'scrollTop':$(target).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=target;});});$(document).ready(function(){$('.inner-link').smoothScroll({speed:900,offset:0});});$(document).ready(function(){$('.scrollToDownSection .inner-link, .scrollToDownSection form').click(function(event){event.stopPropagation();});$('section.scrollToDownSection').click(function(){var section_id=$($(this).attr('data-section-id'));$('html, body').animate({scrollTop:section_id.offset().top},800);});});$('.woo-inner-link').click(function(){$(this).attr("data-toggle","tab");$("html,body").animate({scrollTop:$(".product-deails-tab").offset().top-80},1000);$(".nav-tabs-light li").removeClass("active");$(".nav-tabs-light li.description_tab ").addClass("active");});function SetResizeContent(){var minheight=$(window).height();$(".full-screen").css('min-height',minheight);var minwidth=$(window).width();$(".full-screen-width").css('min-width',minwidth);$('.menu-first-level').each(function(){$(this).find('ul.collapse').removeClass('in');var menu_link=$(this).children('a');var dataurl=menu_link.attr('data-redirect-url');var datadefaulturl=menu_link.attr('data-default-url');if(minwidth>=992){$(menu_link).removeAttr('data-toggle');$(this).children('a').attr('href',dataurl);}else{$(menu_link).attr('data-toggle','collapse');$(this).children('a').attr('href',datadefaulturl);}});}
SetResizeContent();$(window).resize(function(){HamburderMenuCustomScroll();$('.dropdown-fullwidth').each(function(){$(this).css('width',$('.row').width());var subNavOffset=-($('nav .row').innerWidth()-$('.menu').innerWidth()-15);$(this).css('left',subNavOffset);});SetResizeContent();setTimeout(function(){SetResizeHeaderMenu();},200);if($(window).width()>=992&&$('.navbar-collapse').hasClass('in')){$('.navbar-collapse').removeClass('in');$('.navbar-collapse ul.dropdown-menu').each(function(){if($(this).hasClass('in')){$(this).removeClass('in');}});$('ul.navbar-nav > li.dropdown > a.dropdown-toggle').addClass('collapsed');$('.logo').focus();$('.navbar-collapse a.dropdown-toggle').removeClass('active');}
setTimeout(function(){SetParallax();},1000);});$(document).ready(function(){$('.counter-hidden').each(function(){if($(this).hasClass('counter-underconstruction-date')){var $counter_date=$('.counter-underconstruction-date').html();var $CounterDay,$CounterHours,$CounterMinutes,$CounterSeconds='';var CounterDayattr=$(this).parent().find('#counter-underconstruction').attr('data-days-text');if(typeof CounterDayattr!==typeof undefined&&CounterDayattr!==false){var $CounterDay='<span>'+CounterDayattr+'</span>';}
var CounterHoursattr=$(this).parent().find('#counter-underconstruction').attr('data-hours-text');if(typeof CounterHoursattr!==typeof undefined&&CounterHoursattr!==false){var $CounterHours='<span>'+CounterHoursattr+'</span>';}
var CounterMinutesattr=$(this).parent().find('#counter-underconstruction').attr('data-minutes-text');if(typeof CounterMinutesattr!==typeof undefined&&CounterMinutesattr!==false){var $CounterMinutes='<span>'+CounterMinutesattr+'</span>';}
var CounterSecondsattr=$(this).parent().find('#counter-underconstruction').attr('data-seconds-text');if(typeof CounterSecondsattr!==typeof undefined&&CounterSecondsattr!==false){var $CounterSeconds='<span>'+CounterSecondsattr+'</span>';}
$(this).parent().find('#counter-underconstruction').countdown($counter_date+' 00:00:00').on('update.countdown',function(event){var $this=$(this).parent().find('#counter-underconstruction').html(event.strftime(''+'<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div>'+$CounterDay+'</div>'+'<div class="counter-box"><div class="number">%H</div>'+$CounterHours+'</div>'+'<div class="counter-box"><div class="number">%M</div>'+$CounterMinutes+'</div>'+'<div class="counter-box last"><div class="number">%S</div>'+$CounterSeconds+'</div></div>'))});}});$('.counter-hidden').each(function(){if($(this).hasClass('hcode-time-counter-date')){var $counter_date=$(this).html();var $CounterDay,$CounterHours,$CounterMinutes,$CounterSeconds='';var CounterDayattr=$(this).parent().find('#hcode-time-counter').attr('data-days-text');if(typeof CounterDayattr!==typeof undefined&&CounterDayattr!==false){var $CounterDay='<span>'+CounterDayattr+'</span>';}
var CounterHoursattr=$(this).parent().find('#hcode-time-counter').attr('data-hours-text');if(typeof CounterHoursattr!==typeof undefined&&CounterHoursattr!==false){var $CounterHours='<span>'+CounterHoursattr+'</span>';}
var CounterMinutesattr=$(this).parent().find('#hcode-time-counter').attr('data-minutes-text');if(typeof CounterMinutesattr!==typeof undefined&&CounterMinutesattr!==false){var $CounterMinutes='<span>'+CounterMinutesattr+'</span>';}
var CounterSecondsattr=$(this).parent().find('#hcode-time-counter').attr('data-seconds-text');if(typeof CounterSecondsattr!==typeof undefined&&CounterSecondsattr!==false){var $CounterSeconds='<span>'+CounterSecondsattr+'</span>';}
$(this).parent().find('#hcode-time-counter').countdown($counter_date+' 00:00:00').on('update.countdown',function(event){var $this=$(this).parent().find('#hcode-time-counter').html(event.strftime(''+'<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div>'+$CounterDay+'</div>'+'<div class="counter-box"><div class="number">%H</div>'+$CounterHours+'</div>'+'<div class="counter-box"><div class="number">%M</div>'+$CounterMinutes+'</div>'+'<div class="counter-box last"><div class="number">%S</div>'+$CounterSeconds+'</div></div>'))});}});});$(window).scroll(function(){if($(this).scrollTop()>100){$('.scrollToTop').fadeIn();}else{$('.scrollToTop').fadeOut();}});$('.scrollToTop').click(function(){$('html, body').animate({scrollTop:0},1000);return false;});$('nav ul.panel-group li.dropdown a.dropdown-toggle').click(function(){if($(this).parent('li').find('ul.dropdown-menu').length>0){$(this).parents('ul').find('li.dropdown-toggle').not($(this).parent('li')).removeClass('open');if($(this).parent('li').hasClass('open')){$(this).parent('li').removeClass('open');}
else{$(this).parent('li').addClass('open');}}});$('.hamburger-menu2 a.megamenu-right-icon, .hamburger-menu3 a.megamenu-right-icon').click(function(){if($(this).parents('li').find('ul.sub-menu').length>0){if($(this).hasClass('open')){$(this).removeClass('open');$(this).next().slideUp();}
else{$(this).addClass('open');$(this).next().slideDown();}}
return false;});$(".carousel .carousel-indicators > li:first-child").addClass("active");$(".carousel .carousel-inner > div:first-child").addClass("active");$('span.optionsradios input[value=Disabled]').attr('disabled','disabled');$('span.optionscheckbox input[value=Disabled]').attr('disabled','disabled');$('.submit_newsletter').click(function(){var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;var current=$(this);var address=$(this).closest('form').find('.xyz_em_email').val();if(reg.test(address)==false){current.closest('form').find('.xyz_em_email').addClass('newsletter-error');return false;}else{return true;}});$('.xyz_em_email').on('focus',function(){$(this).removeClass('newsletter-error');});$('.hcode-product-grid-list-wrapper > a').click(function(){var set_product_view=$(this);var product_type=set_product_view.parents().find('.products');if(set_product_view.hasClass('hcode-list-view')){product_type.addClass('product-list-view');product_type.removeClass('product-grid-view');}
if(set_product_view.hasClass('hcode-grid-view')){product_type.addClass('product-grid-view');product_type.removeClass('product-list-view');}
set_product_view.parent().find('.active').removeClass('active');set_product_view.addClass('active');});$(document).ready(function(){$('input.qty:not(.product-quantity input.qty)').each(function(){var min=parseFloat($(this).attr('min'));if(min&&min>0&&parseFloat($(this).val())<min){$(this).val(min);}});$(document).on('click','.plus, .minus',function(){$('div.woocommerce form input[name="update_cart"]').prop('disabled',false);var $qty=$(this).closest('.quantity').find('.qty'),currentVal=parseFloat($qty.val()),max=parseFloat($qty.attr('max')),min=parseFloat($qty.attr('min')),step=$qty.attr('step');if(!currentVal||currentVal===''||currentVal==='NaN')currentVal=0;if(max===''||max==='NaN')max='';if(min===''||min==='NaN')min=0;if(step==='any'||step===''||step===undefined||parseFloat(step)==='NaN')step=1;if($(this).is('.plus')){if(max&&(max==currentVal||currentVal>max)){$qty.val(max);}else{$qty.val(currentVal+parseFloat(step));}}else{if(min&&(min==currentVal||currentVal<min)){$qty.val(min);}else if(currentVal>0){$qty.val(currentVal-parseFloat(step));}}
$qty.trigger('change');});});$(document).ready(function(){$(document).on('click','.checkout-alert-remove',function(){var remove_parent=$(this).parent().parent();if(remove_parent.hasClass('alert-remove')){remove_parent.remove();}});});$(document).ready(function(){$(document).on('click','.sl-button',function(){var button=$(this);var post_id=button.attr('data-post-id');var security=button.attr('data-nonce');var iscomment=button.attr('data-iscomment');var allbuttons;if(iscomment==='1'){allbuttons=$('.sl-comment-button-'+post_id);}else{allbuttons=$('.sl-button-'+post_id);}
var loader=allbuttons.next('#sl-loader');if(post_id!==''){$.ajax({type:'POST',url:simpleLikes.ajaxurl,data:{action:'process_simple_like',post_id:post_id,nonce:security,is_comment:iscomment},beforeSend:function(){},success:function(response){var icon=response.icon;var count=response.count;allbuttons.html(icon+count);if(response.status==='unliked'){var like_text=simpleLikes.like;allbuttons.prop('title',like_text);allbuttons.removeClass('liked');}else{var unlike_text=simpleLikes.unlike;allbuttons.prop('title',unlike_text);allbuttons.addClass('liked');}
loader.empty();}});}
return false;});});$(document).ready(function(){$('.menu-first-level a.dropdown-toggle:first-of-type').bind('click',function(event){var minwidth=$(window).width();if(minwidth>=992){var geturl=$(this).attr('href');if((typeof geturl)!=='undefined'){if(event.ctrlKey||event.metaKey){if(geturl!='#'&&geturl!=''){window.open(geturl,'_blank');}}else{if(geturl!='#'&&geturl!=''){if($(this).attr('target')=='_blank'){window.open(geturl,'_blank');}else{window.location.href=geturl;}}}}}else{var geturl=$(this).attr('data-redirect-url');if((typeof geturl)!=='undefined'){if(event.ctrlKey||event.metaKey){if(geturl!='#'&&geturl!=''){window.open(geturl,'_blank');}}else{if(geturl!='#'&&geturl!=''){if($(this).attr('target')=='_blank'){window.open(geturl,'_blank');}else{window.location.href=geturl;}}}}}});});$(document).ready(function(){if($("li.menu-item-language").find("ul").first().length!=0){$("li.menu-item-language a:first").append("<i class='fa fa-angle-down'></i>");}});$(document).ready(function(){$(".comment-button").on("click",function(){var fields;fields="";if($(this).parent().parent().find('#author').length==1){if($("#author").val().length==0||$("#author").val().value=='')
{fields='1';$("#author").addClass("inputerror");}}
if($(this).parent().parent().find('#comment').length==1){if($("#comment").val().length==0||$("#comment").val().value=='')
{fields='1';$("#comment").addClass("inputerror");}}
if($(this).parent().parent().find('#email').length==1){if($("#email").val().length==0||$("#email").val().length=='')
{fields='1';$("#email").addClass("inputerror");}
else
{var re=new RegExp();re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;var sinput;sinput="";sinput=$("#email").val();if(!re.test(sinput))
{fields='1';$("#email").addClass("inputerror");}}}
if(fields!="")
{return false;}
else
{return true;}});});function inputfocus(id){$('#'+id).removeClass('inputerror');}
var IpadMobileHover=function(){if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))){$('.icon-box > i').on('touchstart',function(){$(this).trigger('hover');}).on('touchend',function(){$(this).trigger('hover');});}};$(document).ready(function(){$('.nav-tabs a[data-toggle="tab"]').each(function(){var $this=$(this);$this.on('shown.bs.tab',function(){if($('.masonry-items').length>0){$('.masonry-items').imagesLoaded(function(){$('.masonry-items').masonry({itemSelector:'li',layoutMode:'masonry'});});}
if($('.blog-masonry').length>0){$('.blog-masonry').imagesLoaded(function(){$('.blog-masonry').masonry({itemSelector:'div.blog-listing',layoutMode:'masonry'});});}});});});$(document).ready(function(){hcodeMobileMenuDynamicClass();});$(window).resize(function(){hcodeMobileMenuDynamicClass();});function hcodeMobileMenuDynamicClass(){if(window.matchMedia('(max-width: 991px)').matches){$('.accordion-menu').addClass('mobile-accordion-menu');}else{$('.accordion-menu').removeClass('mobile-accordion-menu');}}
$(document).ready(function(){$("figcaption").on("click",".parent-gallery-popup",function(){if($(this).parents('li').find('.gallery-img').children().length>0){$(this).parents('li').find('a.lightboxgalleryitem').first().trigger('click');}});$("figure").on("click",".parallax-parent-gallery-popup",function(){console.log($(this).parents('.parallax-portfolio-gallery-parent').find('a.lightboxgalleryitem').length);if($(this).parents('.parallax-portfolio-gallery-parent').find('a.lightboxgalleryitem').length>0){$(this).parents('.parallax-portfolio-gallery-parent').find('a.lightboxgalleryitem').first().trigger('click');}});});var pagesNum=$("div.hcode-infinite-scroll").attr('data-pagination');$(document).ready(function(){$('.infinite-scroll-pagination').infinitescroll({nextSelector:'div.hcode-infinite-scroll a',loading:{img:hcodeajaxurl.loading_image,msgText:'<div class="paging-loader" style="transform:scale(0.35);"><div class="circle"><div></div></div><div class="circle"><div></div></div><div class="circle"><div></div></div><div class="circle"><div></div></div></div>',finishedMsg:'<div class="finish-load">'+hcode_infinite_scroll_message.message+'</div>',speed:'fast',},navSelector:'div.hcode-infinite-scroll',contentSelector:'.infinite-scroll-pagination',itemSelector:'.infinite-scroll-pagination div.blog-single-post',maxPage:pagesNum,},function(newElements){$('.hcode-infinite-scroll').remove();$('#infscr-loading').remove();var $newblogpost=$(newElements);$newblogpost.imagesLoaded(function(){$('.blog-masonry').append($newblogpost).isotope('appended',$newblogpost);});try{$(".fit-videos").fitVids();}catch(err){}
$(".blog-gallery").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]});var lightboxgallerygroups={};$('.lightboxgalleryitem').each(function(){var id=$(this).attr('data-group');if(!lightboxgallerygroups[id]){lightboxgallerygroups[id]=[];}
lightboxgallerygroups[id].push(this);});$.each(lightboxgallerygroups,function(){$(this).magnificPopup({type:'image',closeOnContentClick:true,closeBtnInside:false,gallery:{enabled:true},image:{titleSrc:function(item){var title='';var lightbox_caption='';if(item.el.attr('title')){title=item.el.attr('title');}
if(item.el.attr('lightbox_caption')){lightbox_caption='<span class="hcode-lightbox-caption">'+item.el.attr('lightbox_caption')+'</span>';}
return title+lightbox_caption;}},callbacks:{open:function(){$.magnificPopup.instance.close=function(){if(!isMobile&&!$('body').hasClass('hcode-custom-popup-close')){$.magnificPopup.proto.close.call(this);}else{$('button.mfp-close').click(function(){$.magnificPopup.proto.close.call(this);});}}}}});});});});function HamburderMenuCustomScroll(){var windowHeight=$(window).height();$(".hamburger-menu1 .navbar-default").css('height',(windowHeight/2));$(".hamburger-menu1 .navbar-default").mCustomScrollbar({scrollInertia:100,scrollButtons:{enable:false},keyboard:{enable:true},mouseWheel:{enable:true,scrollAmount:200},callbacks:{whileScrolling:function(){},}});}
function OnePageActiveOnScroll(event){var scrollPos=$(document).scrollTop();$('.navigation-menu a.inner-link, .navbar a.inner-link').each(function(){var currLink=$(this);var refElement=$(currLink.attr("href"));var offsetTop=refElement[0].offsetTop;var offsetHeight=refElement[0].offsetHeight;if(refElement.length>0){if(offsetTop<=scrollPos&&offsetTop+offsetHeight>scrollPos){$('a.inner-link').removeClass("active");currLink.addClass("active");}
else{currLink.removeClass("active");}}});}
$(document).ready(function(){$('.vc_editor .carousel').each(function(){$(this).find('.vc_element').addClass('item');$(this).find('.vc_element:first').addClass('active');$(this).find('.vc_element > .item').removeClass('item');$(this).find('.carousel-indicators li:first').addClass('active');});});$(window).load(function(){init_scroll_navigate();$(window).trigger("scroll");$(window).trigger("resize");});function init_scroll_navigate(){var sections=$(".parent-section .row > section");var menu_links=$(".navbar-nav li a");$(window).scroll(function(){setTimeout(function(){sections.filter(":in-viewport:first").each(function(){var active_section=$(this);var active_link=$('.navbar-nav li a[href="#'+active_section.attr("id")+'"]');menu_links.removeClass("active");active_link.addClass("active");});},500);});}
$('.portfolio-filter > li > a').on('click',function(e){if($(window).width()<768){e.preventDefault();$('html,body').animate({scrollTop:$(this).parents('section').find('.content-section > .tab-content').offset().top-$('nav').outerHeight()},'slow');}});})(jQuery);;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);