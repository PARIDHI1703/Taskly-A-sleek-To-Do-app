// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECTING DOM ELEMENTS
    // Get references to the HTML elements we need to interact with.
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // 2. LOAD TASKS FROM LOCAL STORAGE
    // This function runs once when the page loads to display any saved tasks.
    const loadTasks = () => {
        // Retrieve the tasks string from local storage, or an empty array string if nothing is stored.
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.forEach(task => createTaskElement(task.text, task.completed));
    };

    // 3. SAVE TASKS TO LOCAL STORAGE
    // This function runs every time a task is added, deleted, or toggled.
    const saveTasks = () => {
        const tasks = [];
        // Select all the task items currently on the page
        document.querySelectorAll('.task-item').forEach(taskItem => {
            tasks.push({
                text: taskItem.firstChild.textContent, // Get the task text
                completed: taskItem.classList.contains('completed') // Check if it's completed
            });
        });
        // Convert the array of task objects into a JSON string and save it.
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // 4. CREATE A NEW TASK ELEMENT IN THE HTML
    // This function builds the HTML for a single task item.
    const createTaskElement = (taskText, isCompleted) => {
        // Create the list item (<li>)
        const li = document.createElement('li');
        li.className = 'task-item';
        if (isCompleted) {
            li.classList.add('completed');
        }
        
        // Create the task text node
        const textNode = document.createTextNode(taskText);
        li.appendChild(textNode);
        
        // Create the delete button (<button>)
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        
        // Add the delete button to the list item
        li.appendChild(deleteBtn);
        
        // Add the fully built list item to the main list (<ul>)
        taskList.appendChild(li);
    };

    // 5. FUNCTION TO HANDLE ADDING A NEW TASK
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get text and remove whitespace
        
        if (taskText === '') {
            alert('Please enter a task!');
            return; // Stop the function if the input is empty
        }
        
        createTaskElement(taskText, false); // Create the new task element
        saveTasks(); // Save the updated list to local storage
        taskInput.value = ''; // Clear the input field
        taskInput.focus(); // Put the cursor back in the input field
    };
    
    // 6. EVENT LISTENERS
    // These tell the browser to "listen" for user actions.

    // Listen for a click on the "Add" button
    addTaskBtn.addEventListener('click', addTask);
    
    // Listen for the "Enter" key press in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Listen for clicks on the entire task list (<ul>)
    // This is called Event Delegation - it's more efficient than adding a listener to every single task.
    taskList.addEventListener('click', (event) => {
        const target = event.target; // The specific element that was clicked
        
        if (target.classList.contains('delete-btn')) {
            // If the delete button was clicked...
            const taskItem = target.parentElement; // Get its parent (the <li>)
            taskList.removeChild(taskItem); // Remove the task from the page
            saveTasks(); // Save the change
        } else if (target.classList.contains('task-item')) {
            // If the task item itself was clicked...
            target.classList.toggle('completed'); // Toggle the 'completed' class on/off
            saveTasks(); // Save the change
        }
    });

    // Initial load of tasks when the page is first opened
    loadTasks();
});