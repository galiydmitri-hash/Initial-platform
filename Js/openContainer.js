const subjectHistory = document.querySelector('.history')
const subjectPhysics = document.querySelector('.physics')
const subjectGeography = document.querySelector('.geography')
const subjectCivicEducation = document.querySelector('.civicEducation')
const subjectLaw = document.querySelector('.law')

const historyContainer = document.querySelector('.history-container')
const physicsContainer = document.querySelector('.physics-container')
const geographyContainer = document.querySelector('.geography-container')
const civicEducationContainer = document.querySelector('.civicEducation-container')
const lawContainer = document.querySelector('.law-container')

const closeBtn = document.querySelectorAll('.close-btn')

export default function openAndCloseContainer(){
    subjectHistory.addEventListener('click', () => {
        physicsContainer.classList.remove('is-active')
        geographyContainer.classList.remove('is-active')
        civicEducationContainer.classList.remove('is-active')
        lawContainer.classList.remove('is-active') 
        
        historyContainer.classList.add('is-active')
    })

    subjectPhysics.addEventListener('click', () => {
        historyContainer.classList.remove('is-active')
        geographyContainer.classList.remove('is-active')
        civicEducationContainer.classList.remove('is-active')
        lawContainer.classList.remove('is-active') 
        
        physicsContainer.classList.add('is-active')
    })

    subjectGeography.addEventListener('click', () => {
        historyContainer.classList.remove('is-active')
        physicsContainer.classList.remove('is-active')
        civicEducationContainer.classList.remove('is-active')
        lawContainer.classList.remove('is-active') 
        
        geographyContainer.classList.add('is-active')
    })

    subjectCivicEducation.addEventListener('click', () => {
        historyContainer.classList.remove('is-active')
        physicsContainer.classList.remove('is-active')
        geographyContainer.classList.remove('is-active')
        lawContainer.classList.remove('is-active') 
        
        civicEducationContainer.classList.add('is-active')
    })

    subjectLaw.addEventListener('click', () => {
        historyContainer.classList.remove('is-active')
        physicsContainer.classList.remove('is-active')
        geographyContainer.classList.remove('is-active')
        civicEducationContainer.classList.remove('is-active') 
        
        lawContainer.classList.add('is-active') 
    })

    closeBtn.forEach(btn => btn.addEventListener('click', () => {
        historyContainer.classList.remove('is-active')
        physicsContainer.classList.remove('is-active')
        geographyContainer.classList.remove('is-active')
        civicEducationContainer.classList.remove('is-active')
        lawContainer.classList.remove('is-active')
    }))
}
