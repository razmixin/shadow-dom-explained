'use strict';

class ShadowsInDom extends HTMLElement {
  constructor() {
    super();
  }
}

const shadowHost = document.getElementsByClassName('shadow-host')[0];
const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'shadows-wrapper');

const ghostOneImg = document.createElement('img');
const ghostTwoImg = document.createElement('img');
const ghostThreeImg = document.createElement('img');

ghostOneImg.src = './assets/zwei.jpg';
ghostTwoImg.src = './assets/booo.png';
ghostThreeImg.src = './assets/derpy.png';

wrapper.appendChild(ghostOneImg);
wrapper.appendChild(ghostTwoImg);
wrapper.appendChild(ghostThreeImg);
