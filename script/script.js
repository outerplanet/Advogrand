const slider=document.querySelectorAll(".slider"),sliderContainer=document.querySelectorAll(".slider__container"),sliderPrevBtn=document.querySelectorAll(".slider__prev"),sliderNextBtn=document.querySelectorAll(".slider__next"),root=document.documentElement,style=getComputedStyle(root);let sliderVisibleItems=[];for(var i=0;i<6;i++)sliderVisibleItems[i]=style.getPropertyValue("--reviews-visible-items");sliderVisibleItems[6]=style.getPropertyValue("--partners-visible-items");const sliderItem=[];for(let e=0;e<slider.length;e++)sliderItem[e]=document.querySelectorAll(".slider"+(e+1)+"__item");let currentSlider=[];for(let e=0;e<slider.length;e++)currentSlider[e]=0;for(let e=0;e<slider.length;e++)sliderNextBtn[e].addEventListener("click",()=>sliderNext(e));for(let e=0;e<slider.length;e++)sliderPrevBtn[e].addEventListener("click",()=>sliderPrev(e));function sliderNext(e){currentSlider[e]==sliderItem[e].length-sliderVisibleItems[e]?(sliderContainer[e].style.transform="translateX(0)",currentSlider[e]=0):(currentSlider[e]++,sliderContainer[e].style.transform="translateX("+currentSlider[e]*(-100/sliderVisibleItems[e])+"%)")}function sliderPrev(e){0==currentSlider[e]?(sliderContainer[e].style.transform="translateX("+(sliderItem[e].length-sliderVisibleItems[e])*(-100/sliderVisibleItems[e])+"%)",currentSlider[e]=sliderItem[e].length-sliderVisibleItems[e]):(currentSlider[e]--,sliderContainer[e].style.transform="translateX("+currentSlider[e]*(-100/sliderVisibleItems[e])+"%)")}window.addEventListener("resize",(function(){for(var e=0;e<6;e++)sliderVisibleItems[e]=style.getPropertyValue("--reviews-visible-items");sliderVisibleItems[6]=style.getPropertyValue("--partners-visible-items");for(e=0;e<slider.length;e++)sliderContainer[e].style.transform="translateX("+currentSlider[e]*(-100/sliderVisibleItems[e])+"%)"}));const tabParent=document.querySelectorAll(".tab__parent"),tab=[],tabBtn=[];for(let e=0;e<tabParent.length;e++)tab[e]=document.querySelectorAll(".tab"+(e+1)),tabBtn[e]=document.querySelectorAll(".tab"+(e+1)+"__button");for(let e=0;e<tabParent.length;e++)for(let t=0;t<tabBtn[e].length;t++)tabBtn[e][t].addEventListener("click",()=>tabClick(e,t));function tabClick(e,t){tabBtn[e].forEach(e=>e.classList.remove("tab__button--active")),tab[e].forEach(e=>e.classList.remove("tab--active")),tabBtn[e][t].classList.add("tab__button--active"),tab[e][t].classList.add("tab--active")}tabBtn[0][1].click(),tabBtn[1][tabBtn[1].length-1].click();