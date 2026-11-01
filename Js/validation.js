import buttonInit from "./buttonInit.js";
import saveTopic, { activeContainer, loadingContent } from "./saveTopic.js";

function dataValidation(dataArray, currentContainer){
    const topicList = currentContainer.querySelector('.topic-list');
    const container = currentContainer.querySelector('.subject-container');

    if (!topicList || !container || !Array.isArray(dataArray)) return;

    function calculateReadingTime(array) {
        array.forEach(element => {
            const mainLength = element.mainContent ? element.mainContent.trim().split(/\s+/).length : 0;
            const secondaryLength = element.secondaryContent ? element.secondaryContent.trim().split(/\s+/).length : 0;
            const sum = mainLength + secondaryLength;

            element.readingTimeMin = Math.ceil(sum / 200); 
        });
    }

    calculateReadingTime(dataArray);

    const topicContent = dataArray.map((item) => {
        return `<div class="topic-btn" data-subject="${item.id}" data-container="${item.subject}">
                    <div class="topic-id">${item.id}</div>
                    <div class="topic-info-container">
                        <span class="topic">${item.title}</span>
                        <span class="time">${item.readingTimeMin} хв. читання</span>
                    </div>
                    <button class="open-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" style="height: 30px; width: 30px; transform: rotate(180deg)">
                            <path d="M38 14 20 32 38 50" stroke="#f4f7ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>`;
    }).join('');

    container.innerHTML = ``;
    topicList.innerHTML = topicContent;

    topicList.addEventListener('click', (event) => {
        const btn = event.target.closest('.topic-btn');
        const selectedId = btn?.dataset.subject;
        if (!selectedId) return;
        
        function renderActiveParagraph(activeItem) {
            const allId = dataArray.map(item => item.id).length;
            
            const containerContent = `
                <div class="topic-container" style="padding-bottom: 10px">
                    <div class="control-container">
                        <button class="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" style="height: 40px; width: 40px;">
                                <path d="M38 14 20 32 38 50" stroke="#f4f7ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <p>${activeItem.translatedSubject}</p>
                        <div class="paragraph">
                            <p>${activeItem.id}/${allId}</p>
                        </div>
                    </div>
                    <div class="main">
                        <div class="info">
                                <div class="current-paragraph">Параграф: ${activeItem.id}</div>
                                <div class="current-time">${activeItem.readingTimeMin} хв. читання</div>
                                <button class="toSaved">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="icon">
                                        <path d="M19 9H45C47.2 9 49 10.8 49 13V56L32 44 15 56V13C15 10.8 16.8 9 19 9Z" fill="currentColor"/>
                                        <path d="M23 19H41M23 26H41" stroke="#10264a" stroke-width="2.5" stroke-linecap="round"/>
                                    </svg>
                                </button>
                        </div>
                        <p class="title">${activeItem.title}</p>
                        <!-- Добавлено white-space: pre-line для сохранения переносов строк и отступов -->
                        <div class="main-content" style="display: flex; align-items: flex-start; gap: 10px;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" style="align-self: flex-start; height: 40px; width: 40px; color: yellow; flex-shrink: 0;">
                                <path d="M22 43C20 39 14 34 14 25C14 15.1 22.1 7 32 7S50 15.1 50 25C50 34 44 39 42 43H22Z" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M23 43H41M24 50H40M28 56H36" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
                                <path d="M25 27L30 32L39 22" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span style="white-space: pre-line;">${activeItem.mainContent}</span>
                        </div>
                        <div class="secondary-content" style="white-space: pre-line;">${activeItem.secondaryContent}</div>
                        <div class="button-container">
                            <button class="prev-page">Попередня</button>
                            <button class="next-page">Далі</button>
                        </div>
                    </div>
                </div>`;

            container.innerHTML = containerContent;

            const topicContainer = container.querySelector('.topic-container');
            if (!topicContainer) return;

            const closeButton = topicContainer.querySelector('.close-btn');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    topicContainer.classList.remove('is-active');
                    setTimeout(() => { container.innerHTML = ``; }, 300);
                });
            }

            buttonInit(dataArray, currentContainer, activeItem, renderActiveParagraph);
            saveTopic(btn, container);

            requestAnimationFrame(() => {
                topicContainer.classList.add('is-active');
            });
        }


        const activeItem = dataArray.find(item => String(item.id) === selectedId);
        if (activeItem) {
            renderActiveParagraph(activeItem);
        }
    });
}

export default function callDataValidation(dataArray1, dataArray2, dataArray3, dataArray4, dataArray5){
    const historyContainer = document.querySelector('[data-subject="history-container"]');
    const physicsContainer = document.querySelector('[data-subject="physics-container"]');
    const geographyContainer = document.querySelector('[data-subject="geography-container"]');
    const civicEducationContainer = document.querySelector('[data-subject="civicEducation-container"]'); 
    const lawContainer = document.querySelector('[data-subject="law-container"]');
    
    dataValidation(dataArray1, historyContainer);
    dataValidation(dataArray2, physicsContainer);
    dataValidation(dataArray3, geographyContainer);
    dataValidation(dataArray4, civicEducationContainer);
    dataValidation(dataArray5, lawContainer);

    loadingContent(); 
    activeContainer([dataArray1, dataArray2, dataArray3, dataArray4, dataArray5]);
}