// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs

//= require bootstrap-alerts
//= require bootstrap-dropdown
//= require bootstrap-modal
// Twipsy has to be loaded before popover,
// otherwise causes a JS error.
//= require bootstrap-twipsy
//= require bootstrap-popover
//= require bootstrap-scrollspy
//= require bootstrap-tabs
//= require bootstrap-buttons

//= require_tree .

$(document).ready(function(){
	
	//TOGGLE VISIBILITY OF WISHLISTS
	$('.add_to_wishlist').each(function(){
		$(this)
			.children('h5')
				//.addClass('fakeLink')
				.addClass('btn')
				// this is the simple, faster way, if we don't want the button to change
				// .click(function(){
				// 	$(this).siblings('ul.wishLists').toggle(250, 'swing');
				// })
				.toggle(function(){
					$(this)
						.addClass('info')
						.text('Close Wishlists')
						.siblings('ul.wishLists')
							.show(250, 'swing');
				}, function(){
					$(this)
						.removeClass('info')
						.text('Wishlist It!')
						.siblings('ul.wishLists')
							.hide(250, 'swing');
				})
				.end()
			.children('ul.wishLists')
				.hide();
	});
	
	//WISHLIST ADD/REMOVE TOOLTIPS
	$('.addList, .remList').twipsy({
		'placement': 'left'
	});
	
	//ACTIVATE TABS
	$('.tabs').tabs();
});
