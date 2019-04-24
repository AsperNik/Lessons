function getFriendlyNumbers(start, end) {
    let friendlyNum = [];
    let pareNum = [];

    function sortMass(a,b){
        return a-b;
    }

    if ( isNaN(start) || isNaN(end) || (start < 0) || (end < start) || ((start + end)%1 != 0) ){
        return console.log(false);
    }
    if (start == end) {
        return console.log([]);
    }

    for (start; start < end; start++) {
        let s0 = 0;

        for (let i = 0; i < start-1; i++) {
            if (start%i == 0 ) {
                s0 += i;
            }
        }

        let s1 = 0;
        for (let j = 0; j < s0; j++){
            if (s0%j == 0) {
                s1 += j;
            }
        }
        
        if ((start == s1) && (s0 != start)) {
            pareNum.push(start,s0); 
            pareNum = pareNum.sort(sortMass);
            friendlyNum.push(pareNum); 
            for (let pr = 0; pr < friendlyNum.length; pr++) {
                if ( (JSON.stringify(friendlyNum[pr])==JSON.stringify(friendlyNum[pr+1])) == true ) {
                    friendlyNum.splice(pr,1);
                }
            }  
            
            pareNum = [];
            
        }
    }
 
    console.log(friendlyNum);
}
getFriendlyNumbers(1, 1);
