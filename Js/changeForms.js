export default function changeForms() {
    const allInfo = document.querySelector('.all-info');
    const mainInfo = document.querySelector('.main-info');
    const bg = document.querySelector('.bg');
    const btnContainer = document.querySelector('.btn-container');

    if (!allInfo || !mainInfo) return;

    allInfo.addEventListener('click', () => {
        if (bg) bg.style.transform = "translateY(-50%) translateX(0)";

        allInfo.style.fontSize = '20px';
        mainInfo.style.fontSize = '15px';

        const blocks = Array.from(document.querySelectorAll('[class*="-topic-block"]'))
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

        const blocks = Array.from(document.querySelectorAll('[class*="-topic-block"]'))
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
