const subjectCard = document.querySelectorAll('.subject-card')

export default function text(){
    subjectCard.forEach((card) => {
        const paragraph = card.querySelector('p')
        if (paragraph.textContent.length >= 13){
            paragraph.style.fontSize = '20px'
        } else{
            paragraph.style.fontSize = '22px'
        }
    })
}