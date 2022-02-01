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