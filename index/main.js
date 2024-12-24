const title = document.getElementById('paragraph')
const btn = document.getElementById('btn')

let btns = false;
btn && btn.addEventListener('click', function(){
    if (btns) {
        title.style.color=(['red', 'orange', 'white', 'blue'][Math.floor(Math.random()*4)])
        btns = false
    }
    else {
        title.style.color=(['red', 'orange', 'white', 'blue'][Math.floor(Math.random()*4)])
        btns = true
    } 
})
console.log(title);

function binder() {
    var copy = document.getElementById('Input')
    
    copy.select();
    copy.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(copy.value)

    alert("matn nusxalandi: " + copy.value)
}



const Input = document.getElementById('inp');

function search() {
    let title1 = Input.value;
    let paragraph = document.getElementById('paragrap2');
    
    title1 = title1.replace(/[.*+^${}()[\]\\]/g, "\\$&");

    let sear = new RegExp(`${title1}`, "gi");
    paragraph.innerHTML = paragraph.innerHTML.replace(sear, match => `<mark>${match}</mark>`);
}

const texts = document.querySelector('.textWrapper')
const btn1 = document.getElementById('hide')
const btn2 = document.querySelector('.show')


btn1.addEventListener("click", ()=> {
    texts.classList.add("hidden")
});
btn2.addEventListener("click", ()=> {
    texts.classList.remove("hidden")
})


