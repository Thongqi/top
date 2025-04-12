document.addEventListener("DOMContentLoaded", function(){
    const imageList = document.querySelector('.card-slider .image-container');
    const scrollableLength = imageList.scrollWidth - imageList.clientWidth;

    // handle sliderbutton onclick
    const beforeSliderBtn = document.querySelector('#card-slider-before');
    const nextSliderBtn = document.querySelector('#card-slider-next');

    beforeSliderBtn.addEventListener('click', scrollLeft);
    nextSliderBtn.addEventListener('click', scrollRight);

})

function scrollLeft(){
    imageList.scrollBy({
        left: -200,
        behaviour: 'smooth',
    });
}

function scrollRight(){
    imageList.scrollBy({
        left: 200,
        behaviour: 'smooth',
    });
}