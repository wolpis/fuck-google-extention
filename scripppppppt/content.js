// 페이지 로딩 시 상태 적용
chrome.storage.sync.get(['kururing', 'randomLink'], (data) => {
    if (data.kururing) activateKururing();
    if (data.randomLink) activateRandomLink();
});

// 실시간으로 옵션 변경 적용
chrome.storage.onChanged.addListener((changes) => {
    if (changes.kururing) {
        if (changes.kururing.newValue) activateKururing();
        else deactivateKururing();
    }

    if (changes.randomLink) {
        if (changes.randomLink.newValue) activateRandomLink();
        else deactivateRandomLink();
    }
});
