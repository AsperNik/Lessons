function forms() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы  с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        formContacts = document.querySelector('.formContacts'),
        statusMessage = document.createElement('div'),
        inputPhone = document.getElementsByName('phone');
        statusMessage.classList.add('status');
    
    // Валидация 
    for (let i = 0; i < inputPhone.length; i++){
        inputPhone[i].addEventListener('input',() => {
            inputPhone[i].value = inputPhone[i].value.replace(/[^0-9+]/,'');
    });
    }

    // Отправка формы
    function formExp(item) {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            item.appendChild(statusMessage);
            let input = item.getElementsByTagName('input');
            let formData = new FormData(item);
            
            function sendData(data) {

                return new Promise(function (resolve, reject){
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    
                    let obj = {};
                        formData.forEach(function(value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    request.send(json);

                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                });
            }
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

        sendData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
        });
        
    }

    formExp(form);
    formExp(formContacts);
}

module.exports = forms;