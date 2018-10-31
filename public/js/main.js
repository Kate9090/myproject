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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAncGFydGlhbHMvcHJlbG9hZGVyLmpzJ1xuLy8gdmFyICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AtcHJsZHInKSxcbiAgICAgIHN2Z19hbm0gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbm0nKTtcblxuICAgICAgc3ZnX2FubS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblxuICAgICAgICBwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZCgnc2xvdycpO1xuICAgICAgfSwgMzAwMCk7XG5cbi8vZHJvcHBpbmcgbWVudVxuICAgIHZhciBsaXN0cz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2xpc3RzJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2Ryb3AnKTtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDIwKSB7XG4gICAgICBsaXN0cy5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wJyk7XG4gICAgICBsaXN0cy5jbGFzc0xpc3QuYWRkKCdkaXNhcGVhcicpO1xuICAgIH1cbn07Il0sImZpbGUiOiJtYWluLmpzIn0=
