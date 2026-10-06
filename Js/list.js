const historyListBtn = document.querySelector('.history-list-btn')
const historyList = document.querySelector('.history-list')
const physicsListBtn = document.querySelector('.physics-list-btn')
const physicsList = document.querySelector('.physics-list')
const geographyListBtn = document.querySelector('.geography-list-btn')
const geographyList = document.querySelector('.geography-list')

export default function openAndCloseList() {
    if (!historyList || !historyListBtn || !physicsList || !physicsListBtn || !geographyList || !geographyListBtn) return;

    historyListBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        historyList.classList.toggle('is-active');
    });

    physicsListBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        physicsList.classList.toggle('is-active');
    });
    
    geographyListBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        geographyList.classList.toggle('is-active');
    });

    document.addEventListener('click', (event) => {
        const target = event.target;

        if (historyList.classList.contains('is-active') && !target.closest('.history-list')) {
            historyList.classList.remove('is-active');
        }

        if (physicsList.classList.contains('is-active') && !target.closest('.physics-list')) {
            physicsList.classList.remove('is-active');
        }

        if (geographyList.classList.contains('is-active') && !target.closest('.geography-list')) {
            geographyList.classList.remove('is-active');
        }
    });
}
