export default function check(currentContainer){
    if (!currentContainer) return;

    const btnContainer = currentContainer.querySelector('.btn-container');
    if (!btnContainer) return;

    const activeTopic = currentContainer.querySelector('[class*="-topic-block"].is-active');

    const hasShortContent = activeTopic && activeTopic.querySelector('.short-content');

    if (hasShortContent) {
        btnContainer.classList.add('is-active');
    } else {
        btnContainer.classList.remove('is-active');
    }
}
