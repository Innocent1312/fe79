const div1 = document.getElementById('div1')
const create_btn = document.getElementById('create_btn');

create_btn.addEventListener('click', () => {
    let p = document.createElement('p');
    p.innerHTML = 'Paragraph'
    div1.appendChild(p)
    if (div1.children.length > 10) {
        while (div1.firstChild) {
            div1.removeChild(div1.firstChild)
        }
    }
}, false)