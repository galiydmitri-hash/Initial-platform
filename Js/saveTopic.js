import { allSavedFunction } from "./profile.js";

let renderActiveItem = JSON.parse(localStorage.getItem('activeItem')) || [];

export function loadingContent() {
    document.addEventListener('DOMContentLoaded', () => {
        const saveList = document.querySelector('.saved-list');
        
        if (saveList && renderActiveItem.length > 0) {
            saveList.innerHTML = ''; 
            renderActiveItem.forEach(htmlString => {
                const template = document.createElement('div');
                template.innerHTML = htmlString.trim();
                const restoredBtn = template.firstChild;
                saveList.append(restoredBtn);
            });
        }
    });
}

export default function saveTopic(activeItemBtn, currentContainer) {
    const saveBtn = currentContainer.querySelector('.toSaved');
    const saveList = document.querySelector('.saved-list');

    const currentTitle = currentContainer.querySelector('.title').textContent.trim();
    const isAlreadySaved = renderActiveItem.some(htmlString => htmlString.includes(currentTitle));
    
    if (isAlreadySaved) {
        saveBtn.classList.add('is-active');
    }

    saveBtn.addEventListener('click', () => {
        saveBtn.classList.toggle('is-active');

        if (saveBtn.classList.contains('is-active')){
            const activeItemClone = activeItemBtn.cloneNode(true);
            saveList.append(activeItemClone);

            const itemHTML = activeItemBtn.outerHTML;
        
            renderActiveItem.push(itemHTML);
            localStorage.setItem('activeItem', JSON.stringify(renderActiveItem));

            allSavedFunction()
        } else {
            const saveListArray = Array.from(saveList.children);
            const currentTopicButton = saveListArray.find(btn => btn.dataset.subject === activeItemBtn.dataset.subject);
            
            if (currentTopicButton) {
                currentTopicButton.remove(); 
            }

            const targetSubject = activeItemBtn.dataset.subject;
            const itemIndex = renderActiveItem.findIndex(htmlString => 
                htmlString.includes(`data-subject="${targetSubject}"`)
            );

            if (itemIndex !== -1) {
                renderActiveItem.splice(itemIndex, 1);
            }

            localStorage.setItem('activeItem', JSON.stringify(renderActiveItem));

            allSavedFunction()
        }
    });
}

function renderActiveContainer(activeItem, pushContainer, currentDataArray){
    const allId = currentDataArray.length;
    
    const containerContent = `
        <div class="topic-container" style="padding-bottom: 95px">
            <div class="control-container">
                <button class="close-btn">
                    <svg xmlns="http://w3.org" viewBox="0 0 64 64" fill="none" style="height: 40px; width: 40px;">
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
                </div>
                <p class="title">${activeItem.title}</p>
                <div class="main-content">
                    <svg xmlns="http://w3.org" viewBox="0 0 64 64" fill="none" style="align-self: flex-start; height: 40px; width: 40px; color: yellow; flex-shrink: 0;">
                        <path d="M22 43C20 39 14 34 14 25C14 15.1 22.1 7 32 7S50 15.1 50 25C50 34 44 39 42 43H22Z" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23 43H41M24 50H40M28 56H36" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
                        <path d="M25 27L30 32L39 22" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>${activeItem.mainContent}</span>
                </div>
                <div class="secondary-content">${activeItem.secondaryContent}</div>
            </div>
        </div>`;

    pushContainer.innerHTML = '';
    pushContainer.innerHTML = containerContent;

    const topicContainer = pushContainer.querySelector('.topic-container');

    if (topicContainer) {
        const closeButton = topicContainer.querySelector('.close-btn');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                topicContainer.classList.remove('is-active');
                setTimeout(() => { pushContainer.innerHTML = ''; }, 300);
            });
        }
        
        requestAnimationFrame(() => {
            topicContainer.classList.add('is-active');
        });
    }
}

export function activeContainer(allDataArrays) {
    const saveList = document.querySelector('.saved-list');
    if (!saveList) return;

    saveList.addEventListener('click', (event) => {
        const btn = event.target.closest('.topic-btn');
        if (!btn) return; 

        const topicId = btn.dataset.subject;
        const containerSubjectName = btn.dataset.container; 

        if (!containerSubjectName || !topicId) return;

        const savedContainer = document.querySelector('.saved-container');
        if (!savedContainer) return;

        const flatData = allDataArrays.flat();
        const activeItem = flatData.find(item => String(item.id) === topicId && item.subject === containerSubjectName);

        if (activeItem) {
            const currentSubjectArray = flatData.filter(item => item.subject === containerSubjectName);
            renderActiveContainer(activeItem, savedContainer, currentSubjectArray);
        }
    });
} 
