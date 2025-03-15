document.addEventListener('DOMContentLoaded', () => {
    const kururingCheckbox = document.getElementById('kururing');
    const randomLinkCheckbox = document.getElementById('randomLink');
    const saveBtn = document.getElementById('save-btn');

    // 초기 상태 로드
    chrome.storage.sync.get(['kururing', 'randomLink'], (data) => {
        kururingCheckbox.checked = data.kururing || false;
        randomLink.checked = data.randomLink || false;
    });

    // 저장하기 버튼 클릭 시
    saveBtn.addEventListener('click', () => {
        chrome.storage.sync.set({
            kururing: kururingCheckbox.checked,
            randomLink: randomLinkCheckbox.checked
        }, () => {
            alert('설정이 저장되었습니다.');

            chrome.tabs.query({}, (tabs) => {
                tabs.forEach(tab => {
                    chrome.tabs.sendMessage(tab.id, {
                        kururing: kururingCheckbox.checked,
                        randomLink: randomLink.checked
                    });
                });
            });
        });
    });
});
