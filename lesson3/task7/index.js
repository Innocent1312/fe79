const btn = document.getElementById('btn');


btn.addEventListener('mouseover', () => {
    let x = Math.floor(Math.random() * 600);
    btn.style.left = x + 'px'
    btn.style.top = x + 'px'
}, false)