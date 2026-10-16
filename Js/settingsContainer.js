const settingsContainer = document.querySelector('.settings-container')
const settingsBtn = document.querySelector('.settings-btn')
const colorElements = document.querySelectorAll('.color')
const downloadButtons = document.querySelectorAll('.downloadBg') 
const containers = document.querySelectorAll('.container')
const body = document.querySelector('body')

let savedColorData = JSON.parse(localStorage.getItem('colorData')) || {};

function applyBackground(style) {
    if (!style || style === 'none') return;
    containers.forEach(el => el.style.backgroundImage = style)
    body.style.backgroundImage = style
}

export default function settingsFunction(){
    if (savedColorData.style) {
        applyBackground(savedColorData.style);
        
        const activeEl = colorElements[savedColorData.index];
        if (activeEl) {
            activeEl.classList.add('is-selected');
        }
    }

    settingsBtn?.addEventListener('click', () => {
        settingsContainer?.classList.add('is-active')
    })

    colorElements.forEach((colorEl) => {
        colorEl.addEventListener('click', (event) => {
            event.currentTarget.classList.toggle('is-example')
        })
    })

    downloadButtons.forEach((btn, index) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); 

            const colorTarget = event.target.closest('.color')
            
            if (!colorTarget) {
                console.error('Родительский элемент .color не найден!');
                return;
            }

            const targetStyle = window.getComputedStyle(colorTarget).backgroundImage;

            colorElements.forEach(el => el.classList.remove('is-selected'))
            colorTarget.classList.add('is-selected')

            applyBackground(targetStyle);

            const colorObject = {
                style: targetStyle,
                index: index 
            }

            localStorage.setItem('colorData', JSON.stringify(colorObject));
            savedColorData = colorObject; 
        })
    })
}
