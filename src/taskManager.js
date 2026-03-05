

let taskList = [];

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
        return true;
    },
    deleteTask: (taskDeletedProjectTitle, taskDeletedTitle) => {
        taskList = taskList.filter(task =>
        task.name !== taskDeletedTitle || task.id !== taskDeletedProjectTitle
    );
    },
    deleteTaskByProject: (projectDeleted) => {
        taskList = taskList.filter(task =>
            task.id !== projectDeleted
        );
    },
    addDateToTask: (selectedDate, taskProjectTitle, taskTitle) => {
        for (const task of taskList) {
            if (task.name === taskTitle && task.id === taskProjectTitle) {
                task.date = selectedDate;
            }
        }
    },
};