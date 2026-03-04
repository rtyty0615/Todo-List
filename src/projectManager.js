const projectList = [];

export const projectManager = {
    getProjects: () => projectList,

    addProject: (newProject) => {
        // Check for duplicates
        const isDuplicate = projectList.includes(newProject);
        if (isDuplicate) {
            return false; // Tells the UI the addition failed
        }
        projectList.push(newProject);
        return true; // Tells the UI the addition succeeded
    }
};