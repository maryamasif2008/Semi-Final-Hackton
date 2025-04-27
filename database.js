// data base
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";
function saveTask() {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  if (!title) return alert("Please enter a title.");

  if (editingTask) {
    editingTask.querySelector("h3").innerText = title;
    editingTask.querySelector("p").innerText = desc;
  } else {
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="task-buttons">
        <button class="btn-inprogress" onclick="moveTask(this, 'inprogress')">To In Progress</button>
        <button class="btn-done" onclick="moveTask(this, 'done')">To Done</button>
        <button class="btn-edit" onclick="editTask(this)">Edit</button>
        <button class="btn-delete" onclick="deleteTask(this)">Delete</button>
      </div>
    `;
    document.getElementById("todo").appendChild(task);

    // Save to Firebase
    const db = getDatabase();
    push(ref(db, 'tasks/'), {
      title: title,
      description: desc,
      status: "todo"
    });
  }

  modal.style.display = "none";
}
