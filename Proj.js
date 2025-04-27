// Navbar Responsive
const menuBtn = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Task Managment 
const modal = document.getElementById("taskModal");
const titleInput = document.getElementById("taskTitle");
const descInput = document.getElementById("taskDesc");
let editingTask = null;

document.getElementById("addTaskBtn").onclick = () => {
  modal.style.display = "flex";
  editingTask = null;
  titleInput.value = "";
  descInput.value = "";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

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
  }
  modal.style.display = "none";
}

function moveTask(btn, targetId) {
  const task = btn.closest(".task");
  document.getElementById(targetId).appendChild(task);
}

function editTask(btn) {
  editingTask = btn.closest(".task");
  titleInput.value = editingTask.querySelector("h3").innerText;
  descInput.value = editingTask.querySelector("p").innerText;
  modal.style.display = "flex";
}

function deleteTask(btn) {
  const task = btn.closest(".task");
  task.remove();
}
