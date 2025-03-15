document.addEventListener('DOMContentLoaded', () => {
    const features = ['kururing', 'randomSearch', 'rickLink', 'rickImage', 'pokbal', 'jusa']

    chrome.storage.sync.get(features, (data) => {
        features.forEach(feature => {
            const checkbox = document.getElementById(feature);
            if (checkbox) checkbox.checked = data[feature] || false;
        });
    });

    features.forEach(feature => {
        const checkbox = document.getElementById(feature);
        if (checkbox) { // ⚠️ 안전장치 추가
            checkbox.addEventListener('change', () => {
                chrome.storage.sync.set({ [feature]: checkbox.checked });
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const features = ['kururing', 'randomSearch', 'rickImage', 'rickLink', 'pokbal', 'jusa']

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

