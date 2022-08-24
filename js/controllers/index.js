import { Task } from "../Models/task.js";
import { ToDoList } from "../Models/toDoList.js";
let toDoList = new ToDoList();

document.querySelector('#addItem').onclick = () => {
    let task = new Task();
    let input = document.querySelector('#newTask');
    let { id, value } = input;
    task[id] = value;
    console.log(task);
    toDoList.themTask(task);
    console.log(toDoList.arrTaskToDo);
    renderTask(toDoList.arrTaskToDo);

}

window.renderTask = (arrTaskToDo) => {
    let html = '';
    for (let task of arrTaskToDo) {
        html += `
        <li>
            ${task.newTask}
            <div class="buttons">
            <button onclick="xoaTaskToDo('${task.newTask}')">
                <i class="fa-solid fa-trash-can"></i>
            </button>
            <button onclick="endTask('${task.newTask}')">
                <i class="fa-regular fa-circle-check"></i>
            </button>

            </div>
        </li>
        `
    }
    document.querySelector('#todo').innerHTML = html;
}

window.renderTaskComplete = (arrTaskComplete) => {
    let html = '';
    for (let task of arrTaskComplete) {
        html += `
        <li>
            ${task.newTask}
            <div class="buttons">
            <button onclick="xoaTaskComplete('${task.newTask}')">
                <i class="fa-solid fa-trash-can"></i>
            </button>
            <button onclick="reTask('${task.newTask}')">
                <i class="fa-solid fa-circle-check"></i>
            </button>

            </div>
        </li>
        `
    }
    document.querySelector('#completed').innerHTML = html;
}

window.xoaTaskComplete = (taskClick) => {
    toDoList.xoaTaskComplete(taskClick);
    renderTaskComplete(toDoList.arrTaskComplete);

}

window.xoaTaskToDo = (taskClick) => {
    toDoList.xoaTaskToDo(taskClick);
    renderTask(toDoList.arrTaskToDo);

}

window.endTask = (taskClick) => {
    toDoList.endTask(taskClick);
    renderTask(toDoList.arrTaskToDo);
    renderTaskComplete(toDoList.arrTaskComplete);

}

window.reTask = (taskClick) => {
    toDoList.reTask(taskClick);
    renderTask(toDoList.arrTaskToDo);
    renderTaskComplete(toDoList.arrTaskComplete);

}

window.sortDown = () => {
    toDoList.sortDown();
    renderTask(toDoList.arrTaskToDo);
    renderTaskComplete(toDoList.arrTaskComplete);
}

window.sortUp = () => {
    toDoList.sortUp();
    renderTask(toDoList.arrTaskToDo);
    renderTaskComplete(toDoList.arrTaskComplete);
}

