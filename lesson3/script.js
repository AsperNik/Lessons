function main() {
    'use strict';
    let money, time;

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpanses:{},
        income:[],
        savings: true
    };

    function start() {
        money = prompt('Ваш бюджет на месяц');
        time = prompt('Введите дату в формате YYYY-MM-DD'); 
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt('Ваш бюджет на месяц');
        }
    }

    function chooseExpanses() {
        for (let i = 0; i < 2; i++) {
    
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        
            if ( (typeof(a)=== 'string') && (a != null) && 
            (b != null) && a!= '' && b != '' && a.length < 50 ) {
                
                appData.expenses[a] = b;
                        
            } else {
                alert('Ошибка !');
                i--;
                continue;
            }
    
        } 
    }

    function detectDayBudget() {
        appData.moneyPerDay = (appData.budget / 30);
        alert("Ежедневный бюджет = " + appData.moneyPerDay);
    }
    
    function detectLevel() {
        if ( appData.moneyPerDay < 100 ) {
            console.log('Минимальный уровень достатка');
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log('Средний уровень достатка');
        } else if ( appData.moneyPerDay > 2000 ) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    }

    function checkSavings() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита = " + appData.monthIncome);
        }
    }

    start();

    chooseExpanses();

    detectDayBudget();

    detectLevel();

    checkSavings(); 

    
}

main();


