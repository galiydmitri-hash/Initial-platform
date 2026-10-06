const subjectHistory = document.querySelector('.history')
const subjectPhysics = document.querySelector('.physics')
const subjectGeography = document.querySelector('.geography')
const historyContainer = document.querySelector('.history-container')
const physicsContainer = document.querySelector('.physics-container')
const geographyContainer = document.querySelector('.geography-container')
const closeBtn = document.querySelectorAll('.close-btn')

export default function openAndCloseContainer(){
    subjectHistory.addEventListener('click', () => {
        if (physicsContainer.classList.contains('is-active')){
            historyContainer.classList.remove('is-active')
            geographyContainer.classList.remove('is-active')
        } 
        
        historyContainer.classList.add('is-active')
    }) 

    subjectPhysics.addEventListener('click', () => {
        if (historyContainer.classList.contains('is-active')){
            physicsContainer.classList.remove('is-active')
            geographyContainer.classList.remove('is-active')
        } 
        
        physicsContainer.classList.add('is-active')
    })

    subjectGeography.addEventListener('click', () => {
        if (geographyContainer.classList.contains('is-active')){
            historyContainer.classList.remove('is-active')
            physicsContainer.classList.remove('is-active')
        } 
        
        geographyContainer.classList.add('is-active')
    })

    closeBtn.forEach(btn => btn.addEventListener('click', () => {document.querySelectorAll('.container').forEach((el) => el.classList.remove('is-active'))}))
}