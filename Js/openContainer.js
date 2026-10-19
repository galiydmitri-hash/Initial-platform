import check from "./checkingChangeForms.js";
import subjectDashboard, { checkFocusBtn } from "./subjectDashboard.js";

export default function openAndCloseContainer(){
    document.addEventListener('DOMContentLoaded', () => {
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
        const nav = document.querySelector('.nav')
        const list = document.querySelectorAll('.list')
        const settingsContainer = document.querySelector('.settings-container')
        const wrapperList = document.querySelector('.wrapper-list')

        const closeBtn = document.querySelectorAll('.close-btn')

        if (!nav) return; 

        subjectDashboard();

        const containers = [historyContainer, physicsContainer, geographyContainer, civicEducationContainer, lawContainer];

        function activateContainer(targetContainer) {
            if (!targetContainer) return;
            
            containers.forEach(c => c?.classList.remove('is-active'));
            targetContainer.classList.add('is-active');

            check(targetContainer);
            nav.classList.add('is-active');
            
            checkFocusBtn(targetContainer); 
            wrapperList.classList.add('is-visible')
        }

        subjectHistory?.addEventListener('click', () => activateContainer(historyContainer))
        subjectPhysics?.addEventListener('click', () => activateContainer(physicsContainer))
        subjectGeography?.addEventListener('click', () => activateContainer(geographyContainer))
        subjectCivicEducation?.addEventListener('click', () => activateContainer(civicEducationContainer))
        subjectLaw?.addEventListener('click', () => activateContainer(lawContainer))

        closeBtn.forEach(btn => btn.addEventListener('click', () => {
            containers.forEach(c => c?.classList.remove('is-active'));
            nav.classList.remove('is-active');
            list.forEach(el => el?.classList.remove('is-active'));
            settingsContainer?.classList.remove('is-active');
            wrapperList?.classList.remove('is-visible');
        }))
    });
}
