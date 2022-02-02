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

function showBat7() {
    document.querySelector('.maxi-big').classList.toggle('show-maxi');
    document.querySelector('.background').classList.toggle('dark');
    document.querySelector('.news-square').classList.toggle('translate-news');
}
document.querySelector('#news span').addEventListener('click', showBat7);

function openBio() {
    document.querySelector('.bio__container').classList.toggle('open');
}
document.querySelector('#bio button').addEventListener('click', openBio);

function openDisco() {
    document.querySelector('.disco__container').classList.toggle('open');
    document.querySelector('.LP1').classList.toggle('appears');
    document.querySelector('.LP2').classList.toggle('appears');
    document.querySelector('.LP3').classList.toggle('appears');
    document.querySelectorAll('.maxi')[0].classList.toggle('appears');
    document.querySelectorAll('.maxi')[1].classList.toggle('appears');
}
document.querySelector('#disco button').addEventListener('click', openDisco);

document.querySelector('.collabs-button').addEventListener('click', showCollabs);

function showOthersCollabs() {
    document.querySelector('.other-collabs').classList.toggle('more');
}

document.querySelector('.others').addEventListener('click', showOthersCollabs);

function showTextCollabs(e) {
    const clicked = e.target;
    if (clicked.tagName === 'P') {
        clicked.classList.toggle('text-clicked');
    } else if (clicked.tagName === 'IMG') {
        clicked.parentNode.parentNode.childNodes[3].classList.toggle('text-clicked');
    }
}

function openPress() {
    const container = document.querySelector('.press__container');
    container.classList.toggle('open');
}
document.querySelector('#press button').addEventListener('click', openPress);