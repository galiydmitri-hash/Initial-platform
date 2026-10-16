export default function changeForms() {
    const btnContainer = document.querySelector('.nav .btn-container');
    if (!btnContainer) return;

    const allInfo = btnContainer.querySelector('.all-info');
    const mainInfo = btnContainer.querySelector('.main-info');
    const bg = btnContainer.querySelector('.bg');

    if (!allInfo || !mainInfo) return;

    const getActiveSubjectContainer = () => {
        return document.querySelector('.container.is-active:not(.lab-container)');
    };

    allInfo.addEventListener('click', () => {
        if (bg) bg.style.transform = "translateY(-50%) translateX(0)";

        allInfo.style.fontSize = '20px';
        mainInfo.style.fontSize = '15px';

        const currentContainer = getActiveSubjectContainer();
        if (!currentContainer) return;

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
        if (bg) {
            const step = btnContainer.clientWidth / 2;
            bg.style.transform = `translateY(-50%) translateX(${step}px)`;
        }

        mainInfo.style.fontSize = '20px';
        allInfo.style.fontSize = '15px';

        const currentContainer = getActiveSubjectContainer();
        if (!currentContainer) return;

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