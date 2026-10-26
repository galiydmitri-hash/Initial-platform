export default function switchContainer() {
    const menu = document.querySelector('.menu');
    if (!menu) return;

    const menuBtns = document.querySelectorAll('.menu-btn');
    const globalContainer = document.querySelectorAll('.global-container');

    menu.addEventListener('click', (event) => {
        const menuBtn = event.target.closest('.menu-btn');
        const homeBtn = event.target.closest('.home-btn');

        if (menuBtn) {
            const data = menuBtn.dataset.switch;
            const targetContainer = document.querySelector(`[data-switch="${data}-container"]`);
            const homeBtn = document.querySelector('.home-btn')

            if (!targetContainer) return;

            homeBtn.querySelector('.icon').classList.remove('is-selected')

            menuBtns.forEach((btn) => {
                btn.querySelector('.icon')?.classList.remove('is-selected');
            });

            document.querySelectorAll('.global-container').forEach((container) => {
                container.classList.remove('is-active');
            });

            menuBtn.querySelector('.icon')?.classList.add('is-selected');
            targetContainer.classList.add('is-active');
        } 
        else if (homeBtn) {
            menuBtns.forEach((btn) => {
                btn.querySelector('.icon')?.classList.remove('is-selected');
            });

            document.querySelector('.icon')?.classList.add('is-selected');

            if (globalContainer) {
                globalContainer.forEach(el => el.classList.remove('is-active'))
            }
        }
    });
}
