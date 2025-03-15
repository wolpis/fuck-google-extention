(() => {
    function introduceTypo(event) {
        let target = event.target;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
            if (Math.random() < 0.2) { // 20% 확률로 오타 발생
                let pos = Math.floor(Math.random() * target.value.length);
                let randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // a-z 랜덤 문자
                target.value = target.value.substring(0, pos) + randomChar + target.value.substring(pos + 1);
            }
        }
    }

    function activateOta() {
        console.log("✍️ 랜덤 오타 기능 활성화됨!");
        document.addEventListener("input", introduceTypo);
    }

    function deactivateOta() {
        console.log("🛑 랜덤 오타 기능 비활성화됨!");
        document.removeEventListener("input", introduceTypo);
    }

    // 전역 등록 (content.js에서 호출 가능)
    window.activateOta = activateOta;
    window.deactivateOta = deactivateOta;
})();
