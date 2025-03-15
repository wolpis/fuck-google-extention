(() => {
    function activateRandomLink() {
        const searchResults = document.querySelectorAll(".tF2Cxc a");
        if (searchResults.length > 1) {
            const linksArray = Array.from(searchResults);
            const shuffledLinks = linksArray
                .map(link => link.href)
                .sort(() => Math.random() - 0.5);

            linksArray.forEach((link, idx) => {
                link.href = shuffledLinks[idx];
            });
        }
    }

    function deactivateRandomLink() {
        // 페이지 새로고침 없이 원상복구가 어려우므로 빈 함수로 두어도 무방합니다.
        // (혹은 새로고침 시 원본링크로 복구됩니다.)
    }

    window.activateRandomLink = activateRandomLink;
    window.deactivateRandomLink = deactivateRandomLink;
})();
