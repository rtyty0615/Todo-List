import { storage } from "./storage.js";

let projectList = storage.get("TodoListProject");
projectList ??= [];

export const projectManager = {
    getProjects: () => projectList,

    addProject: (newProject) => {
        const isDuplicate = projectList.includes(newProject);
        if (isDuplicate) {
            return false; 
        }
        projectList.push(newProject);
        storage.save("TodoListProject", projectList);
        return true; 
    },
    deleteProject: (deleteProject) => {
        const index = projectList.indexOf(deleteProject);
        if (index > -1) {
            projectList.splice(index, 1);
        }
        storage.save("TodoListProject", projectList);
    },

};