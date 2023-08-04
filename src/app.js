import "./style.css";
import { COLORS } from "./constants";
import Helpers from "./helpers";
import Game from "./components/Game";
import rightImg from "./assets/right.png";
import wrongImg from "./assets/wrong.png";
import pointImg from "./assets/point.png";

const initGame = () => {
    const SCENE = document.querySelector(".container");

    // Создание игры, генерация массива ответов, генерация ответа
    const gameInstance = new Game();

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
        document.getElementById("bonus").innerHTML =
            [...new Array(gameInstance.bonus)].map(() => gameInstance.renderDot(1)).join("") +
            [...new Array(5 - gameInstance.bonus)].map(() => gameInstance.renderDot(0)).join("") +
            " x" +
            gameInstance.bonus;
    };

    const rerenderLevel = () => {
        generateTask();
        renderTask();
        renderButtons();
        addButtonClickHandlers();
    };

    const renderPreview = () => {
        SCENE.innerHTML = gameInstance.renderScene();
        renderTask();
        renderButtons();
        const buttons = document.querySelectorAll(".item");
        console.log(buttons);

        buttons.forEach((button) => {
            button.classList.remove("item");
            button.classList.add("item_nohover");
        });

        let tutorialElement = document.createElement("div");
        tutorialElement.classList.add("tutorial");
        tutorialElement.textContent = "Нажмите на экран, чтобы продолжить";
        SCENE.appendChild(tutorialElement);

        let pointElement = document.createElement("img");
        pointElement.src = pointImg;
        pointElement.classList.add("point-img");
        SCENE.appendChild(pointElement);

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
                if (event.target.textContent == gameInstance.answer) {
                    gameInstance.setScore();
                    gameInstance.rigthCount++;
                    answerImg(rightImg);
                } else {
                    answerImg(wrongImg);
                }
                let renderTimer = setTimeout(() => {
                    rerenderLevel();
                    if (document.getElementById("answer-img")) {
                        SCENE.removeChild(
                            document.getElementById("answer-img")
                        );
                    }
                    clearTimeout(renderTimer);
                }, 500);
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

    const answerImg = (src) => {
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("answer-img");
        img.id = "answer-img";
        SCENE.appendChild(img);
    };

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
