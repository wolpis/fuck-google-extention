(() => {
    function activateRandomSearch() {
        const searchResults = document.querySelectorAll(".tF2Cxc a");
        if (searchResults.length > 1) {
            const linksArray = Array.from(searchResults);
            const shuffledLinks = linksArray.map(link => link.href).sort(() => Math.random() - 0.5);

            linksArray.forEach((link, index) => {
                link.href = shuffledLinks[index];
            });
        }
    }

    function deactivateRandomSearch() {
        // 페이지 새로고침 없이는 복구가 어려워 생략 가능
    }

    window.activateRandomSearch = activateRandomSearch;
    window.deactivateRandomSearch = deactivateRandomSearch;
})();
