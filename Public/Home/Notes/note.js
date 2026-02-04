     const iconMap = {
  ask: "../Icons/send-horizontal.svg",
  dropdown: "../Icons/menu.svg",
  home: "../Icons/layout-dashboard.svg",
  tutorial: "../Icons/square-play.svg",
  study: "../Icons/book-open.svg",
  test: "../Icons/book-text.svg",
  notes: "../Icons/book.svg",
  assistant: "../Icons/sparkles.svg",
  calculator: "../Icons/calculator.svg",
  notification: "../Icons/bell.svg",
  settings: "../Icons/settings.svg",
};

document.querySelectorAll(".icon-container").forEach(container => {
  const iconName = container.dataset.icon;

  if (iconMap[iconName]) {
    const img = document.createElement("img");
    img.src = iconMap[iconName];
    img.classList.add("icon");
    container.appendChild(img);
  }
});

const btn = document.getElementById("floating-menu-btn");
const menu = document.getElementById("section1");

btn.addEventListener("click", () => {
    menu.style.display =
        menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.style.display = "none";
    }
});



const noteInput = document.getElementById("noteInput");
const savedNotesDiv = document.getElementById("savedNotes");

// Load saved notes on page load
window.onload = () => {
  const notes = JSON.parse(localStorage.getItem("myNotes")) || [];
  notes.forEach((note, index) => {
    createNoteElement(note, index);
  });
};

// Save a new note
function saveNote() {
  const content = noteInput.value.trim();
  if (!content) return alert("Write something first!");

  const notes = JSON.parse(localStorage.getItem("myNotes")) || [];
  notes.push(content);
  localStorage.setItem("myNotes", JSON.stringify(notes));

  createNoteElement(content, notes.length - 1);
  noteInput.value = "";
}

// Create textarea + button
function createNoteElement(content, index) {
  const container = document.createElement("div");

  const textarea = document.createElement("textarea");
  textarea.value = content;
  textarea.readOnly = true;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => deleteNote(index);

  container.appendChild(textarea);
  container.appendChild(deleteBtn);

  savedNotesDiv.appendChild(container);
}

// Delete note
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("myNotes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("myNotes", JSON.stringify(notes));
  location.reload(); // simple refresh
}