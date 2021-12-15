'use strict';

class Slider {
    constructor(wrapper) {
        this.wrapper = document.querySelectorAll(wrapper);
    }
    borderMoveEvent(e) {
        let img = e.target;
        if (img.parentElement.classList.contains('slider')) {
            let needImg = img.parentElement.querySelector('.first-picture')
            needImg.style.width = `${e.screenX - needImg.parentElement.getBoundingClientRect().left}px`;
        }
    }
    borderMove(elem) {
        elem.addEventListener('mousemove', this.borderMoveEvent.bind(this));
        elem.addEventListener('mouseover', this.arrowDelete.bind(this));
    }
    imgTransformFEach(elem) {
        let compStyle = getComputedStyle(elem);
        let width = compStyle.width;
        let height = compStyle.height;
        let src = elem.getAttribute('src');
        let div = document.createElement('div');
        div.style.width = width;
        div.style.height = height;
        div.style.backgroundImage = `URL(${src})`;
        div.style.backgroundRepeat = 'no-repeat';
        elem.parentElement.insertAdjacentElement('afterbegin', div);
        elem.remove();
    }
    imgsTransformFindSliders(elem) {
        let imgs = elem.querySelectorAll('img');
        imgs.forEach(this.imgTransformFEach.bind(this));
        let imgFirst = elem.querySelector('div:first-child');
        let imgLast = elem.querySelector('div:last-child');
        imgFirst.style.width = '50%';
        imgFirst.classList.add('first-picture');
        imgLast.classList.add('last-picture');
    }
    arrowSpawn(elem) {
        let arrows = document.createElement('div');
        arrows.innerHTML = '&larr; &rarr;';
        arrows.classList.add('arrows');
        elem.insertAdjacentElement('beforeend', arrows);

    }
    arrowDelete(e) {
        let arrowsToDelete = e.target.parentElement.querySelectorAll('.arrows');
        if (arrowsToDelete.length > 0) {
            arrowsToDelete[0].remove();
        }
    }
    imgTransform() {
        this.wrapper.forEach(this.borderMove.bind(this));
        this.wrapper.forEach(this.imgsTransformFindSliders.bind(this));
    }
    init() {
        this.imgTransform();
        this.wrapper.forEach(this.arrowSpawn.bind(this));
    }
}

const slider = new Slider('.slider');

slider.init();