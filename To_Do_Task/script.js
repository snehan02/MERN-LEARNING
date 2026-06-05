const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const updateStats = () => {
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
};
  
const renderTasks = () => {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <div class="task-actions">
                <button class="complete-btn" onclick="toggleTask(${index})">✓</button>
                <button class="delete-btn" onclick="deleteTask(${index})">🗑</button>
            </div>
        `;

        taskList.appendChild(li);
    });

    updateStats();
};

const addTask = () => {
    const text = taskInput.value.trim();

    if (text === "") return;

    tasks.push({
        text,
        completed: false
    });

    saveTasks();
    renderTasks();
    taskInput.value = "";
};

const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
};

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

renderTasks();

window.toggleTask = toggleTask;
window.deleteTask = deleteTask;