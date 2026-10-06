// validetion.js
function createListItem(title, targetListElement) {
    if (!targetListElement) return;
    const btn = document.createElement('button');
    btn.className = "list-item";
    btn.textContent = title;
    targetListElement.appendChild(btn);
}

function createMainContent(mainContent) {
    const mainContainer = document.createElement('div');
    mainContainer.className = "main-content";
    mainContainer.innerHTML = mainContent.replace(/\n/g, '<br>');
    return mainContainer; 
}

function createSecondaryContent(secondaryContent) {
    const secondaryContainer = document.createElement('div');
    secondaryContainer.className = "secondary-content";
    secondaryContainer.innerHTML = secondaryContent.replace(/\n/g, '<br>');
    return secondaryContainer; 
}

function renderSubjectData(dataArray, listContainer, contentContainer, prefix, blockClass) {
    if (!listContainer || !contentContainer || !dataArray) return;

    dataArray.forEach((item, index) => {
        createListItem(item.title, listContainer);

        const topicWrapper = document.createElement('section');
        topicWrapper.className = blockClass; 
        topicWrapper.id = `${prefix}-topic-${index}`; 
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = item.title;
        topicWrapper.appendChild(titleElement);

        const mainBlock = createMainContent(item.mainContent);
        const secondaryBlock = createSecondaryContent(item.secondaryContent);

        topicWrapper.appendChild(mainBlock);
        topicWrapper.appendChild(secondaryBlock);

        contentContainer.appendChild(topicWrapper);
    });
}

export default function createElement(historyData, physicsData, geographyData) {
    const historyContainer = document.querySelector('.history-container');
    const physicsContainer = document.querySelector('.physics-container');
    const geographyContainer = document.querySelector('.geography-container'); // Исправлена опечатка

    const historyList = document.querySelector('.history-list');
    const physicsList = document.querySelector('.physics-list');
    const geographyList = document.querySelector('.geography-list');

    renderSubjectData(historyData, historyList, historyContainer, 'history', 'history-topic-block');
    renderSubjectData(physicsData, physicsList, physicsContainer, 'physics', 'physics-topic-block');
    renderSubjectData(geographyData, geographyList, geographyContainer, 'geography', 'geography-topic-block');
}