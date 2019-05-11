window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
    }

    info.addEventListener('click',  (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if ( target == tab[i] ) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    
    //modal windows
    let moreInfo = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    more = document.querySelectorAll('.more');
    function modalWindow(a) {
        for (let k of a) {
            k.addEventListener('click',  () => {
                overlay.style.display = 'block';
                k.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
        });

            close.addEventListener('click', () => {
                overlay.style.display = 'none';
                k.classList.remove('more-splash');
                document.body.style.overflow = '';
            });
        }
    }
    modalWindow(moreInfo);
    modalWindow(more);
    
    // Timer

    let deadline = '2019-05-05';

    function getTimeRemainig(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()) + ((new Date().getTimezoneOffset())*1000*60),
            seconds = Math.floor((t/1000) % 60 ),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
                     
            // Fix time < 10
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemainig(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    //Scroll
    let links = document.querySelectorAll('a[href*="#"]');

    for (let link of links) {
        link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const blockID = link.getAttribute('href');
        console.log(blockID);
        if (blockID === '#price') {
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
        } else {
            document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
      });
    }
   
    setClock('timer', deadline);

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы  с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        formContacts = document.querySelector('.formContacts'),
        statusMessage = document.createElement('div'),
        inputPhone = document.getElementsByName('phone');

    statusMessage.classList.add('status');
    
    // Валидация 
    for (let i = 0; i < inputPhone.length; i++){
        inputPhone[i].addEventListener('input',() => {
            inputPhone[i].value = inputPhone[i].value.replace(/[^0-9]/,'');
    });
    }

    // Отправка формы
    function formExp(item) {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            item.appendChild(statusMessage);
            let input = item.getElementsByTagName('input');
                

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            


            let formData = new FormData(item);
            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', () => {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

           

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    }

    formExp(form);
    formExp(formContacts);
});


