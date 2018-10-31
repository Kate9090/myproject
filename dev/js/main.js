// import 'partials/preloader.js'
// var $ = require("jquery");

window.onload = function () {
  var preloader = document.getElementById('p-prldr'),
      svg_anm   = document.querySelector('.anm');

      svg_anm.classList.add('show');

      setTimeout(function(){

        preloader.classList.add('slow');
      }, 3000);

//dropping menu
    var lists= document.querySelector('.menu__lists');
      setTimeout(function(){
        lists.classList.add('drop');
      }, 3000);

    if (window.pageYOffset > 20) {
      lists.classList.remove('drop');
      lists.classList.add('disapear');
    }
};

