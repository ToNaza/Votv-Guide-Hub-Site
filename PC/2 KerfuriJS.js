let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

document.getElementById("OpenMovy").addEventListener("click", function() {
    document.getElementById("Mova").classList.add("open")
});

document.getElementById("Mova").addEventListener("dblclick", function() {
    document.getElementById("Mova").classList.remove("open");
});

document.getElementById("OpenMovy").addEventListener("click", function() {
    document.getElementById("Mova2").classList.add("open")
});

document.getElementById("Mova2").addEventListener("dblclick", function() {
    document.getElementById("Mova2").classList.remove("open");
});

document.getElementById("OpenMovy").addEventListener("click", function() {
    document.getElementById("Mova3").classList.add("open")
});

document.getElementById("Mova3").addEventListener("dblclick", function() {
    document.getElementById("Mova3").classList.remove("open");
});


document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    var playToggle = document.getElementById('toggle-play');
    var volumeControl = document.getElementById('volume');

    // Automatically play the music on page load
    audio.play();

    // Set the initial volume to 20%
    audio.volume = 0.02;
    volumeControl.value = 0.02;

    // Play/Pause toggle functionality
    playToggle.addEventListener('change', function() {
        if (playToggle.checked) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Volume control functionality
    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});


function switchLanguage(langId) {
    const sections = document.querySelectorAll('.lang-section');
    sections.forEach(section => {
        if (section.id === langId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}



document.getElementById('musicDiv').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.currentTime = 0; // Скидаємо аудіо до початку
    audio.play();
});