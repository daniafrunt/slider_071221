'use strict';

const wrapper = document.querySelector('.slider');

const borderMove = function(first) {
    
}
const imgTransform = function() {
    let imgs = wrapper.querySelectorAll('img');
    imgs.forEach((elem) => {
        let compStyle = getComputedStyle(elem);
        let width = compStyle.width;
        let height = compStyle.height;
        let src = elem.getAttribute('src');
        elem.remove();
        let div = document.createElement('div');
        div.style.width = width;
        div.style.height = height;
        div.style.backgroundImage = `URL(${src})`;
        div.style.backgroundRepeat = 'no-repeat';
        wrapper.insertAdjacentElement('afterbegin', div);
        console.log();
    })
    let imgFirst = wrapper.querySelector('div:first-child');
    let imgLast = wrapper.querySelector('div:last-child');
    imgFirst.classList.add('first-picture');
    imgLast.classList.add('last-picture');
    borderMove(imgFirst);
}

imgTransform();