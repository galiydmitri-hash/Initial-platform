import { allNoteFunction, lastNoteFunction } from "./profile.js";

let renderNotes = JSON.parse(localStorage.getItem('note')) || [];

export default function createNote() {
    const noteArea = document.querySelector('.note-area');
    const noteBtn = document.querySelector('.note-btn');
    const noteList = document.querySelector('.note-list');

    const generateNoteHtml = (note) => {
        return `<div class="note" data-id="${note.id}">
                    <div class="icon-container">
                        <svg xmlns="http://w3.org" viewBox="0 0 64 64" style="height: 40px; width: 40px">
                            <path d="M16 6H39L52 19V54C52 56.2 50.2 58 48 58H16C13.8 58 12 56.2 12 54V10C12 7.8 13.8 6 16 6Z" fill="currentColor"/>
                            <path d="M39 6V19H52" fill="none" stroke="#258bff" stroke-width="3" stroke-linejoin="round"/>
                            <path d="M22 30H42M22 38H42M22 46H36" stroke="#258bff" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <p class="note-text">${note.text}</p>
                    <div class="note-time">${note.timeStr}</div>
                    <button class="delete-btn">Видалити</button>
                </div>`;
    };

    const displayNote = (note) => {
        noteList.insertAdjacentHTML('beforeend', generateNoteHtml(note));
    };

    renderNotes.forEach(note => displayNote(note));

    noteBtn.addEventListener('click', () => {
        const noteAreaValue = noteArea.value.trim();
        if (noteAreaValue === '') return;

        const time = new Date();
        const date = time.getDate();
        const month = String(time.getMonth() + 1).padStart(2, '0'); 
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0'); 

        const currentTimeStr = `Ви додали цю нотатку ${date}.${month} о ${hours}:${minutes}`;

        const newNote = {
            id: Date.now(), 
            text: noteAreaValue,
            timeStr: currentTimeStr
        };

        renderNotes.push(newNote);
        localStorage.setItem('note', JSON.stringify(renderNotes));

        displayNote(newNote);

        allNoteFunction()
        lastNoteFunction()

        noteArea.value = '';
    });

    noteList.addEventListener('click', (event) => {
        const deleteBtn = event.target.closest('.delete-btn');
        if (!deleteBtn) return;

        const noteElement = deleteBtn.closest('.note');
        if (!noteElement) return;

        const noteText = noteElement.querySelector('.note-text');
        const noteTime = noteElement.querySelector('.note-time');
        const iconContainer = noteElement.querySelector('.icon-container');
        const noteId = Number(noteElement.dataset.id); 

        renderNotes = renderNotes.filter(note => note.id !== noteId);
        localStorage.setItem('note', JSON.stringify(renderNotes));

        if (iconContainer) iconContainer.classList.add('is-deleted');

        setTimeout(() => {
            if (noteTime) noteTime.classList.add('is-deleted');
        }, 275);

        setTimeout(() => {
            deleteBtn.classList.add('is-deleted');
        }, 550);

        setTimeout(() => {
            if (noteText) noteText.classList.add('is-deleted');
        }, 825);

        setTimeout(() => {
            noteElement.classList.add('is-deleted');
        }, 1000);

        setTimeout(() => {
            noteElement.remove();
            lastNoteFunction(); 
        }, 1175);

        allNoteFunction();
    });
}
