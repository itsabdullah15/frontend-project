const board = document.querySelector('.board')
const squares = document.querySelectorAll('.square')
const message = document.querySelector('.message')
const players = ['X', 'O'];

let currentPlayer = players[0];


const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

