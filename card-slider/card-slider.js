   document.addEventListener("DOMContentLoaded", function (){
        const imageList = document.querySelector('.card-slider .image-container');
        setDefaultScrollPosition();
        const scrollableLength = imageList.scrollWidth - imageList.clientWidth;

        // handle sliderbutton onclick
        const beforeSliderBtn = document.querySelector('#card-slider-before');
        const nextSliderBtn = document.querySelector('#card-slider-next');

        let index = 0;

        beforeSliderBtn.addEventListener('click', scrollLeft);
        nextSliderBtn.addEventListener('click', scrollRight);

        function setDefaultScrollPosition(){
            imageList.scrollBy({
                left: 600,
                behavior: "smooth"
            })
        }

        console.log(window.scrollX)
        let scrollable = true;
        setInterval(function() {
            if (checkifScrollEnd()){
                cloneChildtoLast(index);
                index++;
                return index;
            }

        }, 100);

        function scrollLeft(){
            imageList.scrollBy({
                left: -400,
                behaviour: 'smooth',
            });
            cloneChildtoStart(index);
            index++;
            return index;
        }
        
        function scrollRight(){
            imageList.scrollBy({
                left: 400,
                behaviour: 'smooth',
            });

            // to create infinite loop
            cloneChildtoLast(index);
            index++;
            return index;
        }


        function cloneChildtoLast(index){
            imageList.appendChild(imageList.children[index].cloneNode(true));
            return index;
        }

        function cloneChildtoStart(index){
            imageList.prepend(imageList.children[imageList.childElementCount - index - 1].cloneNode(true));
        }
    

        function checkifScrollEnd(){
            if (Math.abs(imageList.scrollLeft) === imageList.scrollWidth - imageList.clientWidth){
                return true;
            }
            else if (Math.abs(imageList.scrollLeft) === imageList.scrollWidth - imageList.clientWidth - 1){
                return true;
            }
            else if (Math.abs(imageList.scrollLeft) === imageList.scrollWidth - imageList.clientWidth + 1){
                return true;
            }
            else{
                return false;
            }
            
        }
          
   }) 
  



