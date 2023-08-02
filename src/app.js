import "./style.css";
import { COLORS } from "./constants";
import Helpers from "./helpers";
import Game from "./components/Game";

const initGame = () => {
    const SCENE = document.querySelector(".container");

    // Создание игры, генерация массива ответов, генерация ответа
    const gameInstance = new Game();

    const generateTask = () => {
        gameInstance.generateItemsArray();
        gameInstance.setAnswer();
    };

    generateTask();

    const renderTask = () => {
        const color = Helpers.getRandomFromObject(COLORS);
        SCENE.style.background = color;

        const PLAYGROUND = document.querySelector(".playground");
        PLAYGROUND.innerHTML = gameInstance.renderTask();

        const TASK = document.querySelector(".task");
        TASK.style.background = color;

        document.getElementById('level').textContent = gameInstance.level + '/9'
        document.getElementById('score').textContent = gameInstance.score 
        document.getElementById('bonus').textContent = 'x' + gameInstance.bonus
    };

    // Инициализация сцены
    const renderScene = () => {
        SCENE.innerHTML = gameInstance.renderScene();
        renderTask();
    };

    renderScene();

    // Отрисовка кнопок
    const renderButtons = () => {
        const itemsGrid = document.querySelector(".grid");
        const html = gameInstance.itemsArray
            .map((item) => {
                return gameInstance.renderItem(item);
            })
            .join("");
        itemsGrid.innerHTML = html;
    };

    renderButtons();
    // Обработка событий кнопок
    const addButtonClickHandlers = () => {
        const itemButtons = document.querySelectorAll(".item");
        itemButtons.forEach((item) => {
            item.addEventListener("click", (event) => {
                const PLAYGROUND = document.querySelector(".playground")              
                Helpers.swipeAnimation(PLAYGROUND)
                setTimeout(() => {                  
                    
                    if (event.target.textContent == gameInstance.answer) {
                        gameInstance.setScore();
                    }
                    generateTask();
                    renderTask();
                    renderButtons();
                    addButtonClickHandlers();
                }, 500)
            });
        });
    };

    addButtonClickHandlers();
};

initGame();
Helpers.startTimer();
