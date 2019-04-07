// setting up tabs with data and listener

(function () {
    var myTabs = document.querySelectorAll(".content-tab");
    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("current-tab");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("current-tab");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-pane");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = this;
        var activePaneId = anchorReference.children[0].getAttribute("href");
        var activePane = document.getElementById(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks, true);
    }
})();