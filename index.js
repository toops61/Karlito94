function loaderDisappears() {
    document.getElementsByClassName('loader')[0].classList.add('hidden');
}

setTimeout(() => {
    loaderDisappears();
}, 3000);

setTimeout(() => {
    const loader = document.querySelectorAll('.loader')[0];
    if (loader.classList.value === 'loader hidden') {loader.style.display = 'none'};
}, 10000);

function arrowAppears() {
    document.getElementById('arrow-up').classList.add('appears');
}

function arrowUp() {
    window.scroll(0, 0);
}

window.addEventListener('scroll', function () {
    const arrow = document.getElementById('arrow-up');
    if (this.scrollY > 150) {
        arrowAppears();
    } else {
        arrow.classList.remove('appears');
    }
})
document.getElementById('arrow-up').addEventListener('click', arrowUp);

function showCollabs() {
    document.querySelector('.collab-section').classList.toggle('more');
}

document.querySelector('.collabs-button').addEventListener('click', showCollabs);

function showOthersCollabs() {
    document.querySelector('.other-collabs').classList.toggle('more');
}

document.querySelector('.others').addEventListener('click', showOthersCollabs);
