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
            <button >
                <i class="fa-solid fa-trash-can complete"></i>
            </button>
            <button>
                <i class="fa-regular fa-circle-check"></i>
            </button>

            </div>
        </li>
        `
    }
    document.querySelector('#todo').innerHTML = html;
}

