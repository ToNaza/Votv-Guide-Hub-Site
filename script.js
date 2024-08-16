const media = [
    './media_file/KerfurPhoto2.jpg',
    './media_file/майнинг ферма_фото1.jpg',
    './media_file/Ariral_2.png',
    './media_file/генераторы_фото1.jpg',
    './media_file/prevu.mp4' 
];

let currentIndex = 0;

function changeMedia() {
    const container = document.getElementById('container');
    const mediaElement = media[currentIndex];

    if (mediaElement.endsWith('.mp4')) {
        container.innerHTML = `<video id="slideshow" autoplay muted loop style="width: 100%; max-width: 500px;">
                                    <source src="${mediaElement}" type="video/mp4">
                                    Ваш браузер не підтримує відео.
                               </video>`;
    } else {
        container.innerHTML = `<img id="slideshow" src="${mediaElement}" alt="Слайдшоу" style="width: 100%; max-width: 500px;">`;
    }

    currentIndex = (currentIndex + 1) % media.length;
}

setInterval(changeMedia, 2500);



document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow');
    const snowflakes = 100;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.width = Math.random() * 10 + 2 + 'px';
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDelay = Math.random() * 10 + 's';

        snowContainer.appendChild(snowflake);
        
        // Optionally remove the snowflake after its animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            createSnowflake(); // Create a new snowflake when the old one finishes falling
        });
    }

    for (let i = 0; i < snowflakes; i++) {
        createSnowflake();
    }
});