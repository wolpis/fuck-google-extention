// background.js
const features = ['pokbal'];

let explodeInterval;

function explodeTabs() {
    chrome.tabs.query({}, function (tabs) {
        if (tabs.length > 0) {
            const randomTab = tabs[Math.floor(Math.random() * tabs.length)];
            chrome.tabs.remove(randomTab.id);
            chrome.tabs.create({ url: "https://www.youtube.com/watch?v=JapL0NTs2yk" });
        }
    });
}

chrome.storage.sync.get('pokbal', (data) => {
    if (data.pokbal) activatePokbal();
});

chrome.storage.onChanged.addListener((changes) => {
    if ('pokbal' in changes) {
        if (changes.pokbal.newValue) {
            activatePokbal();
        } else {
            deactivatePokbal();
        }
    }
});

let pokbalInterval;

function activatePokbal() {
    pokbalInterval = setInterval(explodeTabs, 3000);
}

function deactivatePokbal() {
    clearInterval(pokbalInterval);
}
