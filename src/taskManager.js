

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
    deleteTasks: (taskDeletedProjectTitle, taskDeletedTitle) => {
        taskList = taskList.filter(task =>
        task.name !== taskDeletedTitle || task.id !== taskDeletedProjectTitle
    );
    },


    

};