const div = document.getElementsByTagName('div');

window.addEventListener('keyup',() => {
    for (let i = 0; i < div.length; i++) {
        if(event.keyCode == 82){
            div[i].style.color = 'red'
        }
        else if (event.keyCode == 71){
            div[i].style.color = 'green'                
        }
        else if (event.keyCode == 66){
            div[i].style.color = 'blue'            
        }    
    }
},false)



