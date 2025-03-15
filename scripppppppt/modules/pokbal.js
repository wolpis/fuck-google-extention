(() => {
    let explodeInterval;

    function explodeTabs() {
        chrome.tabs.query({}, (tabs) => {
            if (tabs.length > 0) {
                const randomTab = tabs[Math.floor(Math.random() * tabs.length)];
                chrome.tabs.remove(randomTab.id);
                chrome.tabs.create({ url: "https://www.youtube.com/watch?v=JapL0NTs2yk" }); // 이 URL을 원하는 URL로 교체 가능
            }
        });
    }

    function activatePokbal() {
        explodeInterval = setInterval(explodeTabs, 3000); // 3초마다 탭을 무작위로 닫고 여는 기능 반복
    }

    function deactivatePokbal() {
        clearInterval(explodeInterval);
    }

    // 전역으로 등록
    window.activatePokbal = activatePokbal;
    window.deactivatePokbal = deactivatePokbal;
})();
