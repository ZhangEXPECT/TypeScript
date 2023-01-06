import Stage from "./Stage";
// 定义蛇类
class Snake {

    stage: Stage;
    // 获取蛇
    element: HTMLElement;
    // 定义蛇的头部
    head: HTMLElement;
    // 定义蛇的身体
    body: HTMLCollection;



    constructor() {
        this.stage = new Stage();
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement; //获取第一个元素
        this.body = this.element.getElementsByTagName('div');
    }

    // 获取位置，改变位置
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {   //对X，Y值的合法范围进行规定
        if (this.X === value) {
            return;
        } else if (value < 0 || value >= this.stage.getStage()[0]) {
            throw new Error("蛇已撞墙");
        }

        // 不能掉头，判断蛇头的X坐标与第二节的坐标
        if (this.body[2] && (this.body[2] as HTMLElement).offsetLeft === value) { //发生调头
         
            // 两种情况
            if (value > this.X) {
                // 此时键盘想控制蛇向右走，但是处于掉头的情况不允许发生，仍保持向左
                value = this.X - 15;
            } else {
                value = this.X + 15;
            }
        }

        this.head.style.left = value + 'px';
        this.moveBody();

    }

    set Y(value: number) {
        if (this.Y === value) {
            return;
        } else if (value < 0 || value >= this.stage.getStage()[1]) {
            throw new Error("蛇已撞墙");
        }

        // 不能掉头，判断蛇头的X坐标与第二节的坐标
        if (this.body[2] && (this.body[2] as HTMLElement).offsetTop === value) { //发生调头

            // 两种情况
            if (value > this.Y) {
                value = this.Y - 15;
            } else {
                value = this.Y + 15;
            }
        }

        this.head.style.top = value + 'px';
        this.moveBody();

    }

    // 长度增加
    addBody() {
        // 在结束标签之前添加元素
        this.element.insertAdjacentHTML("beforeend", '<div></div>');
    }

    // 身体移动
    moveBody() {
        for (let i = this.body.length - 1; i > 0; i--) {

            /* 注：蛇已经开启定位，任意个页面元素的offsetLeft都会找寻离其最近的定位元素的left值来进行定位 */
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;

            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }
}

export default Snake;