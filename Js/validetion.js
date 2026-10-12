function createListItem(title, targetListElement) {
    if (!targetListElement) return;
    const btn = document.createElement('button');
    btn.className = "list-item";
    btn.textContent = title;
    targetListElement.appendChild(btn);
}

function setElementClass(element, baseClass, item) {
    if (item && item.shortContent) {
        element.className = `${baseClass} is-active`; 
    } else {
        element.className = baseClass;
    }
}

function createMainContent(mainContent, item) {
    const mainContainer = document.createElement('div');
    setElementClass(mainContainer, "main-content", item);
    mainContainer.innerHTML = mainContent ? mainContent.replace(/\n/g, '<br>') : '';
    return mainContainer; 
}

function createSecondaryContent(secondaryContent, item) {
    const secondaryContainer = document.createElement('div');
    setElementClass(secondaryContainer, "secondary-content", item);
    secondaryContainer.innerHTML = secondaryContent ? secondaryContent.replace(/\n/g, '<br>') : '';
    return secondaryContainer; 
}

function createShortContent(shortContent) {
    const shortContainer = document.createElement('div');
    shortContainer.className = "short-content";
    shortContainer.innerHTML = shortContent ? shortContent.replace(/\n/g, '<br>') : '';
    return shortContainer; 
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
        setElementClass(titleElement, "title", item);
        topicWrapper.appendChild(titleElement);

        const mainBlock = createMainContent(item.mainContent, item);
        const secondaryBlock = createSecondaryContent(item.secondaryContent, item);
        
        if (item.shortContent){
            const shortBlock = createShortContent(item.shortContent)
            topicWrapper.appendChild(mainBlock);
            topicWrapper.appendChild(secondaryBlock);
            topicWrapper.appendChild(shortBlock);
        } else {
            topicWrapper.appendChild(mainBlock);
            topicWrapper.appendChild(secondaryBlock);
        }

        contentContainer.appendChild(topicWrapper);
    });
}

export default function createElement(historyData, physicsData, geographyData, civicEducationData, lawData) {
    const historyContainer = document.querySelector('.history-container');
    const physicsContainer = document.querySelector('.physics-container');
    const geographyContainer = document.querySelector('.geography-container'); 
    const civicEducationContainer = document.querySelector('.civicEducation-container')
    const lawContainer = document.querySelector('.law-container'); 

    const historyList = document.querySelector('.history-list');
    const physicsList = document.querySelector('.physics-list');
    const geographyList = document.querySelector('.geography-list');
    const civicEducationList = document.querySelector('.civicEducation-list');
    const lawList = document.querySelector('.law-list');

    renderSubjectData(historyData, historyList, historyContainer, 'history', 'history-topic-block');
    renderSubjectData(physicsData, physicsList, physicsContainer, 'physics', 'physics-topic-block');
    renderSubjectData(geographyData, geographyList, geographyContainer, 'geography', 'geography-topic-block');
    renderSubjectData(civicEducationData, civicEducationList, civicEducationContainer, 'civicEducation', 'civicEducation-topic-block');
    renderSubjectData(lawData, lawList, lawContainer, 'law', 'law-topic-block');
}
