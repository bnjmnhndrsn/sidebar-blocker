class Toggle {
    constructor({initialValue}){
        this.initialValue = initialValue;
        this.checkbox = document.getElementById('checkbox');
        this.flushState();
        this.bindEvents();
    }

    bindEvents(){
        this.checkbox.addEventListener('change', function(e){
            const values = {sidebarDisabled: e.target.checked};
            chrome.storage.sync.set(values);
        });
    }

    flushState(){
        if (this.initialValue) {
            this.checkbox.checked = true;
        } else {
            this.checkbox.checked = false;
        }
    }
}

chrome.storage.sync.get('sidebarDisabled', function({sidebarDisabled}) {
    const toggle = new Toggle({initialValue: sidebarDisabled});
});
