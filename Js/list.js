const historyListBtn = document.querySelector('.history-list-btn')
const historyList = document.querySelector('.history-list')
const physicsListBtn = document.querySelector('.physics-list-btn')
const physicsList = document.querySelector('.physics-list')
const geographyListBtn = document.querySelector('.geography-list-btn')
const geographyList = document.querySelector('.geography-list')
const civicEducationListBtn = document.querySelector('.civicEducation-list-btn')
const civicEducationList = document.querySelector('.civicEducation-list')
const lawListBtn = document.querySelector('.law-list-btn')
const lawList = document.querySelector('.law-list')

export default function openAndCloseList() {
    if (!historyList || !historyListBtn || !physicsList || !physicsListBtn || !geographyList || !geographyListBtn || !civicEducationList || !civicEducationListBtn || !lawList || !lawListBtn) return;

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

    civicEducationListBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        civicEducationList.classList.toggle('is-active');
    });

    lawListBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        lawList.classList.toggle('is-active');
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

        if (civicEducationList.classList.contains('is-active') && !target.closest('.geography-list')) {
            civicEducationList.classList.remove('is-active');
        }

        if (lawList.classList.contains('is-active') && !target.closest('.geography-list')) {
            lawList.classList.remove('is-active');
        }
    });
}
