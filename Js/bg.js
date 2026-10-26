export default function bgColor(){
    const imgBgColor = ['#F59E0B', 
                    '#EC4899', 
                    '#10B981', 
                    '#06B6D4', 
                    '#8B5CF6'];

    const bgColor = ['#78350F', 
                        '#831843', 
                        '#064E3B', 
                        '#164E63', 
                        '#4C1D95'];
    const imgContainer = document.querySelectorAll('.img-container')
    const subjectCard = document.querySelectorAll('.subject-card')

    subjectCard.forEach((card, index) => {
        card.style.backgroundColor = `${bgColor[index]}`
    })

    imgContainer.forEach((block, index) => {
        block.style.backgroundColor = `${imgBgColor[index]}`
    })
}