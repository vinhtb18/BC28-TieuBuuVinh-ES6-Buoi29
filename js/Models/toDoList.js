export class ToDoList {
    arrTaskToDo = [];
    arrTaskComplete = [];

    themTask = function (taskMoi) {
        this.arrTaskToDo.push(taskMoi);
    }

    xoaTaskToDo = function (taskClick) {
        let index = this.arrTaskToDo.findIndex((taskToDo) => taskToDo.newTask === taskClick);
        this.arrTaskToDo.splice(index, 1);
    }

    endTask = function (taskClick) {
        let index = this.arrTaskToDo.findIndex((taskToDo) => taskToDo.newTask === taskClick);
        let task = this.arrTaskToDo.find((task) => task.newTask === taskClick);
        this.arrTaskComplete.push(task);
        this.arrTaskToDo.splice(index, 1);
    }

    xoaTaskComplete = function (taskClick) {
        let index = this.arrTaskComplete.findIndex((taskToDo) => taskToDo.newTask === taskClick);
        this.arrTaskComplete.splice(index, 1);
    }

    reTask = function (taskClick) {
        let index = this.arrTaskComplete.findIndex((taskToDo) => taskToDo.newTask === taskClick);
        let task = this.arrTaskComplete.find((task) => task.newTask === taskClick);
        this.arrTaskToDo.push(task);
        this.arrTaskComplete.splice(index, 1);
    }

    sortDown = function () {
        this.arrTaskToDo.sort(function (a, b) {
            if (a.newTask.toLowerCase() < b.newTask.toLowerCase()) { return -1; }
            if (a.newTask.toLowerCase() > b.newTask.toLowerCase()) { return 1; }
            return 0;
        });
        this.arrTaskComplete.sort(function (a, b) {
            if (a.newTask.toLowerCase() < b.newTask.toLowerCase()) { return -1; }
            if (a.newTask.toLowerCase() > b.newTask.toLowerCase()) { return 1; }
            return 0;
        });

    }
    sortUp = function () {
        this.arrTaskToDo.sort(function (a, b) {
            if (a.newTask.toLowerCase() < b.newTask.toLowerCase()) { return 1; }
            if (a.newTask.toLowerCase() > b.newTask.toLowerCase()) { return -1; }
            return 0;
        });
        this.arrTaskComplete.sort(function (a, b) {
            if (a.newTask.toLowerCase() < b.newTask.toLowerCase()) { return 1; }
            if (a.newTask.toLowerCase() > b.newTask.toLowerCase()) { return -1; }
            return 0;
        });

    }

}