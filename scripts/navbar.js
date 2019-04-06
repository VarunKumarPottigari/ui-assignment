(function () {
    let toggleBar = document.querySelector('.nav-bar-toggle');
    toggleBar.addEventListener('click', toggleBarClick, false);

    function toggleBarClick() {
        let navBar = document.querySelector('.nav-bar-items');
        navBar.classList.toggle('toggle-view');
    }
})();