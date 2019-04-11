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

hideSidebar();
