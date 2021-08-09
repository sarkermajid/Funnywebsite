let ask = prompt('What is Your age ? if you have 18+ than you can enter this site.')
let box = document.querySelector('.a');

if(ask >= 18){
    box.style.display ='block';
}else{
    let error = document.querySelector('.error');
    error.style.display = 'block';
}


// Part of type js

let likha = "Hey, This is Md Majidur Rahman Sarker, I am a Full Stack Web Developer.";
let title = document.querySelector('.title');

let i = 0;
setInterval(function(){
    title.innerHTML += likha.charAt(i++);
    if(i>likha.length){
        i = 0;
        title.innerHTML = '';
    }
},100);