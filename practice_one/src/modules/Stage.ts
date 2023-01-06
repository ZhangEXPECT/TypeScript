// 定义stage类，获取当前大小
class Stage {
    
    element: HTMLElement;

    constructor() {
        // 感叹号表示元素已经确定存在
        this.element = document.getElementById('stage')!;
    }

    /**
     *  公共方法，获取stage的宽高
     */
    public getStage() {
        let res: [number, number];
        //当属性设置为百分比时，通过clientWidth获取宽度
        return res = [this.element.clientWidth, this.element.clientHeight];
    }
}
export default Stage;