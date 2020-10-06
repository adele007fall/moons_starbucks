var elms = document.getElementsByClassName( 'splide__slide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ] ).mount();
}

new Splide( '#splide', { 
	perPage: 3,
    perMove: 1,  
    rewind: true,
    breakpoints: {
        900:{
            perPage:2,
        },
        500:{
            perPage: 1,
        }
    } 
} ).mount();