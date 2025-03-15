document.addEventListener('DOMContentLoaded', () => {
    const kururingCheckbox = document.getElementById('kururing');
    const saveBtn = document.getElementById('save-btn');

    // 저장된 설정 불러오기
    chrome.storage.sync.get(['kururing'], (data) => {
        kururingCheckbox.checked = data.kururing || false;
    });

    // 설정 저장하기
    saveBtn.addEventListener('click', () => {
        chrome.storage.sync.set({ kururing: kururingCheckbox.checked }, () => {
            alert('설정이 저장되었습니다.');

            // 모든 탭에 즉시 변경사항 전달
            chrome.tabs.query({}, (tabs) => {
                tabs.forEach(tab => {
                    chrome.tabs.sendMessage(tab.id, {
                        feature: 'kururing',
                        state: kururingCheckbox.checked
                    });
                });
            });
        });
    });
});
