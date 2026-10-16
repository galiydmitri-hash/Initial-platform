export default function scroll() {
    const controlContainer = document.querySelector('.control-container');

    let isScrolling;
    
    if (!controlContainer) return;
    
    window.addEventListener('scroll', function() {   
        controlContainer.classList.add('is-active');

        clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            controlContainer.classList.remove('is-active');
        }, 200);
    });
}
