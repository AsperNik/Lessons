
function main() {
    'use strict';
    
    let money = prompt('Ваш бюджет на месяц'),
        time = prompt('Введите дату в формате YYYY-MM-DD');
    
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpanses:{},
        income:[],
        savings: false
    };

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
    
    // let i = 0;

    
    // while (i < 2) {

    // let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    //     b = prompt('Во сколько обойдется?', '');
        
    //     if ( ( typeof(a)=== 'string' ) && ( a != null ) && 
    //     ( b != null ) && a!= '' && b != '' && a.length < 50 ) {
    //         i++;     
    //         appData.expenses[a] = b;
                        
    //     } else {
    //         alert('Ошибка !');
    //         continue;
    //     }
        
    // }


    // do {

    // let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    //     b = prompt('Во сколько обойдется?', '');
            
    //     if ( ( typeof(a)=== 'string' ) && ( a != null ) && 
    //     ( b != null ) && a!= '' && b != '' && a.length < 50 ) {
    //         i++;        
    //         appData.expenses[a] = b;
                            
    //     } else {
    //         alert('Ошибка !');
    //         continue;
    //     }
    
    // }  while (i < 2); 

    appData.moneyPerDay = appData.budget / 30;

    alert("Ежедневный бюджет = " + appData.moneyPerDay);
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

main();