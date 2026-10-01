function navigation(currentList, contentArray) {
    if (!currentList || !contentArray || contentArray.length === 0) return;

    currentList.addEventListener('click', (event) => {
        const item = event.target.closest('.list-item');
        
        if (!item) return;

        const listItems = currentList.querySelectorAll('.list-item');
        listItems.forEach((el) => el.classList.remove('is-active'));
        item.classList.add('is-active');

        const targetText = item.textContent.trim();
        
        contentArray.forEach((el) => {
            const heading = el.querySelector('h2');
            if (heading && heading.textContent.trim() === targetText) {
                el.classList.add('is-active');
            } else {
                el.classList.remove('is-active');
            }
        });
    });
}

export default function callFunctionNavigation() {
    const historyList = document.querySelector('.history-list');
    const historyContainer = document.querySelector('.history-container');
    const physicsList = document.querySelector('.physics-list');
    const physicsContainer = document.querySelector('.physics-container');

    if (!historyList || !historyContainer || !physicsList || !physicsContainer) return;

    const historyArray = Array.from(historyContainer.children);
    const physicsArray = Array.from(physicsContainer.children);
    
    navigation(historyList, historyArray);
    navigation(physicsList, physicsArray);
}

