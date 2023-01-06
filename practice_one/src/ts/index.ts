import '../style/snake.scss';
import Food from '../modules/Food';
import Score from '../modules/Score';
import Stage from '../modules/Stage';
import Snake from '../modules/Snake';
import GameController from '../modules/GameController';

const game = new GameController();//游戏开始
game.init();

const snake  = new Snake();
console.log(snake.Y);
snake.Y = 45;
console.log(snake.Y);
// console.log(snake.X);
// snake.X = 45;
// console.log(snake.X);


// 对键盘按键值的存储没有效果
// setInterval(()=>{
//     console.log(game.direction);
// },1000);


// const f = new Food();
// console.log(f.X, f.Y);
// f.change();
// const s = new Score();
// for (let i = 1; i <= 7; i++) {
//     s.addScore();
//     console.log(s.score);



// }



