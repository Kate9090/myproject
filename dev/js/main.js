// import 'partials/preloader.js'
// var $ = require("jquery");

window.onload = function () {
  var preloader = document.getElementById('p-prldr'),
      svg_anm   = document.querySelector('.anm');

      svg_anm.classList.add('show');

      setTimeout(function(){

        preloader.classList.add('slow');
      }, 3000);


};