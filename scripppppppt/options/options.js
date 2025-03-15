document.addEventListener('DOMContentLoaded', () => {
    const features = ['kururing', 'randomSearch', 'rickLink', 'rickImage'];

    // 초기 상태 로드 및 UI 반영
    chrome.storage.sync.get(features, (data) => {
        features.forEach(feature => {
            const checkbox = document.getElementById(feature);
            if (checkbox) checkbox.checked = data[feature] || false;
        });
    });

    // 체크박스 변경 시 크롬 스토리지 저장만 하면 됨.
    features.forEach(feature => {
        const checkbox = document.getElementById(feature);
        checkbox.addEventListener('change', () => {
            chrome.storage.sync.set({ [feature]: checkbox.checked });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const features = ['kururing', 'randomSearch', 'rickImage', 'rickLink'];

    chrome.storage.sync.get(features, (data) => {
        features.forEach(feature => {
            const checkbox = document.getElementById(feature);
            if (checkbox) checkbox.checked = data[feature] || false;
        });
    });

    features.forEach(feature => {
        const checkbox = document.getElementById(feature);
        checkbox.addEventListener('change', () => {
            chrome.storage.sync.set({ [feature]: checkbox.checked });

            // OFF로 바꿀 때 랜덤 팝업 표시
            if (!checkbox.checked && Math.random() < 0.1) {
                document.getElementById('popup').style.display = 'block';
            }
        });
    });

    const popupConfirmBtn = document.getElementById("popup-confirm-btn");
    if (popupConfirmBtn) {
        popupConfirmBtn.addEventListener("click", () => {
            document.getElementById("popup").style.display = "none";
        });
    }
});

