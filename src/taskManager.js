import { storage } from "./storage.js";

let taskList = storage.get("TodoListTask");
taskList ??= [];

export const taskManager = {
    getTasks: () => taskList,

    addTask: (newTask) => {
        const isDuplicate = taskList.some(task =>
            task.name === newTask.name && task.id === newTask.id
        );

        if (isDuplicate) {
            return false; 
        }

        taskList.push(newTask);
        storage.save("TodoListTask", taskList);
        return true;
    },
    deleteTask: (taskDeletedProjectTitle, taskDeletedTitle) => {
        taskList = taskList.filter(task =>
        task.name !== taskDeletedTitle || task.id !== taskDeletedProjectTitle
    );
        storage.save("TodoListTask", taskList);
    },
    deleteTaskByProject: (projectDeleted) => {
        taskList = taskList.filter(task =>
            task.id !== projectDeleted
        );
        storage.save("TodoListTask", taskList);
    },
    addDateToTask: (selectedDate, taskProjectTitle, taskTitle) => {
        for (const task of taskList) {
            if (task.name === taskTitle && task.id === taskProjectTitle) {
                task.date = selectedDate;
            }
        };
        storage.save("TodoListTask", taskList);
    },
};