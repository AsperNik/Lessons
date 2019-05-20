function modalWindows() {
let moreInfo = document.querySelectorAll('.description-btn'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close'),
more = document.querySelectorAll('.more');
function modalWindow(a) {
    for (let k of a) {
        k.addEventListener('click',  () => {
            overlay.style.display = 'block';
            k.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
    });

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            k.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }
}
modalWindow(moreInfo);
modalWindow(more);
}

module.exports = modalWindows;