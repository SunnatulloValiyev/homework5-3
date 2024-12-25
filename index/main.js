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


const pText = document.querySelectorAll("#paragraph3");

pText.forEach((element) => {
  element.addEventListener("click", function () {
    element.style.fontSize = "50px";
  });
});

btn1.addEventListener("click", ()=> {
    texts.classList.add("hidden")
});
btn2.addEventListener("click", ()=> {
    texts.classList.remove("hidden")
})


const btn3 = document.getElementById('red')
const btn4 = document.getElementById('green')
const btn5 = document.getElementById('blue')

btn3.addEventListener("click", () => {
    let bodyColor = window.getComputedStyle(document.body).backgroundColor
    if (bodyColor === 'rgb(255, 0, 0)') {
        document.body.style.backgroundColor = '';
    } else {
        document.body.style.backgroundColor = 'red';
    }
});

btn4.addEventListener("click", () => {
    let bodyColor2 = window.getComputedStyle(document.body).backgroundColor
    if (bodyColor2 === 'rgb(0, 128, 0)') {
        document.body.style.backgroundColor = '';
    } else {
        document.body.style.backgroundColor = 'green';   
    }
});
btn5.addEventListener("click",() => {
    let bodyColor3 = window.getComputedStyle(document.body).backgroundColor
    if (bodyColor3 === 'rgb(0, 0, 255)') {
        document.body.style.backgroundColor = '';   
    } else {
        document.body.style.backgroundColor = 'blue';   
    }
})

const inputword = document.querySelector('#inputField'); 
const outputword = document.querySelector('#outputField');


inputword.addEventListener('input', () => {
    outputword.textContent = inputword.value; 
});


const password1 = document.querySelector('#passwordinp')
const btn6 = document.querySelector('#pasbtn')

btn6.addEventListener('click', () => {
    if (password1.type === 'password') {
        password1.type = 'text';
        btn6.textContent = 'yashirish';
    } else {
        password1.type = 'password';
        btn6.textContent = 'koratish';
    }
})

const box = document.querySelector("#box");
const moveUpButton = document.querySelector("#moveUp");
const moveDownButton = document.querySelector("#moveDown");
const moveLeftButton = document.querySelector("#moveLeft");
const moveRightButton = document.querySelector("#moveRight");

let verticalPosition = 0;
let horizontalPosition = 0;

moveUpButton.addEventListener("click", function () {
  verticalPosition -= 10;
  box.style.marginTop = `${verticalPosition}px`;
});

moveDownButton.addEventListener("click", function () {
  verticalPosition += 10;
  box.style.marginTop = `${verticalPosition}px`;
});

moveLeftButton.addEventListener("click", function () {
  horizontalPosition -= 10;
  box.style.marginLeft = `${horizontalPosition}px`;
});

moveRightButton.addEventListener("click", function () {
  horizontalPosition += 10;
  box.style.marginLeft = `${horizontalPosition}px`;
});



const paragraph = document.querySelectorAll("#text");

paragraph.forEach((paragraph) => {
  paragraph.addEventListener("click", function () {
    paragraph.innerText = "salom domla";
  });
});

const imageUrls = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lightailing.com%2Ffr%2Fblogs%2Fnews%2Flight-kit-for-the-magical-world-of-harry-potter-hogwarts-whomping-willow&psig=AOvVaw0Rx8zRDTelF3J2IN2U5pRs&ust=1735198313379000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODX7s-zwooDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fforreslocal.com%2Fwizards-and-witches-encouraged-to-join-in-harry-potter-fun%2F&psig=AOvVaw0Rx8zRDTelF3J2IN2U5pRs&ust=1735198313379000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODX7s-zwooDFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xxlmag.com%2Feminem-fack-2%2F&psig=AOvVaw2lq-r7DDw-gIPXtXl54_ak&ust=1735198391218000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLCzvfOzwooDFQAAAAAdAAAAABAE"
  ];
  
  const randomImageButton = document.getElementById("randomImageButton");
  const randomImage = document.getElementById("randomImage");
  
  randomImageButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    randomImage.src = imageUrls[randomIndex];
  });
  
    