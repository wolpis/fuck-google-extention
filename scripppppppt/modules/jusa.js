(() => {
    let button;

    function createDiceButton() {
        if (button) return; // 버튼이 이미 존재하면 중복 생성 방지

        button = document.createElement('button');
        button.textContent = '🎲 주사위 굴리기 🎲';
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.zIndex = '9999';
        button.style.padding = '10px';
        button.style.fontSize = '16px';
        button.style.backgroundColor = '#ffcc00';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';

        document.body.appendChild(button);

        button.onclick = function () {
            let angle = Math.floor(Math.random() * 360);
            document.body.style.transition = "transform 0.5s";
            document.body.style.transform = `rotate(${angle}deg)`;
        };
    }

    function removeDiceButton() {
        if (button) {
            button.remove();
            button = null;
        }
    }

    function activateJusa() {
        console.log("🎲 주사위 기능 활성화됨!");
        createDiceButton();
    }

    function deactivateJusa() {
        console.log("🛑 주사위 기능 비활성화됨!");
        removeDiceButton();
    }

    // 전역으로 등록
    window.activateJusa = activateJusa;
    window.deactivateJusa = deactivateJusa;
})();
