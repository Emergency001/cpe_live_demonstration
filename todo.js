// Load tasks from localStorage on page load
window.onload = function() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

// Add task
function addTask() {
    const input = document.getElementById("task");
    const taskText = input.value.trim();
    if (taskText === "") return;

    createTaskElement(taskText, false);
    saveTasks();
    input.value = "";
}

// Create list item with delete button and completed toggle
function createTaskElement(taskText, completed) {
    const li = document.createElement("li");
    li.textContent = taskText;
    if (completed) li.classList.add("completed");

    // Toggle completed
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
        saveTasks();
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "deleteBtn";
    delBtn.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent toggling completion
        li.remove();
        saveTasks();
    });

    li.appendChild(delBtn);
    document.getElementById("list").appendChild(li);
}

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#list li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
