// 定义计分板类
class Score {

    public score = 0; //公共变量
    public level = 1;

    maxLevel: number;
    upScore: number;

    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    constructor(maxLevel: number = 5, upScore: number = 2) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 已经设置分数、等级的初始值，直接编写相关方法
    addScore() {

        this.scoreElement.innerHTML = ++this.score + ''

        // 当分数达到边界值时 调用升级方法 
        switch (this.level > 0) {
            case this.level >= 1 && this.score < 2:
                this.upScore = 3;
                break;
            case this.level >= 2 && this.level < 3:
                this.upScore += 6;
                break;
            case this.level >= 3 && this.level < 4:
                this.upScore += 9;
                break;
            case this.level >= 4 && this.level < 5:
                this.upScore += 12;
                break;
            default:
                this.level = 1
                break;
        }

        console.log("当前升级需要吃" + this.upScore + "个");
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }

    }

    levelUp() {

        if (this.level <= this.maxLevel) {
            this.levelElement.innerHTML = ++this.level + '';
        }

    }

}

export default Score;