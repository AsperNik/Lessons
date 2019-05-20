function calc(){ 
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    counterInputs = document.querySelectorAll('.counter-block-input'),
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0,
    koef = 1;
    // Валидация calc

    for (let i = 0; i < counterInputs.length; i++){
        counterInputs[i].addEventListener('input',() => {
            counterInputs[i].value = counterInputs[i].value.replace(/[^0-9]/,'');
        });
    }

    totalValue.innerHTML = '0';

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000*koef;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000*koef;

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        koef = this.options[this.selectedIndex].value;
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            total = (daysSum + personsSum)*4000*koef;
            totalValue.innerHTML = total;
        }
    });
}

module.exports = calc;