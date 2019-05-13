
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'),
    data;


inputRub.addEventListener('input', () => {
    
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    function exchangeRate() {
        return new Promise(function (resolve, reject) {
        request.addEventListener('readystatechange', function() {
        if (request.readyState === 4) {
            if (request.status == 200) {
                resolve(JSON.parse(request.response));
            } else {
                reject();
            }
        }
    });
    });
}
exchangeRate()
    .then( () => data = JSON.parse(request.response))
    .then( () => inputUsd.value = inputRub.value / data.usd)
    .catch( () => inputUsd.value = "Что-то пошло не так!")
});