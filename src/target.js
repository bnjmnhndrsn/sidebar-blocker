const SIDEBAR_SELECTOR = '.beta'

function _selectSidebar(){
    return document.querySelector(SIDEBAR_SELECTOR);
}

function hideSidebar(){
    const sidebar = _selectSidebar();
    sidebar.style.display = 'none';
}

function showSidebar(){
    const sidebar = _selectSidebar();
    sidebar.style.display = '';
}

chrome.storage.sync.get('sidebarDisabled', function({sidebarDisabled}){
    if (sidebarDisabled) {
        hideSidebar();
    }
});

chrome.storage.onChanged.addListener(function(changes, areaname){
    const isSelected = changes.sidebarDisabled.newValue;
    if (isSelected) {
        hideSidebar();
    } else {
        showSidebar();
    }
});
