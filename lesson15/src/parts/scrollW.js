function scrollW() {
    let links = document.querySelectorAll('a[href*="#"]');

    for (let link of links) {
        link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const blockID = link.getAttribute('href');     
        if (blockID === '#price') {
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
        } else {
            document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
      });
    }
}

module.exports = scrollW;