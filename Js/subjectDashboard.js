import check from "./checkingChangeForms.js"

export function checkFocusBtn(currentContainer) {
    if (!currentContainer) return;
    
    const subjectButton = document.querySelectorAll('.subject-button');
    const cleanClass = currentContainer.className
        .replace('container', '')
        .replace('is-active', '')
        .trim();

    subjectButton.forEach((btn) => {
        btn.classList.remove('is-focus');
        if (btn.dataset.target === `.${cleanClass}`) {
            btn.classList.add('is-focus');
        }
    });
}

export default function subjectDashboard(){
    const subjectList = document.querySelector('.subject-list')
    const wrapperList = document.querySelector('.wrapper-list')
    const subjectCard = document.querySelectorAll('.subject-card')
    const openListBtn = document.querySelector('.open-list-btn')
    const container = document.querySelectorAll('.container')
    const list = document.querySelectorAll('.list')

    if (!subjectList || !wrapperList || !openListBtn) return

    subjectList.innerHTML = ''

    subjectCard.forEach((card) => {
        const pElement = card.querySelector('p')
        if (!pElement) return
        
        const text = pElement.textContent
        const cardClass = card.className.replace('subject-card', '').trim()
        
        const subjectButton = document.createElement('button')
        subjectButton.className = `subject-button ${cardClass}`
        subjectButton.dataset.target = `.${cardClass}-container`
        
        subjectButton.innerHTML = `
            <p class="subject-button-text">${text}</p>
            <img src="Image/${cardClass}-icon.webp" alt="${cardClass}-icon" class="dashboard-img">
        `
        subjectList.appendChild(subjectButton)
    })

    const subjectButton = document.querySelectorAll('.subject-button')

    subjectButton.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const currentBtn = event.target.closest('.subject-button')
            if (!currentBtn) return

            subjectButton.forEach(el => el.classList.remove('is-focus'))
            currentBtn.classList.add('is-focus')

            const targetSelector = currentBtn.dataset.target
            const targetContainer = document.querySelector(targetSelector)

            if (targetContainer) {
                container.forEach(el => el?.classList.remove('is-active'))
                list.forEach(el => el?.classList.remove('is-active'))

                targetContainer.classList.add('is-active')
                
                const nav = document.querySelector('.nav')
                nav?.classList.add('is-active')

                if (typeof check === 'function') {
                    check(targetContainer)
                }
            }
        })
    })

    openListBtn.onclick = null 
    openListBtn.addEventListener('click', () => {
        wrapperList.classList.toggle('is-active')
        const isActive = wrapperList.classList.contains('is-active')
        subjectList.classList.toggle('is-active', isActive)
    })

    function getWindowWidth(){
        const windowWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth
        wrapperList.style.left = `${(windowWidth * 2.5) / 100}px`
    }

    getWindowWidth()
    window.removeEventListener('resize', getWindowWidth)
    window.addEventListener('resize', getWindowWidth)
}
