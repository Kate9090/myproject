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

  document.querySelector('.footer').addEventListener('mousemove', function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAncGFydGlhbHMvcHJlbG9hZGVyLmpzJ1xuLy8gIHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncC1wcmxkcicpLFxuICAgICAgc3ZnX2FubSAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubScpO1xuXG4gIHN2Z19hbm0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblxuICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdzbG93Jyk7XG4gIH0sIDMwMDApO1xuXG4vL2Ryb3BwaW5nIG1lbnVcbiAgdmFyIGxpc3RzPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGlzdHMnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsaXN0cy5jbGFzc0xpc3QuYWRkKCdkcm9wJyk7XG4gICAgfSwgMzAwMCk7XG5cbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDIwKSB7XG4gICAgbGlzdHMuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcCcpO1xuICAgIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2Rpc2FwZWFyJyk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpXG4gICAgaWYgKHBob25lKSB7XG4gICAgICBwaG9uZS5vbm1vdXNlZW50ZXIgPWZ1bmN0aW9uKCl7XG4gICAgICAgIHBob25lLmlubmVySFRNTCA9IFwiKzctOTg1LTIwMS0xNS0xMFwiXG4gICAgICB9XG5cbiAgICAgIHBob25lLm9ubW91c2VsZWF2ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHBob25lLmlubmVySFRNTCA9IFwiKzcoOTg1KTIqKiowXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyJdLCJmaWxlIjoibWFpbi5qcyJ9
