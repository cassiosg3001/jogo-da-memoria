const input = document.querySelector(".identificar");
const button = document.querySelector(".play");
const form = document.querySelector(".login")

const validateInput = ({ target}) => {
if (target.value.length > 2){
    button.removeAttribute('disabled');
} else {
    button.setAttribute('disabled', '');
}
}

const handleSubmit = (event) => {
event.preventDefault();
localStorage.setItem('player', input.value);
window.location = 'game.html';
}
input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
