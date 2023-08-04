const Helpers = {
    // Получаю ответ из массива чисел
    getRandomFromObject(object) {
        let array = Object.entries(object).map(([key, value]) => value);
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    },

    // Генерирую массив случайных чисел
    generateNumbersArray(count) {
        const newArray = Array.from({ length: count }, () => {
            if (count == 6) {
                return Math.floor(Math.random() * 990) + 10;
            } 
            if (count == 12) {
                return Math.floor(Math.random() * 9000) + 10;
            }
            if (count == 16) {
                return Math.floor(Math.random() * 9900) + 100;
            } 
            if (count == 25) {
                return Math.floor(Math.random() * 9000) + 1000;
            }  
        });
        return newArray;
    },

    // Таймер игры
    startTimer(obj) {
        let timer = 60;
        const timerDisplay = document.getElementById("timer");

        const interval = setInterval(() => {
            const minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
                obj.isFinished = true;
            }
        }, 1000);
    },

    // Отсчет до старта
    startCountdown(func) {
        let count = 3;
        const countdownElement = document.getElementById("countdown");

        countdownElement.innerHTML = count;

        const interval = setInterval(() => {
            count--;
            countdownElement.innerHTML = count;

            if (count <= 0) {
                clearInterval(interval);
                func()
            }
        }, 1000);
    },

    // Анимация свайпа в лево
    swipeAnimation(element) {
        element.classList.add("fade-out-left");
        const start = setTimeout(() => {
            element.classList.remove("fade-out-left");
            element.classList.add("fade-out-right");
        }, 500);
        const change = setTimeout(() => {
            element.classList.add("fade-in");
        }, 501);
        const end = setTimeout(() => {
            element.classList.remove("fade-out-right", "fade-in");
        }, 1000);
    },
};

export default Helpers;
