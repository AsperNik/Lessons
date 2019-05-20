/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc(){ 
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    counterInputs = document.querySelectorAll('number'),
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0,
    koef = 1;
    // Валидация calc

    totalValue.innerHTML = '0';

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000*koef;

        if (restDays.value == '' || persons.value == '' || restDays.value[0] == '0' || persons.value[0] == '0') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000*koef;

        if (persons.value == '' || restDays.value == '' || restDays.value[0] == '0' || persons.value[0] == '0') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        koef = this.options[this.selectedIndex].value;
        if (restDays.value == '' || persons.value == '' || restDays.value[0] == '0' || persons.value[0] == '0') {
            totalValue.innerHTML = 0;
        } else {
            total = (daysSum + personsSum)*4000*koef;
            totalValue.innerHTML = total;
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./src/parts/forms.js":
/*!****************************!*\
  !*** ./src/parts/forms.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
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
            inputPhone[i].value = inputPhone[i].value.replace(/[^0-9+]/,'');
    });
    }

    // Отправка формы
    function formExp(item) {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            item.appendChild(statusMessage);
            let input = item.getElementsByTagName('input');
            
            function sendData(data) {

                return new Promise(function (resolve, reject){
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
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                });
            }
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

        sendData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
        });
        
    }

    formExp(form);
    formExp(formContacts);
}

module.exports = forms;

/***/ }),

/***/ "./src/parts/modalWindows.js":
/*!***********************************!*\
  !*** ./src/parts/modalWindows.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalWindows() {
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
}

module.exports = modalWindows;

/***/ }),

/***/ "./src/parts/scrollW.js":
/*!******************************!*\
  !*** ./src/parts/scrollW.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scrollW() {
    let links = document.querySelectorAll('a[href*="#"]');

    for (let link of links) {
        link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const blockID = link.getAttribute('href');     
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
}

module.exports = scrollW;

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider(){
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display= 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlide(-1);
    });

    next.addEventListener('click', () => {
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs(){
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
}

module.exports = tabs;

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
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
setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/parts/calc.js"),
        forms = __webpack_require__(/*! ./parts/forms.js */ "./src/parts/forms.js"),
        modalWindows = __webpack_require__(/*! ./parts/modalWindows.js */ "./src/parts/modalWindows.js"),
        scrollW = __webpack_require__(/*! ./parts/scrollW.js */ "./src/parts/scrollW.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/parts/timer.js");

    calc();
    forms();
    modalWindows();
    scrollW();
    slider();
    tabs();
    timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map