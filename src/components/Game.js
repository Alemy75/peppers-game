import { ANIMATIONS, SCORE_STEP } from "../constants";
import Helpers from "../helpers";
import { COLORS } from "../constants";

class Game {
    constructor() {
        // Счет
        this.score = 0;
        // Уровень
        this.level = 1;
        // Бонус
        this.bonus = 1;
        // Массив чисел
        this.itemsArray = [];
        // Правильный ответ
        this.answer = null;
        // Уровень сетки вариантов ответа
        this.gridLevel = "grid_6";
        // Закончена ли игра
        this.isFinished = false;
        // Правильные ответы
        this.rigthCount = 0;
        // Ответы
        this.answerCount = 0;
    }

    // Генерация массива в зависимости от сложности
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

    // Функция создания правильного ответа
    setAnswer() {
        this.answer =
            this.itemsArray[Math.floor(Math.random() * this.itemsArray.length)];
    }

    // Функция счета
    setScore() {
        this.score += SCORE_STEP * this.bonus;
        if (this.level < 9) {
            this.level += 1;
        }
        if (this.bonus < 5) {
            this.bonus += 1;
        }
    }

    // Функция запуска таймера игры в констекте инстанса
    startTimer() {
        Helpers.startTimer(this);
    }

    // Отрисовка сцены
    renderScene() {
        return `
            <aside class="statistics">
                <div class="statistics__item">
                    <span class="statistics__top">ВРЕМЯ</span>
                    <span id="timer" class="statistics__bot">1:00</span>
                </div>
                <div class="statistics__item">
                    <span class="statistics__top">УРОВЕНЬ</span>
                    <span id="level" class="statistics__bot">${this.level}/9</span>
                </div>
                <div class="statistics__item">
                    <span class="statistics__top">ОЧКИ</span>
                    <span id="score" class="statistics__bot">${this.score}</span>
                </div>
                <div class="statistics__item">
                    <span class="statistics__top">БОНУС</span>
                    <span id="bonus" class="statistics__bot">x${this.bonus}</span>
                </div>
            </aside>
            <section class="playground"></section>
        `;
    }

    // Отрисовка задания
    renderTask() {
        return `
            <div class="task">Найдите указанное число: <span>${this.answer}</span></div>
            <div class="grid ${this.gridLevel}"></div>
        `;
    }

    // Отрисовка элемента кнопки
    renderItem(item) {
        return `
            <button class="item ${
                this.level > 2 && Helpers.getRandomFromObject(ANIMATIONS)
            }" id=${item} style="background: ${Helpers.getRandomFromObject(
                COLORS
            )};">
                <span>${item}</span> 
            </button>
        `;
    }

    // Отрисовка  результатов
    renderResults() {
        return `
        <section class="results">
            <div class="results__header">Ваши результаты</div>
            <div class="results__items">
                <div class="results__items_left">
                    <span>Текущий результат: </span>
                    <span>Верных ответов: </span>
                    <span>Точность ответов: </span>
                </div>
                <div class="results__items_right">
                    <span>${this.score}</span>
                    <span>${this.rigthCount}/${this.answerCount}</span>
                    <span>${(
                        (this.rigthCount / this.answerCount) *
                        100
                    ).toFixed(1)}%</span>
                </div>
                <button class="results__button">НАЧАТЬ ЗАНОВО</button>
            </div>
        </section>
        `;
    }

    // Отрисовка отсчета старта
    renderCountdown() {
        return `
            <span id="countdown" class="countdown">3</span>
        `;
    }

    // Отрисовка точки бонуса
    renderDot() {
        let dot = `<span class="dot"></span>`;
        let filledDot = `<span class="dot dot_filled"></span>`;
        return (
            [...new Array(this.bonus)].map(() => filledDot).join("") +
            [...new Array(5 - this.bonus)].map(() => dot).join("") +
            " x" +
            this.bonus
        );
    }
}

export default Game;
