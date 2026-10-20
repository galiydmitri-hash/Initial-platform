function paragraphCounter(dataArray, subjectName) {
    const card = document.querySelector(`.subject-card[data-subject="${subjectName}"]`);
    if (card) {
        const paragraphCounterElement = card.querySelector('.paragraph-counter');
        const total = dataArray.length; 
        paragraphCounterElement.textContent = `Кількість параграфів: ${total}`;
    }
}

export default function counter(historyData, physicsData, geographyData, civicEducationData, lawData){
    paragraphCounter(historyData, 'history')
    paragraphCounter(physicsData, 'physics')
    paragraphCounter(geographyData, 'geography')
    paragraphCounter(civicEducationData, 'civicEducation')
    paragraphCounter(lawData, 'law')
}