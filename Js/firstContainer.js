function focusContainer(currentlist, currentContainer, text) {
    if (!currentlist || !currentContainer) return;

    const listArray = Array.from(currentlist.children);
    const containerArray = Array.from(currentContainer.children);
    const targetText = text;

    const activeListItem = listArray.find(el => el.textContent.trim() === targetText);
    if (activeListItem) {
        activeListItem.classList.add('is-active');
    }

    const activeItem = containerArray.find(el => {
        const heading = el.querySelector('h2');
        return heading && heading.textContent.trim() === targetText;
    });

    if (activeItem) {
        activeItem.classList.add('is-active');
    }
}

export default function callFocusContainer(){
    const historyList = document.querySelector('.history-list');
    const historyContainer = document.querySelector('.history-container');
    const physicsList = document.querySelector('.physics-list');
    const physicsContainer = document.querySelector('.physics-container');
    const geographyList = document.querySelector('.geography-list');
    const geographyContainer = document.querySelector('.geography-container');

    if (!historyList || !historyContainer || !physicsList || !physicsContainer || !geographyList || !geographyContainer) return;

    focusContainer(historyList, historyContainer, "ВСТУП. Модерна доба")
    focusContainer(physicsList, physicsContainer, "§ 1")
    focusContainer(geographyList, geographyContainer, "§ 8")
}