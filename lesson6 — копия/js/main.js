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



let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpanses:{},
    income:[],
    savings: false
};

let sum = 0;

// Отключение кнопок
butConfirmExp.disabled = true;
butConfirmOptExp.disabled = true;
butCalc.disabled = true;

//Старт рассчета
btnStart.addEventListener('click', function() {

    butCalc.disabled = false;
    
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

    //Проверка на заполнение inputExpenses(обязательные расходы)
    for (let i = 0; i < inputsExpenses.length; i++){
        inputsExpenses[i].addEventListener('input', function(){
            for (let j = 0; j < inputsExpenses.length; j++){
                if (inputsExpenses[j].value != '') {
                    butConfirmExp.disabled = false;
                };
            };
        });
        
    };

    //Проверка на заполнение optionExpensesInp(необязательные расходы)
    for (let i = 0; i < optionExpensesInp.length; i++){
        optionExpensesInp[i].addEventListener('input', function(){
            for (let j = 0; j < optionExpensesInp.length; j++){
                if (optionExpensesInp[j].value != '') {
                    butConfirmOptExp.disabled = false;
                };
            };
        });
        
    };

});

//Обязательные расходы
butConfirmExp.addEventListener('click', function(){
    sum = 0;
    for (let i = 0; i <  inputsExpenses.length; i++) {

        let a =  inputsExpenses[i].value,
        b = inputsExpenses[++i].value;
    
        if ( (typeof(a)=== 'string') && (a != null) && 
        (b != null) && a!= '' && b != '' && a.length < 50 ) {    
            appData.expenses[a] = b; 
            sum += +b;       
        } 

    } 
    expensesValue.textContent = sum;
});

//Только цифры в поля с ценами ↑
for (let i = 0; i < inputsExpenses.length; i++){
    i++;
    inputsExpenses[i].addEventListener('input',function(){
        inputsExpenses[i].value = inputsExpenses[i].value.replace(/[^0-9]/,'');
});
};

//Необязательные расходы
butConfirmOptExp.addEventListener('click', function() {
    optExpValue.textContent = '';
    for (let i = 0; i < optionExpensesInp.length; i++) {  
            let opt = optionExpensesInp[i].value;
            appData.optionalExpanses[i] = opt;
            optExpValue.textContent += appData.optionalExpanses[i] + ' ';         
        
    }
});

//Только русские буквы ↑
for (let i = 0; i < optionExpensesInp.length; i++){
    optionExpensesInp[i].addEventListener('input',function(){
    optionExpensesInp[i].value = optionExpensesInp[i].value.replace(/[^а-я]/,'');
});
};

// Рассчет уровня достатка и бюдж на 1 день
butCalc.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget-sum) / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if ( appData.moneyPerDay < 100 ) {
            levelValue.textContent = 'Низкий уровень достатка'
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if ( appData.moneyPerDay > 2000 ) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

//Дополнительные доходы
incomeInp.addEventListener('input', function() {
    let items = incomeInp.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function() {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

sumInp.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumInp.value,
            percent = +percentInp.value;

        appData.monthIncome = (sum/100/12*percent);
        appData.yearIncome = (sum/100*percent);
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentInp.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumInp.value,
        percent = +percentInp.value;

    appData.monthIncome = (sum/100/12*percent);
    appData.yearIncome = (sum/100*percent);
    
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});




