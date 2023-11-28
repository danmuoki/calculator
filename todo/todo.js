// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if(taskText === '') {
       alert('please enter a task.');
       return;       
    }

    const tasklist = document.getElementById('tasklist');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="completeTask(this)">complete</button>
    <button onclick="deleteTask(this)">Delete</button>
    `;
    tasklist.appendChild(taskItem);

    // clear the input field
    taskInput.value = '';
}

// function to mark a task completed
function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classlist.toggle('completed');
}

// function to delete a task
function deleteTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}