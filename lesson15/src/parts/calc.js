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