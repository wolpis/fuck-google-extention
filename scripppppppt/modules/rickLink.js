(() => {
    const TARGET_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    function activateRickLink() {
        const links = document.querySelectorAll(".tF2Cxc a");
        links.forEach(link => {
            link.href = TARGET_URL;
        });
    }

    function deactivateRickLink() {
        // 원상복구는 불필요 (새로고침 시 복구되므로 생략)
    }

    window.activateRickLink = activateRickLink;
    window.deactivateRickLink = deactivateRickLink;
})();
