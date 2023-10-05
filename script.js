function showTab(tabNumber, tab) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active');
    });
    document.getElementById(`tab${tabNumber}`).classList.add('active');

    tabs.forEach((item) => {
        item.classList.remove('active-tab');
    });
    tab.classList.add('active-tab');
}

function changeColor(menuItem) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        item.classList.remove('active-menu-item');
    });
    menuItem.classList.add('active-menu-item');
}

var imageCells = document.querySelectorAll(".image-cell");
imageCells.forEach(function(cell) {
    var imgElement = cell.querySelector("img");
    var iconAdded = false;

    imgElement.addEventListener("click", function() {
        if (!iconAdded) {
            var icon = document.createElement("i");
            icon.className = "fas fa-check icon-overlay";
            icon.style.color = "#1adb00";
            cell.appendChild(icon);
            iconAdded = true;
        } else {
            var iconToRemove = cell.querySelector(".icon-overlay");
            if (iconToRemove) {
                cell.removeChild(iconToRemove);
            }
            iconAdded = false;
        }
    });
});