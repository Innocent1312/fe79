// Проблема с ctrl + shift + S


output = document.getElementById('output');

window.addEventListener('keydown',(element) => {
    
    if(element.keyCode == 83 && element.ctrlKey){
        print("Saved")
    }
    else if (element.keyCode == 65 && element.ctrlKey){
        print("All Selected")
    }
    else if (element.ctrlKey && element.shiftKey && element.keyCode == 83) {
        print("All Saved")
    }
},false)

function print(message) {
   output.innerHTML += message + "<br />";
}