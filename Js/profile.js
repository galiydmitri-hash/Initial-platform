const currentAge = document.querySelector('.current-age')
const allSaved = document.querySelector('.all-saved')
const allNote = document.querySelector('.all-note')
const lastNote = document.querySelector('.last-note')

function currentAgeFunction(){
    const date = new Date()
    const currentYear = date.getFullYear()
    const age = currentYear - 2012
    currentAge.textContent = `Вік: ${age}`
}

export function allSavedFunction(){
    setTimeout(() => {
        const savedList = Array.from(document.querySelector('.saved-list').children)
        const savedListLength = savedList.length
        allSaved.textContent = `Обрано §: ${savedListLength}`
    }, 50)
}

export function allNoteFunction(){
    setTimeout(() => {
        const noteList = Array.from(document.querySelector('.note-list').children)
        const noteListLength = noteList.length
        allNote.textContent = `Нотатоки: ${noteListLength}`
    }, 50)
}

export function lastNoteFunction() {
    setTimeout(() => {
        const noteList = document.querySelector('.note-list');
        const lastNoteContainer = document.querySelector('.last-note') || window.lastNote;

        if (!lastNoteContainer) return;

        lastNoteContainer.innerHTML = '';

        const lastChild = noteList ? noteList.lastElementChild : null;

        if (lastChild) {
            const clone = lastChild.cloneNode(true);
            
            const cloneDeleteBtn = clone.querySelector('.delete-btn');
            if (cloneDeleteBtn) cloneDeleteBtn.remove();

            lastNoteContainer.append(clone);
        }
    }, 50);
}


export default function profile(){
    currentAgeFunction()
    allSavedFunction()
    allNoteFunction()
    lastNoteFunction()
}