let checkbox = document.getElementById('checkbox');

function bindCheckboxEventHandler(){
    checkbox.addEventListener('change', function(e){
        const values = {sidebarDisabled: e.target.checked};
        console.log(values);
        chrome.storage.sync.set(values);
    });
}

chrome.storage.sync.get('sidebarDisabled', function({sidebarDisabled}) {
    if (sidebarDisabled) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    bindCheckboxEventHandler();
});
