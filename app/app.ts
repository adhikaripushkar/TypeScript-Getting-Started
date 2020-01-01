/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Utility.getInputValue('playername');

  const problemCount: number = Number(Utility.getInputValue('problemCount'));
  const factor: number = Number(Utility.getInputValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});

// /// <reference path="player.ts" />
// // ///<reference path ="utility.ts"/>
// ///<reference path ="game.ts"/>

// let newGame : Game;

// document.getElementById('startGame')!.addEventListener('click', () => {
//     const player: Player = new Player();

//     player.name = Utility.getInputValue('playername');

//     const problemCount: number = Number(Utility.getInputValue('problemCount'));
//     const factor: number = Number(Utility.getInputValue('factor'));

//     newGame = new Game(player, problemCount, factor);
//     newGame.displayGame();
// });

// document.getElementById('calculate')!.addEventListener('click', () => {
//     newGame.calculateScore();
// })

// function startGame() {

//     let playerName: string  | undefined =  Utility.getInputValue('playername');
//     logPlayer(playerName);
    
//     postScore(10,  playerName)
// }

// function logPlayer(name: string = 'MultiMath Player'): void {
//     console.log(`New Game Starting for Player: ${name}`);
// }



// function postScore(score: number, playerName: string = 'MultiMath Player'): void {

//     let logger : (value: string) => void;

//     if(score < 0){
//         logger = logError;
//     }
//     else {
//         logger = logMessage;

//     }
//     const scoreElement: HTMLElement | null  = document.getElementById('postedScores');
//     scoreElement!.innerText = `${score} - ${playerName}`;
// }
// document.getElementById('startGame')!.addEventListener('click',  startGame);

// const  logMessage = (message: string)  => console.log(message);

// function logError(err: string): void {
//     console.error(err);
// }

// const firstPlayer  : Player = new Player();
// firstPlayer.name = 'Lanier';
// console.log(firstPlayer.formatName());