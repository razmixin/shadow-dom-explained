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

const style = document.createElement('style');
style.textContent = `
    .shadows-wrapper {
        display: none;
        position: relative;
        text-align: center;
        margin-top: 200px;
    }
    
    img {
        height: 200px;
        margin-right: 20px;
        width: 200px;
    }
`;

shadowHost.appendChild(style);
shadowHost.appendChild(wrapper);
customElements.define('shadows-in-dom', ShadowsInDom);
