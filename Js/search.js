const searchArea = document.querySelector('.search-area')

function searching(searchArea, list){
    const searchAreaValue = searchArea.value.trim().toLowerCase()

    list.forEach((btn) => {
        const topic = btn.querySelector('.topic').textContent.trim().toLowerCase()

        if (topic.includes(searchAreaValue)){
            btn.style.display = 'flex'
        } else {
            btn.style.display = 'none'
        }
    });
}

export default function callSearching(){
    searchArea.addEventListener('input', () => {
        const saveListArray = Array.from(document.querySelector('.saved-list').children)

        if (saveListArray.length === 0) console.log("Массив пустой, ты что не видешь?");

        searching(searchArea, saveListArray)
    })
}
