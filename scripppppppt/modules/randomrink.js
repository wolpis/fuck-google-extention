const searchResults = document.querySelectorAll(".tF2Cxc a"); // 구글 검색 결과 링크 선택

if (searchResults.length > 1) {
    const linksArray = Array.from(searchResults);
    const shuffledLinks = linksArray.map(link => link.href).sort(() => Math.random() - 0.5);

    linksArray.forEach((link, index) => {
        link.href = shuffledLinks[index]; // 무작위 링크로 변경
    });
}