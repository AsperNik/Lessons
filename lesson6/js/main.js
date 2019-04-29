let btnStart = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optExpValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
    
    inputsExpenses = document.getElementsByClassName("expenses-item"),
    butConfirmExp = document.getElementsByTagName("button")[0],
    butConfirmOptExp = document.getElementsByTagName("button")[1],
    butCalc = document.getElementsByTagName("button")[2],
    optionExpensesInp = document.querySelectorAll(".optionalexpenses-item"),
    incomeInp = document.querySelector(".choose-income"),
    checkbox = document.querySelector("#savings"),
    sumInp = document.querySelector(".choose-sum"),
    percentInp = document.querySelector(".choose-percent"),
    yearInp = document.querySelector(".year-value"),
    monthInp = document.querySelector(".month-value"),
    dayInp = document.querySelector(".day-value");

console.log();

let money, time;


btnStart.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD'); 
    money = prompt('Ваш бюджет на месяц');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money;
    yearInp.value = new Date(Date.parse(time)).getFullYear();
    monthInp.value = new Date(Date.parse(time)).getMonth() + 1;
    dayInp.value = new Date(Date.parse(time)).getDate();
});

butConfirmExp.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i <  inputsExpenses.length; i++) {

        let a =  inputsExpenses[i].value,
        b = inputsExpenses[++i].value;
    
        if ( (typeof(a)=== 'string') && (a != null) && 
        (b != null) && a!= '' && b != '' && a.length < 50 ) {    
            appData.expenses[a] = b; 
            sum += +b;       
        } else {
            i--;
        }

    } 
    expensesValue.textContent = sum;  
});

butConfirmOptExp.addEventListener('click', function() {
    for (let i = 0; i < optionExpensesInp.length; i++) {  
            let opt = optionExpensesInp[i].value;
            appData.optionalExpanses[i] = opt;
            optExpValue.textContent += appData.optionalExpanses[i] + ' ';         
        
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpanses:{},
    income:[],
    savings: true,
    chooseExpanses: function() {
        
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



// for (let key in appData) {
//     console.log('Наша программа включает в себя данные:' + key + ' : ' + appData[key]);
// }

