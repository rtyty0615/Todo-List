import { storage } from "./storage.js";

const projectList = storage.get("project");

export const projectManager = {
    getProjects: () => projectList,

    addProject: (newProject) => {
        const isDuplicate = projectList.includes(newProject);
        if (isDuplicate) {
            return false; 
        }
        projectList.push(newProject);
        return true; 
    },
    deleteProject: (deleteProject) => {
        const index = projectList.indexOf(deleteProject);
        if (index > -1) {
            projectList.splice(index, 1);
        }
    },

};