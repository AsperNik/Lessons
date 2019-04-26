function main() {
    'use strict';

    let money, time;
    
    function start() {
        money = prompt('Ваш бюджет на месяц');
        time = prompt('Введите дату в формате YYYY-MM-DD'); 
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt('Ваш бюджет на месяц');
        }
    }

    start();

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpanses:{},
        income:[],
        savings: true,
        chooseExpanses: function() {
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
        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed(2);
            alert("Ежедневный бюджет = " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if ( appData.moneyPerDay < 100 ) {
                console.log('Минимальный уровень достатка');
            } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
                console.log('Средний уровень достатка');
            } else if ( appData.moneyPerDay > 2000 ) {
                console.log('Высокий уровень достатка');
            } else {
                console.log('Произошла ошибка');
            }
        },
        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
        
                appData.monthIncome = (save/100/12*percent).toFixed();
                alert("Доход в месяц с вашего депозита = " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            for (let i = 0; i < 3; i++) {

                let a = prompt('Статья необязательных расходов', '');
                let b = i+1;
                
                if ( (typeof(a)=== 'string') && (a != null) && a!= '' && a.length < 50 ) {
                    
                    appData.optionalExpanses[b] = a;
                            
                } else {
                    alert('Ошибка !');
                    i--;
                    continue;
                }
            }
        },
        chooseIncome: function() {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');

            while ( (typeof(items) !== 'string') || (items == null) || items == '' ) {
                items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');
            }

            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();

            let numEmpty = appData.income.indexOf('');

            if (numEmpty > -1) {
                appData.income.splice(numEmpty, 1);
            }

            let numNull = appData.income.indexOf(null);

            if (numNull > -1) {
                appData.income.splice(numNull, 1);
            }

            console.log('Способы заработка: ');
            appData.income.forEach(function(item, i) {
                console.log((i+1) + ' - ' + item);
            });
            
        }
    };
appData.chooseIncome();
for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ' : ' + appData[key]);
}
}
main();


