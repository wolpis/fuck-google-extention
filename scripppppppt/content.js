const features = ['kururing', 'randomSearch', 'rickLink', 'rickImage'];

const actions = {
    kururing: { on: activateKururing, off: deactivateKururing },
    randomSearch: { on: activateRandomSearch, off: deactivateRandomSearch },
    rickLink: { on: activateRickLink, off: deactivateRickLink },
    rickImage: { on: activateRickImage, off: deactivateRickImage }
};

// 초기 적용
chrome.storage.sync.get(features, (data) => {
    features.forEach(feature => {
        if (data[feature]) actions[feature].on();
    });
});

// 옵션 변경 실시간 적용
chrome.storage.onChanged.addListener((changes) => {
    for (let [feature, { newValue }] of Object.entries(changes)) {
        if (actions[feature]) {
            newValue ? actions[feature].on() : actions[feature].off();
        }
    }
});
