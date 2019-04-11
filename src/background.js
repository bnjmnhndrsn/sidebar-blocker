chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get('sidebarDisabled', function({sidebarDisabled}) {
        if (typeof sidebarDisabled === 'undefined') {
            chrome.storage.sync.set({sidebarDisabled: true});
        }
    });
});
