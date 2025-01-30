const grade = document.querySelector('.grade');
const spanPlayer = document.querySelector('.player');
const time = document.querySelector('.tempo');

const jogos = [
 'devil my cry',
'BLACK',
'jak 3',
'star wars',
'prince of percia',
'mortal kombat',
'metal gear solid v',
'horizon',
'ghost of tsushima',
'gta v',
'gta san andreas',
'street fighter v'
];

const createElement = (tag, className) => {
const element = document.createElement(tag);
element.className = className;

return element;
}
let fristCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.desabled-card');
    if (disabledCards.length === 24){
        clearInterval(this.loop);
      
        alert ( `Parabéns, ${spanPlayer.innerHTML} seu tempo foi: ${time.innerHTML} segundos!`);
            window.location = 'tela2.html';}
} 

 const checkCards = () =>{
    const fristJogo = fristCard.getAttribute('data-jogo');
    const secondJogo = secondCard.getAttribute('data-jogo');

    if (fristJogo === secondJogo) {

        fristCard.firstChild.classList.add('desabled-card');
        secondCard.firstChild.classList.add('desabled-card');
        fristCard = '';
        secondCard = '';
        checkEndGame();
    } else {
        setTimeout(() => {

            fristCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

        fristCard = '';
        secondCard = '';
        }, 500);

        
    }
 }
const revealCard = ({ target }) =>{
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }
    if (fristCard === ''){
        target.parentNode.classList.add('reveal-card');
        fristCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        checkCards();
    }

target.parentNode.classList.add('reveal-card');
}

const createCard = (jogo) => {

    const carta = createElement('div', 'carta');
    const frente = createElement('div', 'faces frente');
    const atras = createElement('div', 'faces atras');

    frente.style.backgroundImage = `url('../image/${jogo}.png')`;

    carta.appendChild(frente);
    carta.appendChild(atras);
    carta.addEventListener('click', revealCard);
   carta.setAttribute('data-jogo', jogo);
 return carta;

}


const loadGame = () => {
        const duplicateJogos = [...jogos, ...jogos];

    const shuffLedArrey = duplicateJogos.sort(() => Math.random() - 0.5);


    shuffLedArrey.forEach((jogo) =>  {
       
       
        const carta = createCard (jogo);
        grade.appendChild(carta);
    });

}
const startTimer = () => {
   this.loop = setInterval(() => {
        const currentTime = +time.innerHTML;
        time.innerHTML = currentTime + 1;
    }, 1000);
}


window.onload = () => {
 
  spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer(); 
    loadGame(); 
    
}
