// task array to store all tasks
let tasks = [];

//initial task id
let taskId = 1;

// function to create add a new task
function addTask(name, description) {
    const newTask = {
        id: taskId++,  
        name: name,
        description: description
    };
    tasks.push(newTask); 
}

// function to read view all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log('No tasks available.');
        return;
    }
    console.log('Tasks List:');
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

// function to update a task by ID
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log('Task not found.');
        return;
    }
    task.name = newName;
    task.description = newDescription;
}

// function to delete a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log('Task not found.');
        return;
    }
    const deletedTask = tasks.splice(index, 1);
}
