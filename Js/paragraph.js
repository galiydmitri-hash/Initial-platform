function init(object, sum){
    if (sum <= 4){
        object.textContent = `${sum} параграфа`
    } else if (sum > 4){
        object.textContent = `${sum} параграфів`
    }
}

function paragraph(dataArray, currentContainer){
    const id = dataArray.map(el => el.id)
    
    const paragraph = currentContainer.querySelector('.paragraph-kl')
    
    const sum = id.length

    init(paragraph, sum)
}

function paragraphInContainer(dataArray, currentContainer){
    const id = dataArray.map(el => el.id)
    
    const paragraph = currentContainer.querySelector('.paragraph-counter')
    
    const sum = id.length

    init(paragraph, sum)
}

export default function callParagraph(dataArray1, dataArray2, dataArray3, dataArray4, dataArray5){
    const historySubjectCard = document.querySelector('[data-subject="history"]')
    const physicsSubjectCard = document.querySelector('[data-subject="physics"]')
    const geographySubjectCard = document.querySelector('[data-subject="geography"]')
    const civicEducationSubjectCard = document.querySelector('[data-subject="civicEducation"]')
    const lawSubjectCard = document.querySelector('[data-subject="law"]')

    const historyContainer = document.querySelector('[data-subject="history-container"]');
    const physicsContainer = document.querySelector('[data-subject="physics-container"]');
    const geographyContainer = document.querySelector('[data-subject="geography-container"]');
    const civicEducationContainer = document.querySelector('[data-subject="civicEducation-container"]'); 
    const lawContainer = document.querySelector('[data-subject="law-container"]');

    paragraph(dataArray1, historySubjectCard)
    paragraph(dataArray2, physicsSubjectCard)
    paragraph(dataArray3, geographySubjectCard)
    paragraph(dataArray4, civicEducationSubjectCard)
    paragraph(dataArray5, lawSubjectCard)

    paragraphInContainer(dataArray1, historyContainer)
    paragraphInContainer(dataArray2, physicsContainer)
    paragraphInContainer(dataArray3, geographyContainer)
    paragraphInContainer(dataArray4, civicEducationContainer)
    paragraphInContainer(dataArray5, lawContainer)
}