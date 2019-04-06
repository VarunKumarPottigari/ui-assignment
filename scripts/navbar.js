(function () {
    let toggleBar = document.querySelector('#toggle');
    toggleBar.addEventListener('click', toggleBarClick, false);

    function toggleBarClick() {
        this.classList.toggle('on');
        let navBar = document.querySelector('#resize');
        navBar.classList.toggle('active');
    }
})();