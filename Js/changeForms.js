function changeForms(currentContainer) {
    if (!currentContainer) return; 

    const btnContainer = currentContainer.querySelector('.btn-container');
    
    if (!btnContainer) return; 

    const allInfo = btnContainer.querySelector('.all-info');
    const mainInfo = btnContainer.querySelector('.main-info');
    const bg = btnContainer.querySelector('.bg');

    if (!allInfo || !mainInfo) return;

    allInfo.addEventListener('click', () => {
        if (bg) bg.style.transform = "translateY(-50%) translateX(0)";

        allInfo.style.fontSize = '20px';
        mainInfo.style.fontSize = '15px';

        const blocks = Array.from(currentContainer.querySelectorAll('[class*="-topic-block"]'))
            .filter(el => el.querySelector('.short-content'));

        blocks.forEach((block) => {
            const fullBlock = block.querySelectorAll('.main-content, .secondary-content, .title');
            const shortBlock = block.querySelector('.short-content');

            fullBlock.forEach((el) => {
                el.classList.remove('is-disable'); 
                el.classList.add('is-active');
            });
            if (shortBlock) shortBlock.classList.remove('is-active');
        });
    });

    mainInfo.addEventListener('click', () => {
        if (bg && btnContainer) {
            const step = btnContainer.clientWidth / 2;
            bg.style.transform = `translateY(-50%) translateX(${step}px)`;
        }

        mainInfo.style.fontSize = '20px';
        allInfo.style.fontSize = '15px';

        const blocks = Array.from(currentContainer.querySelectorAll('[class*="-topic-block"]'))
            .filter(el => el.querySelector('.short-content'));

        blocks.forEach((block) => {
            const fullBlock = block.querySelectorAll('.main-content, .secondary-content, .title');
            const shortBlock = block.querySelector('.short-content');

            fullBlock.forEach((el) => {
                el.classList.remove('is-active'); 
                el.classList.add('is-disable');
            });
            if (shortBlock) shortBlock.classList.add('is-active');
        });
    });
}

export default function callChangeForms(){
    const historyContainer = document.querySelector('.history-container');
    const physicsContainer = document.querySelector('.physics-container');
    const geographyContainer = document.querySelector('.geography-container');
    const civicEducationContainer = document.querySelector('.civicEducation-container');    
    const lawContainer = document.querySelector('.law-container');    
    
    changeForms(historyContainer)
    changeForms(physicsContainer)
    changeForms(geographyContainer)
    changeForms(civicEducationContainer)
    changeForms(lawContainer)
}
