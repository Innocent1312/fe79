const btn = document.getElementById('btn');
const close_btn = document.getElementById('close_btn');

let saved = false

btn.addEventListener('click', savePage, false)
close_btn.addEventListener('click', exitPage, false)

function savePage() {
    saved = true;
    return saved
}

function exitPage() {
   if (saved){
       window.close()
   }
   else{
     let confirmed = confirm("Are you sure?")
       if(confirmed){
           window.close()
       }
   }
}