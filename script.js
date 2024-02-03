// script.js
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('timer');
   
    const revealDate = new Date('2024-03-14T18:28:00-04:00').getTime();


    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = revealDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            document.getElementById('punchline').style.display = 'block';
        }
    }, 1000);
});
