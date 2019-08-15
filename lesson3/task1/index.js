const paragraph = document.getElementsByTagName('p')

const change_btn = document.getElementById('change_btn');
change_btn.addEventListener('click', () => {
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = 'PARAGRAPH'
    }
}, false)