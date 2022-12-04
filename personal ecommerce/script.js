
//copy menu for mobile
function copyMenu(){
    var dptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector(".header-nav nav");
    var navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector(".header-top .wrapper");
    var topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML
}
copyMenu();

const menuButton = document.querySelector(".trigger"),
    closeBtn = document.querySelector('.t-close'),
    addClass = document.querySelector(".site");

menuButton.addEventListener("click", ()=>{
    addClass.classList.toggle("showmenu")
})
closeBtn.addEventListener("click", ()=>{
    addClass.classList.remove("showmenu")
})
const submenu = document.querySelectorAll(".has-child .icon-small");
sub = Array.from(submenu);
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList  != 'expand');
    this.closest('.has-child').classList.toggle('expand');
    
}

//slider

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });



  const searchButton = document.querySelector(".t-search"),
        close = document.querySelector(".search-bottom .t-close"),
        showIt = document.querySelector('.site');

searchButton.addEventListener("click",function(){
    showIt.classList.toggle("showsearch")
})
close.addEventListener("click",function(){
    showIt.classList.remove("showsearch")
})
