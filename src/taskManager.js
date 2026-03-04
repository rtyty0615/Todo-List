

const taskList = [];

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
    }
};