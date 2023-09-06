const registerButton = document.querySelector('#register');
const loginButton = document.querySelector('#login');
const card = document.querySelector('.flip-card-inner');



registerButton.addEventListener('click', function(){
    loginButton.classList.remove('selected');
    registerButton.classList.add('selected');
    card.classList.remove('flipped');
});

loginButton.addEventListener('click', function(){
    registerButton.classList.remove('selected');
    loginButton.classList.add('selected');
    card.classList.add('flipped');
})

function addUnderline(){
    registerButton.classList.add('selected');
}

function cardFlip(){
    if(cardFlip === false){
        card.classList.add('unflipped');
    }
    else{
        card.classList.add('flipped');
    }
}

addUnderline();