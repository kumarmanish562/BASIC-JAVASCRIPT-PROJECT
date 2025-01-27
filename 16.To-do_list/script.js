let task = [];

// Function to add a new task
const addTask = () => {
  const taskInput = document.getElementById('taskInput'); // Ensure this ID matches your HTML
  const text = taskInput.value.trim();  

  if (text) {
    task.push({ text: text, completed: false });
    taskInput.value = ''; // Clear input field after adding the task
    updateTaskList();
  }
};

// Function to update the task list UI
const updateTaskList = () => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  task.forEach((taskItem, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="taskItem">
        <div class="task ${taskItem.completed ? 'completed' : ''}">
          <input type="checkbox" class="xcheckbox" ${taskItem.completed ? 'checked' : ''} onchange="toggleTaskCompleted(${index})" />
          <p>${taskItem.text}</p>
        </div>
        <div class="icons">
          <img src="https://img.icons8.com/ios/50/000000/edit.png" class="edit" onclick="editTask(${index})" />
          <img src="https://img.icons8.com/ios/50/000000/delete-sign.png" class="delete" onclick="deleteTask(${index})" />
        </div>
      </div>
    `;
    taskList.appendChild(listItem);
  });
};

// Toggle task completion
const toggleTaskCompleted = (index) => {
  task[index].completed = !task[index].completed; // Toggle completed status
  updateTaskList(); // Update the UI
};

// Delete a task
const deleteTask = (index) => {
  task.splice(index, 1); // Remove the task from the list
  updateTaskList(); // Update the UI
};

// Edit a task
const editTask = (index) => {
  const newTask = prompt('Edit your task:', task[index].text);
  if (newTask !== null && newTask.trim() !== '') {
    task[index].text = newTask.trim();
    updateTaskList();
  }
};

// Add event listener to the "Add Task" button
document.getElementById('newTask').addEventListener('click', function (e) {
  e.preventDefault();
  addTask(); 
});
