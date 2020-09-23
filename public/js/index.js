const first_bg = document.querySelector('.first_bg');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo'); 
const main_text = document.querySelectorAll('.main_text span');
const timeline = new TimelineMax(); 

timeline.fromTo(first_bg,1, {height: "0%"}, {height: "90%", ease: Power2.easeInout});
timeline.fromTo(first_bg, 1.2, {width: "100%"}, {width: "90%", ease: Power2.easeInout} )
timeline.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInout}, "-=1.2" )
timeline.fromTo(logo, 0.2, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.2" );
timeline.fromTo(main_text, 1.5, {y:"200%"}, {y:"0%",  stagger: 0.25 })