function openContainer(card){
    if (!card) return;

    card.addEventListener('click', () => {
        const dataTrigger = card.dataset.subject;
        const container = document.querySelector(`[data-subject="${dataTrigger}-container"]`);
        const allContainer = document.querySelectorAll('.container')
        const menu = document.querySelector('.menu')
        
        if (container) {
            allContainer.forEach(el => el.classList.remove('is-active'))
            container.classList.add('is-active');
            menu.classList.add('is-disable')
            document.querySelector('body').classList.add('is-lock')
        }
    });
}

export default function callOpenContainer(){
    const historySubjectCard = document.querySelector('[data-subject="history"]')
    const physicsSubjectCard = document.querySelector('[data-subject="physics"]')
    const geographySubjectCard = document.querySelector('[data-subject="geography"]')
    const civicEducationSubjectCard = document.querySelector('[data-subject="civicEducation"]')
    const lawSubjectCard = document.querySelector('[data-subject="law"]')
    
    openContainer(historySubjectCard)
    openContainer(physicsSubjectCard)
    openContainer(geographySubjectCard)
    openContainer(civicEducationSubjectCard)
    openContainer(lawSubjectCard)
}
