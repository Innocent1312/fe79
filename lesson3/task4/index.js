const div = document.getElementById('div')
let x = 0;
let y = 0;
window.addEventListener('keydown', ()=>{
     if (event.keyCode == 37) {
         x += -10;
         div.style.left = x + 'px';
     } else if (event.keyCode == 39) {
         x += 10;
         div.style.left = x + 'px';
     } else if (event.keyCode == 38) {
         y += -10;
         div.style.top = y + 'px';
     } else if (event.keyCode == 40) {
         y += 10;
         div.style.top = y + 'px';
     }
}, false)