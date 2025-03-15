(() => {
    let imgElement, styleElement;

    function activateKururing() {
        if (document.getElementById('kururing-image')) return;

        imgElement = document.createElement('img');
        imgElement.id = 'kururing-image';
        imgElement.src = 'https://i.postimg.cc/Dy2YXKky/img.gif';
        imgElement.alt = 'Kururing';

        Object.assign(imgElement.style, {
            position: 'fixed',
            bottom: '10px',
            left: '0',
            width: '150px',
            height: '150px',
            zIndex: '9999',
            animation: 'kururingAnimation 5s infinite'
        });

        styleElement = document.createElement('style');
        styleElement.innerHTML = `
        @keyframes kururingAnimation {
          0% { left: 0; }
          50% { left: calc(100% - 150px); }
          100% { left: 0; }
        }
      `;

        document.head.appendChild(styleElement);
        document.body.appendChild(imgElement);
    }

    function deactivateKururing() {
        const img = document.getElementById('kururing-image');
        if (img) img.remove();
        if (styleElement) styleElement.remove();
    }

    // 전역 스코프에 등록
    window.activateKururing = activateKururing;
    window.deactivateKururing = deactivateKururing;
})();
