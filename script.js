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