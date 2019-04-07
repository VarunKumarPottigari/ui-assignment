(function () {
    let toggleBar = document.querySelector('#toggle');
    toggleBar.addEventListener('click', toggleBarClick, false);

    function toggleBarClick() {
        this.classList.toggle('on');
        let navBar = document.querySelector('#resize');
        navBar.classList.toggle('active');
        let body = document.body;
        if (body.style.overflow == 'hidden') {
            body.style.overflow = 'auto'
        } else {
            body.style.overflow = 'hidden';
        }
    }
})();