import Stage from "./Stage";
// 定义food类，通过类创建对象
class Food {
    //定义一个属性指向页面中的food元素
    element: HTMLElement;
    constructor() {
        // 获取页面元素
        this.element = document.getElementById('food')!;
    }

    // 获取元素坐标
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    // 被吃后修改位置
    change() {
        const s = new Stage();
        console.log(s.getStage());
        // 食物left最小是0，最大stage宽度-food宽度
        // 食物需要保证是蛇移动长度的整数倍
        let left = Math.round(Math.random() * (s.getStage()[0] - 15) / 15) * 15;
        let top = Math.round(Math.random() * (s.getStage()[1] - 15) / 15) * 15;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
export default Food;