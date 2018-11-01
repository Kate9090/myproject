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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAncGFydGlhbHMvcHJlbG9hZGVyLmpzJ1xuLy8gIHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncC1wcmxkcicpLFxuICAgICAgc3ZnX2FubSAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubScpO1xuXG4gICAgICBzdmdfYW5tLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdzbG93Jyk7XG4gICAgICB9LCAzMDAwKTtcblxuLy9kcm9wcGluZyBtZW51XG4gICAgdmFyIGxpc3RzPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGlzdHMnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgbGlzdHMuY2xhc3NMaXN0LmFkZCgnZHJvcCcpO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMjApIHtcbiAgICAgIGxpc3RzLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3AnKTtcbiAgICAgIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2Rpc2FwZWFyJyk7XG4gICAgfVxuXG5cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIHZhciBwaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpXG4gICAgaWYgKHBob25lKSB7XG4gICAgICBwaG9uZS5vbm1vdXNlZW50ZXIgPWZ1bmN0aW9uKCl7XG4gICAgICAgIHBob25lLmlubmVySFRNTCA9IFwiKzctOTg1LTIwMS0xNS0xMFwiXG4gICAgICB9XG5cbiAgICAgIHBob25lLm9ubW91c2VsZWF2ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHBob25lLmlubmVySFRNTCA9IFwiKzcoOTg1KTIqKiowXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbn07Il0sImZpbGUiOiJtYWluLmpzIn0=
