// 로딩 시 초기 적용
chrome.storage.sync.get('kururing', (data) => {
    if (data.kururing) activateKururing();
});

// 설정 변경 실시간 반영
chrome.storage.onChanged.addListener((changes) => {
    if (changes.kururing) {
        if (changes.kururing.newValue) activateKururing();
        else deactivateKururing();
    }
});
