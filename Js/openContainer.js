import check from "./checkingChangeForms.js";

export default function openAndCloseContainer(){
    document.addEventListener('DOMContentLoaded', () => {
        const subjectHistory = document.querySelector('.history')
        const subjectPhysics = document.querySelector('.physics')
        const subjectGeography = document.querySelector('.geography')
        const subjectCivicEducation = document.querySelector('.civicEducation')
        const subjectLaw = document.querySelector('.law')
        const onlineLabBtn = document.querySelector('.lab-btn')

        const historyContainer = document.querySelector('.history-container')
        const physicsContainer = document.querySelector('.physics-container')
        const geographyContainer = document.querySelector('.geography-container')
        const civicEducationContainer = document.querySelector('.civicEducation-container')
        const lawContainer = document.querySelector('.law-container')
        const labContainer = document.querySelector('.lab-container')
        const nav = document.querySelector('.nav')
        const list = document.querySelectorAll('.list')
        const settingsContainer = document.querySelector('.settings-container')

        const closeBtn = document.querySelectorAll('.close-btn')

        if (!nav) {
            console.error("Критическая ошибка: элемент .nav все еще равен null! Проверьте верстку.");
            return; 
        }

        onlineLabBtn?.addEventListener('click', () => {
            labContainer?.classList.add('is-active')
        })

        subjectHistory?.addEventListener('click', () => {
            physicsContainer?.classList.remove('is-active')
            geographyContainer?.classList.remove('is-active')
            civicEducationContainer?.classList.remove('is-active')
            lawContainer?.classList.remove('is-active') 
            
            historyContainer?.classList.add('is-active')

            check(historyContainer)

            nav.classList.add('is-active')
        })

        subjectPhysics?.addEventListener('click', () => {
            historyContainer?.classList.remove('is-active')
            geographyContainer?.classList.remove('is-active')
            civicEducationContainer?.classList.remove('is-active')
            lawContainer?.classList.remove('is-active') 
            
            physicsContainer?.classList.add('is-active')

            check(physicsContainer)

            nav.classList.add('is-active')
        })

        subjectGeography?.addEventListener('click', () => {
            historyContainer?.classList.remove('is-active')
            physicsContainer?.classList.remove('is-active')
            civicEducationContainer?.classList.remove('is-active')
            lawContainer?.classList.remove('is-active') 
            
            geographyContainer?.classList.add('is-active')

            check(geographyContainer)

            nav.classList.add('is-active')
        })

        subjectCivicEducation?.addEventListener('click', () => {
            historyContainer?.classList.remove('is-active')
            physicsContainer?.classList.remove('is-active')
            geographyContainer?.classList.remove('is-active')
            lawContainer?.classList.remove('is-active') 
            
            civicEducationContainer?.classList.add('is-active')

            check(civicEducationContainer)

            nav.classList.add('is-active')
        })

        subjectLaw?.addEventListener('click', () => {
            historyContainer?.classList.remove('is-active')
            physicsContainer?.classList.remove('is-active')
            geographyContainer?.classList.remove('is-active')
            civicEducationContainer?.classList.remove('is-active') 
            
            lawContainer?.classList.add('is-active') 

            check(lawContainer)

            nav.classList.add('is-active')
        })

        closeBtn.forEach(btn => btn.addEventListener('click', () => {
            historyContainer?.classList.remove('is-active')
            physicsContainer?.classList.remove('is-active')
            geographyContainer?.classList.remove('is-active')
            civicEducationContainer?.classList.remove('is-active')
            lawContainer?.classList.remove('is-active')
            labContainer?.classList.remove('is-active')
            nav.classList.remove('is-active')
            list.forEach(list => list?.classList.remove('is-active'))
            settingsContainer.classList.remove('is-active')
        }))
    });
}
