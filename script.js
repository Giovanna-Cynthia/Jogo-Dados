document.addEventListener('DOMContentLoaded', function () {
  let scores, currentScore, activePlayer, playing;

  const jogar = function () {
    pontuacao = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    document.getElementById('pontuacao--0').textContent = '0';
    document.getElementById('pontuacao--1').textContent = '0';
    document.getElementById('atual--0').textContent = '0';
    document.getElementById('atual--1').textContent = '0';

    document.querySelector('.jogador--0').classList.remove('jogador--winner');
    document.querySelector('.jogador--1').classList.remove('jogador--winner');
    document.querySelector('.jogador--0').classList.add('jogador--atvio');
    document.querySelector('.jogador--1').classList.remove('jogador--ativo');
    document.querySelector('.dice').style.display = 'none';
  };

  jogar();

  const mudarJogador = function () {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.jogador--0').classList.toggle('jogador--active');
    document.querySelector('.jogador--1').classList.toggle('jogador--active');
  };

  document.querySelector('.btn--roll').addEventListener('click', function () {
    if (playing) {
      const dice = Math.floor(Math.random() * 6) + 1;
      const diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = `dice-${dice}.png`;

      if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      } else {
        mudarJogador();
      }
    }
  });

  document.querySelector('.btn--hold').addEventListener('click', function () {
    if (playing) {
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      if (scores[activePlayer] >= 100) {
        playing = false;
        document.querySelector('.dice').style.display = 'none';
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        mudarJogador();
      }
    }
  });

  document.querySelector('.btn--new').addEventListener('click', jogar);
});

/*document.addEventListener('DOMContentLoaded', function () {
  // Declaração das variáveis globais do jogo
  let scores, currentScore, activePlayer, playing;

  // Função de inicialização do jogo
  const init = function () {
    // Inicialização das variáveis do jogo
    scores = [0, 0]; // Pontuações dos jogadores
    currentScore = 0; // Pontuação atual do jogador
    activePlayer = 0; // Jogador ativo (0 ou 1)
    playing = true; // Indica se o jogo está em andamento ou não

    // Atualização da interface do usuário para os valores iniciais
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    // Remoção da classe de vencedor e adição da classe de jogador ativo
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');

    // Ocultar o elemento do dado
    document.querySelector('.dice').style.display = 'none';
  };

  // Chamar a função de inicialização quando a página for carregada
  init();

  // Função para alternar entre os jogadores
  const switchPlayer = function () {
    // Zerar a pontuação atual do jogador atual
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    currentScore = 0; // Atualizar a pontuação atual para 0
    activePlayer = activePlayer === 0 ? 1 : 0; // Alternar para o próximo jogador
    // Alternar as classes de jogador ativo entre os jogadores
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  };

  // Evento de clique no botão "Roll dice" (rolar o dado)
  document.querySelector('.btn--roll').addEventListener('click', function () {
    if (playing) { // Verificar se o jogo está em andamento
      // Gerar um número aleatório entre 1 e 6 para simular o lançamento do dado
      const dice = Math.floor(Math.random() * 6) + 1;
      const diceDOM = document.querySelector('.dice'); // Selecionar o elemento do dado na página
      diceDOM.style.display = 'block'; // Mostrar o elemento do dado
      diceDOM.src = `dice-${dice}.png`; // Alterar a imagem do dado de acordo com o resultado

      if (dice !== 1) { // Se o número do dado não for 1
        currentScore += dice; // Adicionar o valor do dado à pontuação atual do jogador
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; // Atualizar a pontuação atual na interface do usuário
      } else { // Se o número do dado for 1
        switchPlayer(); // Alternar para o próximo jogador
      }
    }
  });

  // Evento de clique no botão "Hold" (manter a pontuação atual)
  document.querySelector('.btn--hold').addEventListener('click', function () {
    if (playing) { // Verificar se o jogo está em andamento
      scores[activePlayer] += currentScore; // Adicionar a pontuação atual à pontuação total do jogador ativo
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; // Atualizar a pontuação total na interface do usuário

      if (scores[activePlayer] >= 100) { // Se a pontuação total do jogador ativo for maior ou igual a 100
        playing = false; // Finalizar o jogo
        document.querySelector('.dice').style.display = 'none'; // Ocultar o elemento do dado
        // Adicionar classe de vencedor ao jogador ativo
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        // Remover classe de jogador ativo
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      } else { // Se a pontuação total do jogador ativo for menor que 100
        switchPlayer(); // Alternar para o próximo jogador
      }
    }
  });

  // Evento de clique no botão "New game" (novo jogo)
  document.querySelector('.btn--new').addEventListener('click', init);
}); */

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
  if (scores[activePlayer] >= 100) {
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
//
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  // Se a vez for passada o current-score do jogador sera zerado
  currentScore = 0;
  document.getElementById('current--0').textContent = currentScore;
  document.getElementById('current--1').textContent = currentScore;

  //Declara onde os valores dos score seram atribuidos impossibilitando o valor ser atribuido errado
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}
// Evento de clique no botão "New game" (novo jogo)
document.querySelector('.btn--new').addEventListener('click', jogar);
