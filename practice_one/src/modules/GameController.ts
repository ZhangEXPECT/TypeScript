import Food from './Food';
import Score from './Score';
import Stage from './Stage';
import Snake from './Snake';

class GameController {

    snake: Snake;
    food: Food;
    score: Score;

    // 存储键盘按下的值
    direction: string = "D";


    // 游戏结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.score = new Score();
    }

    // 游戏开始的初始化方法
    init() {
        document.addEventListener('keydown', this.onkeydownHandler.bind(this));//解决
        this.move();
    }

    // 单独定义键盘按下的处理方法
    onkeydownHandler(e: KeyboardEvent) {

        // 保存键盘按下的值
        this.direction = e.key;//(错误处理) (产生原因：this指向了document，而不是全局对象)

    }

    // 控制蛇的移动
    move() {

        let X = this.snake.X;
        let Y = this.snake.Y;
 
        switch (this.direction) {
            case "W":
                case "w":
                Y -= 15;
                break;
            case "S":
                case "s":
                Y += 15;
                break;
            case "A":
                case "a":
                X -= 15;
                break;
            case "D":
                case "d":
                X += 15;
                break;
            default:
                console.log(`${this.direction}不是方向键`);
                break;
        }

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            alert('游戏结束！');
            this.isLive = false;
        }
         
        this.checkEat(X,Y);

        //不同等级速度变化
        this.isLive && setTimeout(this.move.bind(this), 100 - (this.score.level - 1) * 10);

    }

    // 判断是否迟到食物
    checkEat(X: number, Y: number) {

        if (this.food.X === X && this.food.Y === Y) {
            
            console.log('吃到食物！！');           
            this.score.addScore();
            this.food.change();
            this.snake.addBody();
        }
    }
}

export default GameController;  