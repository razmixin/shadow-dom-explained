'use strict';

const btnReveal = document.getElementsByClassName('btn-reveal')[0];

btnReveal.addEventListener('click', function() {
  const shadowsInDom = document.getElementsByClassName(
    'shadows-div-wrapper'
  )[0];
  const bodyElem = document.getElementsByTagName('body')[0];
  btnReveal.style.display = 'none';
  shadowsInDom.style.display = 'block';
  bodyElem.style.background = 'black';
});
