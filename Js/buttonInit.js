export default function buttonInit(dataArray, currentContainer, activeItem, renderPage){
    const prevButton = currentContainer.querySelector('.prev-page')
    const nextButton = currentContainer.querySelector('.next-page')
    
    if (!prevButton || !nextButton || !dataArray.length) return

    const currentIndex = dataArray.findIndex(item => item.id === activeItem.id)

    const isFirst = currentIndex === 0
    const isLast = currentIndex === dataArray.length - 1

    prevButton.classList.toggle('is-disable', isFirst)
    prevButton.classList.toggle('is-active', !isFirst)

    nextButton.classList.toggle('is-disable', isLast)
    nextButton.classList.toggle('is-active', !isLast)

    nextButton.addEventListener('click', () => {
        if (!isLast) {
            const nextItem = dataArray[currentIndex + 1];
            renderPage(nextItem);
        }
    })

    prevButton.addEventListener('click', () => {
        if (!isFirst) {
            const prevItem = dataArray[currentIndex - 1];
            renderPage(prevItem);
        }
    })
}
