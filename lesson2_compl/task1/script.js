function main() {
    "use strict";
    let now = new Date();
    
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 
    "Friday", "Saturday", "Sunday"];

    for ( let i = 0 ; i < week.length; i++ ){
        if (i > 4) {
            week[i] = week[i].bold();
        }
        if (now.getDay()-1 == i) {
            week[i] = week[i].italics();
        }

        document.write( week[i] + '<br>');        
    }


    let arr = ['34123', '12452', '23125', '7554', '34522', '1245334', '754321'];
    let a = 0;
    
    for (let i = 0 ; i < 7; i++) {
        a = arr[i];
        if ((a.charAt(0) == '3') || (a.charAt(0) == '7')) {
            console.log(a);
        }
    }

}

main();
