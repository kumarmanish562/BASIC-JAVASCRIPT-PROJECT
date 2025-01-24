document.addEventListener('DOMContentLoaded', () => {
  const notesContainer = document.querySelector('.notes-container');
  const createNoteButton = document.querySelector('button');

  // Function to create a new note
  function createNote() {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
      <p contenteditable="true" class="input-box">New Note...</p>
      <button class="delete-btn">
        <img src="assets/delete.png" alt="Delete Icon">
      </button>
    `;

    // Append the new note to the container
    notesContainer.appendChild(note);
  }

  // Event listener for "Create Note" button
  createNoteButton.addEventListener('click', createNote);

  // Event listener for deleting notes
  notesContainer.addEventListener('click', (event) => {
    if (event.target.closest('.delete-btn')) {
      const note = event.target.closest('.note');
      note.remove();
    }
  });

  // Optional: Placeholder handling for editable notes
  notesContainer.addEventListener('focusin', (event) => {
    if (event.target.classList.contains('input-box') && event.target.textContent === 'New Note...') {
      event.target.textContent = ''; // Clear the placeholder text on focus
    }
  });

  notesContainer.addEventListener('focusout', (event) => {
    if (event.target.classList.contains('input-box') && event.target.textContent.trim() === '') {
      event.target.textContent = 'New Note...'; // Reset placeholder text if empty
    }
  });
});
