/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);
// meet the staff js code
//Staff Page JavaScript
const panels = document.querySelectorAll('.panel');
//console.log(panels);
panels.forEach((panels)=>{
    panels.addEventListener('click', () =>{
        removeActiveClass()
        panels.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panels=>{
        panels.classList.remove('active')
    })
}

//Overlays functions for active class
const overlays = document.querySelectorAll('.panel');
 console.log(overlays);
overlays.forEach((overlays) =>{
    overlays.addEventListener('click', ()=>{
        removeActiveOverlay()
        overlays.classList.add('active')
    })
    if(overlays === 'active'){
        addActiveOverlay()
    }else{
        removeActiveOverlay()
    }
})
function removeActiveOverlay(){
    overlays.forEach(overlays =>{
        overlays.classList.remove('active')
    })
}
function addActiveOverlay(){
    overlays.forEach(overlays =>{
        overlays.classList.add('active')
    })
}
// const nav = document.querySelector('.navbar__menu')
// window.addEventListener('scroll', fixNav)

// function fixNav() {
//     if(window.scrollY > nav.offsetHeight + 10) {
//         nav.classList.add('active')
//     }else{
//         nav.classList.remove('active')
//     }
// }