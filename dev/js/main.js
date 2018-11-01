// import 'partials/preloader.js'
//  require("jquery");

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



  document.querySelector('.footer').addEventListener('mousemove', function (evt) {
    var phone = document.getElementById('phone')
    if (phone) {
      phone.onmouseenter =function(){
        phone.innerHTML = "+7-985-201-15-10"
      }

      phone.onmouseleave = function(){
        phone.innerHTML = "+7(985)2***0"
      }
    }
  })

};

