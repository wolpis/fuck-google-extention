(() => {
    const IMAGE_URL = "https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif";

    function replaceAllImages() {
        document.querySelectorAll('img').forEach(img => {
            const newImg = document.createElement('img');
            newImg.src = IMAGE_URL;

            // 기존 이미지 스타일 복사
            newImg.style.width = img.width + 'px';
            newImg.style.height = img.height + 'px';
            newImg.style.objectFit = 'cover';

            // 이미지 교체
            img.parentNode.replaceChild(newImg, img);
        });
    }

    function activateRickImage() {
        replaceAllImages();
        window.rickInterval = setInterval(replaceAllImages, 500);
    }

    function deactivateRickImage() {
        clearInterval(window.rickInterval);
    }

    window.activateRickImage = activateRickImage;
    window.deactivateRickImage = deactivateRickImage;
})();
