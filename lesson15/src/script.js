window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let calc = require('./parts/calc.js'),
        forms = require('./parts/forms.js'),
        modalWindows = require('./parts/modalWindows.js'),
        scrollW = require('./parts/scrollW.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js');

    calc();
    forms();
    modalWindows();
    scrollW();
    slider();
    tabs();
    timer();
});