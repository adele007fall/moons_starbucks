const first_bg = document.querySelector('.first_bg');
const slider = document.querySelector('.slider');
const nav = document.querySelector('#nav'); 
const logo = document.querySelector('#logo'); 
const nav_menus = document.querySelector('.nav_menus'); 
const main_text = document.querySelectorAll('.main_text span');
const depth1 = document.querySelectorAll('.depth1 > a');  


const timeline = new TimelineMax();  

// load 시작하고 나타나기
timeline.fromTo(first_bg,1, {height: "0%"}, {height: "70%", ease: Power2.easeInout});
timeline.fromTo(first_bg, 1.2, {width: "100%"}, {width: "90%", ease: Power2.easeInout} )
timeline.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInout}, "-=1.2" )
timeline.fromTo(nav, 0.5, {background: "none"}, {background: "#f1f1f1", ease: Power2.easeInout}, "-=0.5" );
timeline.fromTo(nav_menus, 0.2, {}, {visibility: "visible", ease: Power2.easeInout}, "-=0.2" );
timeline.fromTo(logo, 0.2, { x: "-100%"}, {opacity: 1, x: 0}, "-=0.2" );
timeline.fromTo(main_text, 1.5, {y:"450%"}, {y:"0%",stagger: 0.25 },"-=1.5")
 
// nav hover 했을때 나타나기 
depth1.forEach(depth1 => {
    depth1.addEventListener('click',(e)=>{
        e.stopPropagation();
        depth1.classList.toggle('show');
        depth1.nextElementSibling.classList.toggle('show');
    })  
}); 
window.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    header.classList.toggle('header_scroll',window.scrollY>0);  
})