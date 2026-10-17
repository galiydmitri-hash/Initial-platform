import listWidth from "./listWidth.js";

export default function check(currentContainer) {
    const btnContainer = document.querySelector('.btn-container');
    if (!btnContainer) return;

    const activeContainer = currentContainer || document.querySelector('.container.is-active:not(.lab-container)');
    
    const activeTopic = activeContainer ? activeContainer.querySelector('[class*="-topic-block"].is-active') : null;
    const hasShortContent = activeTopic && activeTopic.querySelector('.short-content');

    if (hasShortContent) {
        btnContainer.classList.add('is-active');
        listWidth()
    } else {
        btnContainer.classList.remove('is-active');
        listWidth()
    }
}