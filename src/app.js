import "./style.css";
import { COLORS } from "./constants";
import Helpers from "./helpers";
import Game from "./components/Game";
import rightImg from "./assets/right.png";
import wrongImg from "./assets/wrong.png";
import pointImg from "./assets/point.png";

// Функция запуска игры
const initGame = () => {

    // Функция создания сцены
    const createScene = () => {
        const gameScene = document.createElement("div");
        gameScene.classList.add("container");
        gameScene.classList.add("shadow-animation");
        const body = document.querySelector("body");
        body.innerHTML = ''
        body.appendChild(gameScene);
    };

    createScene();

    const SCENE = document.querySelector(".container");

    // Создание игры
    const gameInstance = new Game();

    // Функция генерации массива ответов, генерация ответа
    const generateTask = () => {
        gameInstance.generateItemsArray();
        gameInstance.setAnswer();
    };

    generateTask();

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

    // Отрисовка задания
    const renderTask = () => {
        const color = Helpers.getRandomFromObject(COLORS);
        SCENE.style.background = color;

        const PLAYGROUND = document.querySelector(".playground");
        PLAYGROUND.innerHTML = gameInstance.renderTask();

        const TASK = document.querySelector(".task");
        TASK.style.background = color;

        document.getElementById("level").textContent =
            gameInstance.level + "/9";
        document.getElementById("score").textContent = gameInstance.score;
        document.getElementById("bonus").innerHTML = gameInstance.renderDot();
    };

    // Перерисовка уровня
    const rerenderLevel = () => {
        generateTask();
        renderTask();
        renderButtons();
        addButtonClickHandlers();
    };

    // Отрисовка начального экрана
    const renderPreview = () => {
        // Создания экземпляра уровня
        SCENE.innerHTML = gameInstance.renderScene();
        gameInstance.itemsArray = [76, 32, 158, 34, 665, 31]
        gameInstance.answer = 76
        renderTask();
        renderButtons();
        const buttons = document.querySelectorAll(".item");
        
        buttons.forEach((button) => {
            button.classList.remove("item");
            button.classList.add("item_nohover");
        });

        // Генерация подписи и картинки
        let tutorialElement = document.createElement("div");
        tutorialElement.classList.add("tutorial");
        tutorialElement.textContent = "Нажмите на экран, чтобы продолжить";
        SCENE.appendChild(tutorialElement);

        let pointElement = document.createElement("img");
        pointElement.src = pointImg;
        pointElement.classList.add("point-img");
        SCENE.appendChild(pointElement);

        // Добавление обработчика клика на экран
        const handleClick = () => {
            SCENE.style.opacity = 0;
            setTimeout(() => {
                SCENE.innerHTML = gameInstance.renderCountdown();
                Helpers.startCountdown(() => {
                    SCENE.style.opacity = 0;
                    setTimeout(() => {
                        renderScene();
                        rerenderLevel();
                        SCENE.style.opacity = 1;
                    }, 500);
                });
                SCENE.style.opacity = 1;
            }, 500);

            SCENE.removeEventListener("click", handleClick);
        };
        const TASK = document.querySelector('.task')
        TASK.style.background = COLORS.BLUE
        SCENE.style.background = COLORS.BLUE
        SCENE.addEventListener("click", handleClick);
    };

    renderPreview();

    // Инициализация сцены
    const renderScene = () => {
        SCENE.innerHTML = gameInstance.renderScene();
        renderTask();
        const STATISTICS = document.querySelector(".statistics");
        setTimeout(() => {
            STATISTICS.classList.add("statistics_show");
        }, 100);

        gameInstance.startTimer();
    };

    // Обработка событий кнопок
    const addButtonClickHandlers = () => {
        const itemButtons = document.querySelectorAll(".item");
        itemButtons.forEach((item) => {
            item.addEventListener("click", (event) => {
                const PLAYGROUND = document.querySelector(".playground");
                Helpers.swipeAnimation(PLAYGROUND);
                gameInstance.answerCount++;

                // Проверка правильности ответа
                if (event.target.textContent == gameInstance.answer) {
                    gameInstance.setScore();
                    gameInstance.rigthCount++;
                    answerImg(rightImg);
                } else {
                    answerImg(wrongImg);
                }

                // Отрисовка картинки ответа
                let renderTimer = setTimeout(() => {
                    rerenderLevel();
                    if (document.getElementById("answer-img")) {
                        SCENE.removeChild(
                            document.getElementById("answer-img")
                        );
                    }
                    clearTimeout(renderTimer);
                }, 500);

                // Отрисовка результатов
                if (gameInstance.isFinished) {
                    SCENE.style.opacity = 0;
                    setTimeout(() => {
                        renderFinal();
                        SCENE.style.opacity = 1;
                    }, 500);
                }
            });
        });
    };

    // Функция отрисовки картинки ответа
    const answerImg = (src) => {
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("answer-img");
        img.id = "answer-img";
        SCENE.appendChild(img);
    };

    // Функция открисовки результатов
    const renderFinal = () => {
        SCENE.innerHTML = gameInstance.renderResults();
        SCENE.style.background = "white";
        const button = document.querySelector(".results__button");
        button.addEventListener("click", () => {
            SCENE.style.opacity = 0;
            setTimeout(() => {
                initGame();
                SCENE.style.opacity = 1;
            }, 500);
        });
    };
};

initGame();
