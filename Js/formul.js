const geographyCountBtn = document.querySelector('.geography-count-btn');
const physicsCountBtn = document.querySelector('.physics-count-btn');

const geographySection = document.getElementById('geography-section')
const physicsSection = document.getElementById('physics-section')

const busyPeople = document.getElementById('busyPeople');
const busyPeople2 = document.getElementById('busyPeople2');
const lazyPeople = document.getElementById('lazyPeople');
const allPeople = document.getElementById('allPeople');

const elecEkvi = document.getElementById('elecEkvi');
const elecPower = document.getElementById('elecPower'); 

const geographyResultContainer = document.querySelector('.geography-result');
const physicsResultContainer = document.querySelector('.physics-result');

const clinBtns = document.querySelectorAll('.clin-btn');

const geographySubjectBtn = document.querySelector('.geography-subject-btn');
const geographyParagraphBtn = document.querySelector('.geography-paragraph-btn');
const physicsSubjectBtn = document.querySelector('.physics-subject-btn');
const physicsParagraphBtn = document.querySelector('.physics-paragraph-btn');

const labContainer = document.querySelector('.lab-container');
const geographyContainer = document.querySelector('.geography-container');
const physicsContainer = document.querySelector('.physics-container');

const geographyInputElements = [busyPeople, busyPeople2, lazyPeople, allPeople];
const physicsInputElements = [elecEkvi, elecPower];

geographySubjectBtn.addEventListener('click', () => {
    labContainer.classList.remove('is-active');
    geographyContainer.classList.add('is-active');
});

physicsSubjectBtn.addEventListener('click', () => {
    labContainer.classList.remove('is-active');
    physicsContainer.classList.add('is-active');
});

geographyParagraphBtn.addEventListener('click', () => {
    geographyContainer.classList.add('is-active');

    const targetSection = Array.from(geographyContainer.children);
    const list = Array.from(document.querySelector('.geography-list').children);

    list.forEach(el => el.classList.remove('is-active'));
    targetSection.forEach(el => el.classList.remove('is-active'));

    const targetListItem = list.find(el => el.textContent.trim() === '§ 9');
    if (targetListItem) {
        targetListItem.classList.add('is-active');
    }

    const currentTargetSection = targetSection.find(el => {
        return el.querySelector('h2')?.textContent.trim() === '§ 9';
    });
    if (currentTargetSection) {
        currentTargetSection.classList.add('is-active');
    }
});

physicsParagraphBtn.addEventListener('click', () => {
    physicsContainer.classList.add('is-active');

    const targetSection = Array.from(physicsContainer.children);
    const list = Array.from(document.querySelector('.physics-list').children);

    list.forEach(el => el.classList.remove('is-active'));
    targetSection.forEach(el => el.classList.remove('is-active'));

    const targetListItem = list.find(el => el.textContent.trim() === '§ 3');
    if (targetListItem) {
        targetListItem.classList.add('is-active');
    }

    const currentTargetSection = targetSection.find(el => {
        return el.querySelector('h2')?.textContent.trim() === '§ 3';
    });
    if (currentTargetSection) {
        currentTargetSection.classList.add('is-active');
    }
});

function count1(areaValue1, areaValue3) {
    const result = areaValue1 + areaValue3;
    geographyResultContainer.textContent = `Результат: ${result} ос.`;
}

function count2(areaValue2, areaValue4) {
    if (areaValue4 === 0) {
        geographyResultContainer.textContent = 'Ошибка: общее количество равно 0';
        return;
    }
    const result = (areaValue2 / areaValue4) * 100;
    geographyResultContainer.textContent = `Результат: ${result.toFixed(1)}%`;
}

function count3(areaValue1, areaValue2) {
    const result = areaValue1 * (areaValue2 * 10 ** -6);
    physicsResultContainer.textContent = `Результат: ${result.toFixed(2)}`;
}

export default function counter() {
    geographyCountBtn.addEventListener('click', () => {
        if (!busyPeople || !busyPeople2 || !lazyPeople || !allPeople || !geographyResultContainer) return;

        const raw1 = busyPeople.value.trim();
        const raw2 = busyPeople2.value.trim();
        const raw3 = lazyPeople.value.trim();
        const raw4 = allPeople.value.trim();

        if (raw1 !== '' && raw3 !== '') {
            const areaValue1 = Number(raw1);
            const areaValue3 = Number(raw3);
            count1(areaValue1, areaValue3);
        } else if (raw2 !== '' && raw4 !== '') {
            const areaValue2 = Number(raw2);
            const areaValue4 = Number(raw4);
            count2(areaValue2, areaValue4);
        }
    });

    physicsCountBtn.addEventListener('click', () => {
        if (!elecEkvi || !elecPower || !physicsResultContainer) return;

        const raw1 = elecEkvi.value.trim();
        const raw2 = elecPower.value.trim();

        if (raw1 === '' || raw2 === '') return;

        const areaValue1 = Number(raw1);
        const areaValue2 = Number(raw2);

        count3(areaValue1, areaValue2);
    }); 

    if (clinBtns.length > 0) {
        clinBtns.forEach((btn) => {
            btn.addEventListener('click', (event) => { 

                if (event.target.closest('#geography-section') || geographySection.contains(event.target)) {
                    geographyInputElements.forEach(el => el.value = '');
                    geographyResultContainer.textContent = 'Результат: ...';
                }


                if (event.target.closest('#physics-section') || physicsSection.contains(event.target)) {
                    physicsInputElements.forEach(el => el.value = '');
                    physicsResultContainer.textContent = 'Результат: ...';
                }
            });            
        });
    }
}