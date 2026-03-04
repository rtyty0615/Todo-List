

const taskList = [];

export const taskManager = {
    getTasks: () => taskList,

    // Move the logic of adding/checking tasks here!
    addTask: (newTask) => {
        // Check for duplicates
        const isDuplicate = taskList.some(task =>
            task.name === newTask.name && task.id === newTask.id
        );

        if (isDuplicate) {
            return false; // Tells the UI the addition failed
        }

        taskList.push(newTask);
        return true; // Tells the UI the addition succeeded
    }
};