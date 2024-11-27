
searchBox = document.querySelector('.form-box');

document.querySelector('#search-btn').onclick =() => {
    searchBox.classList.toggle('active');
}






window.onscroll=() => {

    searchBox.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active'); 
    }
}

window.onload=() =>{
    if(window.scrollY >80){
        document.querySelector('.header .header-2').classList.add('active'); 
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active'); 
    }
}

/*login form*/
var loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=() =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick =() =>{
    loginForm.classList.remove('active');
}


/*swipper*/

var swiper = new Swiper(".book-list", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
 
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

/*---featured section---*/

var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
    navigation:{
        nextE1:"swiper-button-next",
        prevE1:"swiper-button-prev",

    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      450:{
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        
      },
      1024: {
        slidesPerView: 4,
        
      },
    },
  });

  /*---arrivals section---*/
  var swiper = new Swiper(".arrivals-slider", {
    
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
 
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 4,
        
      },
    },
  });

/* review section */

var swiper = new Swiper(".reviews-slider", {
    
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
 
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 4,
        
      },
    },
  });

  /* blog section */

  var swiper = new Swiper(".blog-slider", {
    
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
 
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });



  /*sticky navbar*/ 

  // Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the navbar element
  const navbar = document.querySelector('.navbar');
  
  // Get the offset position of the navbar
  const sticky = navbar.offsetTop;

  // When the user scrolls the page, execute the stickyNavbar function
  window.onscroll = function () {
      stickyNavbar();
  };

  // Function to add or remove the sticky class
  function stickyNavbar() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
      } else {
          navbar.classList.remove("sticky");
      }
  }
});

