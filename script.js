const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const restartScore = document.querySelector('.btn--new');
const holdDice = document.querySelector('.btn--hold');

// Variaveis que foram declaradas uma unica vez no codigo, se a possibilidade de serem alteradas
let totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Funcão de rodar o dado
rollDice.addEventListener('click', () => {
  const d = Math.ceil(Math.random() * 6); //Declara o valor de uma variavel sendo ela de 1 a 6 de forma randomica
  dice.src = `images/dice-${d}.png`; //Dependendo do numero aleatorio que for jogado o codigo vai alterar a imagem

  // Se o valor da variavel "d" for 1, o codigo passa a vez do jogador
  if (d === 1) {
    switchPlayer();
  } else {
    //Se não ele adiciona o valor do current-score para o score
    currentScore += d;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

//A função restartScore vai resetar o jogo inteiro, declarando o valor 0 para todos os scores
restartScore.addEventListener('click', () => {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  document.getElementById('score--0').textContent = totalScore[0];
  document.getElementById('score--1').textContent = totalScore[1];
  document.getElementById('current--0').textContent = currentScore;
  document.getElementById('current--1').textContent = currentScore;
});

//A função holdDice vai pegar o valor do current-score e ira somar para o valor do score
holdDice.addEventListener('click', () => {
  totalScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer];
  // Se o valor do totalScore do player for equivalente a 100, ele ira declarar o jogador vencedor
  if (totalScore[activePlayer] >= 100) {
    // Se a pontuação total do jogador ativo for maior ou igual a 100
    playing = false; // Finalizar o jogo
    document.querySelector('.dice').style.display = 'none'; // Ocultar o elemento do dado
    // Adicionar classe de vencedor ao jogador ativo
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    // Remover classe de jogador ativo
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // Se a pontuação total do jogador ativo for menor que 100
    switchPlayer(); // Alternar para o próximo jogador
  }
});

// Função para alternar os jogadores
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  // Se a vez for passada o current-score do jogador sera zerado
  currentScore = 0;
  document.getElementById('current--0').textContent = currentScore;
  document.getElementById('current--1').textContent = currentScore;

  // Declara onde os valores dos score seram atribuidos impossibilitando o valor ser atribuido errado
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}