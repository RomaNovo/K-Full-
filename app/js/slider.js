/*======================= General function =================*/
  function _q(node) {
    return document.querySelector(node);
  }

  function _qA(node) {
    return document.querySelectorAll(node);
  }
/*======================= General function End==============*/

let slideCount = _qA('.slider__item').length,
    slideEle   = _q('.slider__item'),
    slideWidth = slideEle.getBoundingClientRect().width,
    slideHeight = slideEle.getBoundingClientRect().height,
    sliderUlWidth = slideCount * slideWidth,
    slider = _q('.slider'),
    sliderList = _q('.slider__list');    

slider.style.width = '100vw';
/*slider.style.height = slideHeight + 'px';*/
sliderList.style.width = '400vw';
sliderList.style.transform = 'translateX(-100vw)';

function changeLeft() {

    let sliderCol  = _qA('.slider__item'),
        firstSlide = sliderCol[0],
        lastSlide = sliderCol[sliderCol.length - 1]; 

    sliderList.insertBefore(lastSlide,firstSlide);   
};

changeLeft();

function changeRight() {
    let sliderCol  = _qA('.slider__item'),
        firstSlide = sliderCol[0],
        lastSlide = sliderCol[sliderCol.length - 1]; 

    sliderList.appendChild(firstSlide);   
}


function moveLeft() {

    sliderList.style.transition = 'transform 1.2s';
    sliderList.style.transform = 'translateX(' + y + ')';   
    setTimeout(function () {
        sliderList.style.transition = 'none';
        sliderList.style.transform = 'translateX(-500px)';   
        changeLeft();
    },300);
}

function moveRight() {

    sliderList.style.transition = 'transform 1.2s';
    sliderList.style.transform = 'translateX(-200vw)'; 
  
    setTimeout(function () {
        sliderList.style.transition = 'none';      
        sliderList.style.transform = 'translateX( -100vw )';    
        changeRight();
    },1200);
}

setInterval(moveRight,7000);


/*butLeft.addEventListener('click', function() {
    if(sliderList.classList.contains('slider__list_active')) {
        sliderList.classList.remove('slider__list_active'); 
    }
    
    moveLeft();
})

butRight.addEventListener('click', function() {
    if(sliderList.classList.contains('slider__list_active')) {
        sliderList.classList.remove('slider__list_active'); 
    }
    
    moveRight();
})*/