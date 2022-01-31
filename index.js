function loaderDisappears() {
    document.getElementsByClassName('loader')[0].classList.add('hidden');
}

setTimeout(() => {
    loaderDisappears();
}, 3000);