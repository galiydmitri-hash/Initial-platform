export default function fastGoTo() {
    const paragraphCounter = document.querySelectorAll('.paragraph-counter');
    const subjectCard = document.querySelectorAll('.subject-card');

    subjectCard.forEach((card) => {
        const dataSubject = card.dataset.subject;
        const btnInsideCard = card.querySelector('.paragraph-counter');
        if (btnInsideCard && dataSubject) {
            btnInsideCard.dataset.subject = dataSubject;
        }
    });

    if (paragraphCounter.length === 0) {
        console.warn("Кнопки .paragraph-counter не найдены на странице!");
        return;
    }

    paragraphCounter.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const currentBtn = event.currentTarget;
            
            const parentCard = currentBtn.closest('.subject-card');
            
            if (!parentCard) {
                console.error("Не удалось найти родительскую карточку .subject-card для этой кнопки!");
                return;
            }

            const currentFastList = parentCard.querySelector('.fast-list');
            if (!currentFastList) {
                console.error("Внутри этой карточки не найден элемент .fast-list!");
                return;
            }

            currentFastList.innerHTML = '';

            const subject = currentBtn.dataset.subject;
            if (!subject) {
                console.error("У кликнутой кнопки отсутствует атрибут data-subject!", currentBtn);
                return;
            }

            const currentList = document.querySelector(`.${subject}-list`);
            
            if (currentList) {
                const getClone = Array.from(currentList.children).map(child => child.cloneNode(true));

                currentFastList.append(...getClone);

                currentFastList.classList.add('is-active')
            } else {
                console.warn(`Оригинальный список .${subject}-list не найден в HTML!`);
            }
        });
    });
}
