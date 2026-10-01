const subjectHistory = document.querySelector('.history')
const subjectPhysics = document.querySelector('.physics')
const historyContainer = document.querySelector('.history-container')
const physicsContainer = document.querySelector('.physics-container')
const closeBtn = document.querySelectorAll('.close-btn')

export default function openAndCloseContainer(){
    subjectHistory.addEventListener('click', () => {
        if (physicsContainer.classList.contains('is-active')){
            physicsContainer.classList.remove('is-active')
        } 
        
        historyContainer.classList.add('is-active')
    }) 

    subjectPhysics.addEventListener('click', () => {
        if (historyContainer.classList.contains('is-active')){
            historyContainer.classList.remove('is-active')
        } 
        
        physicsContainer.classList.add('is-active')
    })

    closeBtn.forEach(btn => btn.addEventListener('click', () => {document.querySelectorAll('.container').forEach((el) => el.classList.remove('is-active'))}))
}