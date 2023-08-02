import "./style.css";
import { COLORS } from "./constants";
import Helpers from "./helpers";
import Game from "./components/Game";

const initGame = () => {
    // Создание игры, генерация массива ответов, генерация ответа
    const gameInstance = new Game();

    const generateTask = () => {
        gameInstance.generateItemsArray();
        gameInstance.setAnswer();
    };

    generateTask();
    
    // Инициализация сцены
    const renderScene = () => {
        const SCENE = document.querySelector(".container");
        const color = Helpers.getRandomFromObject(COLORS)

        SCENE.innerHTML = gameInstance.renderScene();
        SCENE.style.background = color;

        const TASK = document.querySelector(".task")
        TASK.style.background = color

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
                if (event.target.textContent == gameInstance.answer) {
                    gameInstance.setScore();
                }
                generateTask();
                renderScene();
                renderButtons();
                addButtonClickHandlers();
            });
        });
    };

    addButtonClickHandlers();
};

initGame();

