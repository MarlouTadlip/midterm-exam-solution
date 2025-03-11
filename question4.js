// task array to store all tasks
let tasks = [];

//initial task id
let taskId = 1;

//model of tasks
class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

// function to create add a new task
const addTask = (name, description) => {
    const newTask = {
        id: taskId++,  
        name: name,
        description: description
    };
    tasks.push(newTask); 
    console.log('Task added')
}

// function to read view all tasks
const viewTasks = () => {
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
const updateTask = (id, newName, newDescription) => {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log('Task not found.');
        return;
    }
    task.name = newName;
    task.description = newDescription;
    console.log(`Task ID: ${task.id}, succesfully updated`)
}

// function to delete a task by ID
const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log('Task not found.');
        return;
    }
    tasks.splice(index, 1);
    console.log(`Task ID: ${id}, successfully deleted`)
}

//view tasks
console.log(viewTasks())

//add tasks
console.log(addTask('Task1','This is a task hehe'))
console.log(viewTasks())

//update tasks
console.log(updateTask(1,'Task2','This is an updated task hehe'))
console.log(viewTasks())

//delete tasks
console.log(deleteTask(1))
console.log(viewTasks())