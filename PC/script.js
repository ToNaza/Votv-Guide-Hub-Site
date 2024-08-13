document.getElementById("OpenVop-1").addEventListener("click", function() {
    document.getElementById("Vop-1").classList.add("open")
})

document.getElementById("Vop-1").addEventListener("dblclick", function() {
    document.getElementById("Vop-1").classList.remove("open")
})

document.getElementById("OpenVop-2").addEventListener("click", function() {
    document.getElementById("Vop-2").classList.add("open")
})

document.getElementById("Vop-2").addEventListener("dblclick", function() {
    document.getElementById("Vop-2").classList.remove("open")
})

document.getElementById("OpenVop-3").addEventListener("click", function() {
    document.getElementById("Vop-3").classList.add("open")
})

document.getElementById("Vop-3").addEventListener("dblclick", function() {
    document.getElementById("Vop-3").classList.remove("open")
})

document.getElementById("OpenVop-4").addEventListener("click", function() {
    document.getElementById("Vop-4").classList.add("open")
})

document.getElementById("Vop-4").addEventListener("dblclick", function() {
    document.getElementById("Vop-4").classList.remove("open")
})

document.getElementById("OpenVop-5").addEventListener("click", function() {
    document.getElementById("Vop-5").classList.add("open")
})

document.getElementById("Vop-5").addEventListener("dblclick", function() {
    document.getElementById("Vop-5").classList.remove("open")
})

document.getElementById("OpenVop-6").addEventListener("click", function() {
    document.getElementById("Vop-6").classList.add("open")
})

document.getElementById("Vop-6").addEventListener("dblclick", function() {
    document.getElementById("Vop-6").classList.remove("open")
})

 document.getElementById("OpenVop-7").addEventListener("click", function() {
     document.getElementById("Vop-7").classList.add("open")
 })

 document.getElementById("Vop-7").addEventListener("dblclick", function() {
     document.getElementById("Vop-7").classList.remove("open")
 })

document.getElementById("OpenVop-8").addEventListener("click", function() {
    document.getElementById("Vop-8").classList.add("open")
})

document.getElementById("Vop-8").addEventListener("dblclick", function() {
    document.getElementById("Vop-8").classList.remove("open")
})
      

        document.getElementById("OpenMovy").addEventListener("click", function() {
            document.getElementById("Mova").classList.add("open")
        });
        
        document.getElementById("Mova").addEventListener("dblclick", function() {
            document.getElementById("Mova").classList.remove("open");
        });

        document.getElementById("okO").addEventListener("click", function() {
            document.getElementById("Soop").classList.add("open")
        });
        
        document.getElementById("SoopOFF").addEventListener("click", function() {
            document.getElementById("Soop").classList.remove("open");
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


        document.getElementById("AvtoON").addEventListener("click", function() {
            document.getElementById("Roza").classList.add("open")
        });
        
        document.getElementById("Roza").addEventListener("dblclick", function() {
            document.getElementById("Roza").classList.remove("open");
        });


        document.getElementById("HelperON").addEventListener("click", function() {
            document.getElementById("Help").classList.add("open")
        });
        
        document.getElementById("Help").addEventListener("dblclick", function() {
            document.getElementById("Help").classList.remove("open");
        });

        document.getElementById("okO").addEventListener("click", function() {
            document.getElementById("Soop").classList.add("open")
        });

        document.getElementById("okO2").addEventListener("click", function() {
            document.getElementById("Soop").classList.add("open")
        });
        
        document.getElementById("okO3").addEventListener("click", function() {
            document.getElementById("Soop").classList.add("open")
        });
        
        document.getElementById("SoopOFF").addEventListener("dblclick", function() {
            document.getElementById("Soop").classList.remove("open");
        });


        document.getElementById("VoprosON").addEventListener("click", function() {
            document.getElementById("Vopros").classList.add("open")
        });

        document.getElementById("VoprosON2").addEventListener("click", function() {
            document.getElementById("Vopros").classList.add("open")
        });

        document.getElementById("VoprosON3").addEventListener("click", function() {
            document.getElementById("Vopros").classList.add("open")
        });

        document.getElementById("VoprosON4").addEventListener("click", function() {
            document.getElementById("Vopros").classList.add("open")
        });

        document.getElementById("VoprosON5").addEventListener("click", function() {
            document.getElementById("Vopros").classList.add("open")
        });

        document.getElementById("VoprosON6").addEventListener("click", function() {
            document.getElementById("Vopros").classList.add("open")
        });

        document.getElementById("VoprosON8").addEventListener("click", function() {
            document.getElementById("Vopros").classList.add("open")
        });
        
        document.getElementById("Vopros").addEventListener("dblclick", function() {
            document.getElementById("Vopros").classList.remove("open");
        });

        
  
 
        async function sendData(message) {
            try {
                return await fetch(`https://api.telegram.org/bot7178253382:AAG2kdv8CeNgydxNm1GR3iWBXfGSw185FiU/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: -1002189382453,
                        text: message
                    }),
                });
            } catch (error) {
                return error;
            }
        }

        let Username = document.querySelector('#Username');
        let email = document.querySelector('#email');
        let Text = document.querySelector('#Text');
        let btnsubmit = document.querySelector("#MyForm button");

        btnsubmit.addEventListener("click", function (event) {
            event.preventDefault();
            btnsubmit.disabled = true; // Disable the button immediately after click

            let message = `⚙️Сообщение к службе поддержки: \nUsername- ${Username.value} \nEmail- ${email.value} \nПовідомлення- ${Text.value}`;
            sendData(message)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // Handle the response data if needed
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });


        function checkInputs() {
            // Отримуємо значення полів вводу
            var username = document.getElementById('Username').value.trim();
            var email = document.getElementById('email').value.trim();
            var text = document.getElementById('Text').value.trim();

            // Перевіряємо, чи хоча б одне з полів (Username або Email) та поле Text заповнені
            var isValid = (username !== '' || email !== '') && text !== '';

            // Активуємо кнопку з типом "submit", якщо валідні поля
            document.getElementById('okO').disabled = !isValid;
        }

        // Додатково перевіряємо стан кнопки при завантаженні сторінки
        document.addEventListener('DOMContentLoaded', checkInputs);

// Початок - Запропунування ідеї

async function sendDataNew(message) {
    try {
        return await fetch(`https://api.telegram.org/bot7178253382:AAG2kdv8CeNgydxNm1GR3iWBXfGSw185FiU/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: -1002189382453,
                text: message
            }),
        });
    } catch (error) {
        return error;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let Username2 = document.querySelector('#Username2');
    let email2 = document.querySelector('#email2');
    let Text2 = document.querySelector('#Text2');
    let btnsubmit2 = document.querySelector("#okO2");

    btnsubmit2.addEventListener("click", function(event) {
        event.preventDefault();
        btnsubmit2.disabled = true; // Disable the button immediately after click

        let message = `💡Идеи что добавить на сайт: \nUsername- ${Username2.value} \nEmail- ${email2.value} \nПовідомлення- ${Text2.value}`;
        sendDataNew(message)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle the response data if needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    function checkInputsNew() {
        // Отримуємо значення полів вводу
        var username = Username2.value.trim();
        var emailValue = email2.value.trim();
        var text = Text2.value.trim();

        // Перевіряємо, чи хоча б одне з полів (Username або Email) та поле Text заповнені
        var isValid = (username !== '' || emailValue !== '') && text !== '';

        // Активуємо кнопку з типом "submit", якщо валідні поля
        btnsubmit2.disabled = !isValid;
    }

    // Додатково перевіряємо стан кнопки при завантаженні сторінки
    checkInputsNew();

    // Add event listeners to input fields
    Username2.addEventListener('keyup', checkInputsNew);
    email2.addEventListener('keyup', checkInputsNew);
    Text2.addEventListener('keyup', checkInputsNew);
});


//Запитання

async function sendData3(message) {
    try {
        return await fetch(`https://api.telegram.org/bot7178253382:AAG2kdv8CeNgydxNm1GR3iWBXfGSw185FiU/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: -1002189382453,
                text: message
            }),
        });
    } catch (error) {
        return error;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let Username3 = document.querySelector('#Username3');
    let email3 = document.querySelector('#email3');
    let Text3 = document.querySelector('#Text3');
    let btnsubmit3 = document.querySelector("#okO3");

    btnsubmit3.addEventListener("click", function(event) {
        event.preventDefault();
        btnsubmit3.disabled = true; // Disable the button immediately after click

        let message = `❔Вопрос:\nПовідомлення- ${Text3.value}\n\nUsername- ${Username3.value} \nEmail- ${email3.value} `;
        sendData3(message)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle the response data if needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    function checkInputs3() {
        // Отримуємо значення полів вводу
        var username = Username3.value.trim();
        var emailValue = email3.value.trim();
        var text = Text3.value.trim();

        // Перевіряємо, чи хоча б одне з полів (Username або Email) та поле Text заповнені
        var isValid = (username !== '' || emailValue !== '') && text !== '';

        // Активуємо кнопку з типом "submit", якщо валідні поля
        btnsubmit3.disabled = !isValid;
    }

    // Додатково перевіряємо стан кнопки при завантаженні сторінки
    checkInputs3();

    // Add event listeners to input fields
    Username3.addEventListener('keyup', checkInputs3);
    email3.addEventListener('keyup', checkInputs3);
    Text3.addEventListener('keyup', checkInputs3);
});


