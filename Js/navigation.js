import check from "./checkingChangeForms.js";
import listWidth from "./listWidth.js";

function navigation(currentList, contentArray, currentContainer) {
    if (!currentList || !contentArray || contentArray.length === 0) return;

    check(currentContainer);

    currentList.addEventListener('click', (event) => {
        const item = event.target.closest('.list-item');
        if (!item) return;

        const listItems = currentList.querySelectorAll('.list-item');
        listItems.forEach((el) => el.classList.remove('is-active'));
        item.classList.add('is-active');
        const targetText = item.textContent.trim();

        contentArray.forEach((el) => {
            const heading = el.querySelector('h2');

            if (!heading) return; 

            if (heading.textContent.trim() === targetText) {
                el.classList.add('is-active');
            } else {
                el.classList.remove('is-active');
            }
        });

        check(currentContainer);
    });
}

function navigationWithOneNavBlock(){
    const listBtn = document.querySelector('.list-btn');
    if (!listBtn) return;

    listBtn.addEventListener('click', () => {
        listWidth()
        const currentContainer = document.querySelector('.container.is-active:not(.lab-container)');
        if (currentContainer && currentContainer.classList.contains('is-active')){
            const currentContainerClass = currentContainer.className.split(' ').find(cls => cls.endsWith('-container'));
            if (!currentContainerClass) return;
            const suffix = currentContainerClass.replace('-container', '');
            
            const currentList = document.querySelector(`.nav .${suffix}-list`);
            
            if (currentList) {
                currentList.classList.toggle('is-active');
            }
        }
    });
}

export default function callFunctionNavigation() {
    const historyList = document.querySelector('.history-list');
    const historyContainer = document.querySelector('.history-container');
    const physicsList = document.querySelector('.physics-list');
    const physicsContainer = document.querySelector('.physics-container');
    const geographyList = document.querySelector('.geography-list');
    const geographyContainer = document.querySelector('.geography-container');
    const civicEducationList = document.querySelector('.civicEducation-list');
    const civicEducationContainer = document.querySelector('.civicEducation-container');
    const lawList = document.querySelector('.law-list');
    const lawContainer = document.querySelector('.law-container');

    if (!historyList || !historyContainer || !physicsList || !physicsContainer || 
        !geographyList || !geographyContainer || !civicEducationList || 
        !civicEducationContainer || !lawList || !lawContainer) return;

    const historyArray = Array.from(historyContainer.children).filter(child => !child.classList.contains('nav'));
    const physicsArray = Array.from(physicsContainer.children).filter(child => !child.classList.contains('nav'));
    const geographyArray = Array.from(geographyContainer.children).filter(child => !child.classList.contains('nav'));
    const civicEducationArray = Array.from(civicEducationContainer.children).filter(child => !child.classList.contains('nav'));
    const lawArray = Array.from(lawContainer.children).filter(child => !child.classList.contains('nav'));
    
    navigation(historyList, historyArray, historyContainer);
    navigation(physicsList, physicsArray, physicsContainer);
    navigation(geographyList, geographyArray, geographyContainer);
    navigation(civicEducationList, civicEducationArray, civicEducationContainer); 
    navigation(lawList, lawArray, lawContainer);

    navigationWithOneNavBlock();
}