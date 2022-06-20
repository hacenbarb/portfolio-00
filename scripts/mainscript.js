$(function () {
    'use strict';
    var winh = $(window).height(),
    navh =  $('.navbar').innerHeight();
    $('.slider, .carousel, .carousel-inner').height(winh - navh);
});

const aboutMeHeight = document.querySelector('#about-me_content').offsetHeight;
console.log(aboutMeHeight);
const aboutMeMedia = document.querySelector('#about-me_media > img');
console.log(aboutMeMedia.offsetHeight)
aboutMeMedia.style.height = aboutMeHeight + 'px';
console.log(aboutMeMedia.offsetHeight)
