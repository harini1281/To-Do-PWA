const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(task => addTaskToDOM(task));
};

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = "";
  }
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.onclick = () => {
    li.remove();
    removeTask(task);
  };

  li.appendChild(btn);
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
