function closeContainer(container){
    const closeBtn = container.querySelector('.close-btn') 

    if (!container || !closeBtn) return

    closeBtn.addEventListener('click', () => {
        container.classList.remove('is-active')
        const menu = document.querySelector('.menu')
        menu.classList.remove('is-disable')
        document.querySelector('body').classList.remove('is-lock')
    })
}

export default function callCloseContainer(){
    const historyContainer = document.querySelector('[data-subject="history-container"]');
    const physicsContainer = document.querySelector('[data-subject="physics-container"]');
    const geographyContainer = document.querySelector('[data-subject="geography-container"]');
    const civicEducationContainer = document.querySelector('[data-subject="civicEducation-container"]'); 
    const lawContainer = document.querySelector('[data-subject="law-container"]');

    closeContainer(historyContainer)
    closeContainer(physicsContainer)
    closeContainer(geographyContainer)
    closeContainer(civicEducationContainer)
    closeContainer(lawContainer)
}