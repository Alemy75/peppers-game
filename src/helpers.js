const Helpers = {
    getRandomFromObject(object) {
        let array = Object.entries(object).map(([key, value]) => value);
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    },

    generateNumbersArray(count) {
        const newArray = Array.from({ length: count }, () => {
            return Math.floor(Math.random() * 900) + 100;
        });
        return newArray;
    },
    startTimer() {
        let timer = 60;
        const timerDisplay = document.getElementById("timer");

        const interval = setInterval(() => {
            const minutes = Math.floor(timer / 60);
            let seconds = timer % 60;

            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
                alert("Игра окончена");
            }
        }, 1000);
    },
    swipeAnimation(element) {
        element.classList.add("fade-out-left");
        setTimeout(() => {
            element.classList.remove("fade-out-left");
            element.classList.add("fade-out-right");
        }, 500);
        setTimeout(() => {
            element.classList.add("fade-in");
        }, 501);
        setTimeout(() => {
            element.classList.remove("fade-out-right", "fade-in");
        }, 1000);
    },
};

export default Helpers;
