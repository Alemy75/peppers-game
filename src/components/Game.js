import { ANIMATIONS, SCORE_STEP } from "../constants";
import Helpers from "../helpers";
import { COLORS } from "../constants";

class Game {
    constructor() {
        this.score = 0;
        this.level = 1;
        this.bonus = 1;
        this.itemsArray = [];
        this.answer = null;
        this.gridLevel = "grid_6";
    }

    generateItemsArray() {
        switch (this.level) {
            case 1:
            case 2:
            case 3:
                this.itemsArray = Helpers.generateNumbersArray(6);
                break;
            case 4:
            case 5:
                this.gridLevel = "grid_12";
                this.itemsArray = Helpers.generateNumbersArray(12);
                break;
            case 6:
            case 7:
                this.gridLevel = "grid_16";
                this.itemsArray = Helpers.generateNumbersArray(16);
                break;
            case 8:
            case 9:
                this.gridLevel = "grid_25";
                this.itemsArray = Helpers.generateNumbersArray(25);
                break;
            default:
                this.gridLevel = "grid_6";
                this.itemsArray = Helpers.generateNumbersArray(6);
                break;
        }
    }

    setAnswer() {
        this.answer =
            this.itemsArray[Math.floor(Math.random() * this.itemsArray.length)];
    }

    setScore() {
        this.score += SCORE_STEP * this.bonus;
        if (this.level < 9) {
            this.level += 1;
        }
        if (this.bonus < 5) {
            this.bonus += 1;
        }
    }

    renderScene() {
        return `
            <aside class="statistics">
                <div class="statistics__item">
                    <span class="statistics__top">ВРЕМЯ</span>
                    <span id="timer" class="statistics__bot">1:00</span>
                </div>
                <div class="statistics__item">
                    <span class="statistics__top">УРОВЕНЬ</span>
                    <span class="statistics__bot">${this.level}/9</span>
                </div>
                <div class="statistics__item">
                    <span class="statistics__top">ОЧКИ</span>
                    <span class="statistics__bot">${this.score}</span>
                </div>
                <div class="statistics__item">
                    <span class="statistics__top">БОНУС</span>
                    <span class="statistics__bot">x${this.bonus}</span>
                </div>
            </aside>
            <section class="playground">
                <div class="task">Найдите указанное число: <span>${this.answer}</span></div>
                <div class="grid ${this.gridLevel}"></div>
            </section>
        `;
    }

    renderItem(item) {
        return `
            <button class="item ${this.level > 2 && Helpers.getRandomFromObject(ANIMATIONS)}" id=${item} style="background: ${Helpers.getRandomFromObject(
                COLORS
            )};">
                <span>${item}</span> 
            </button>
        `;
    }
}

export default Game;
