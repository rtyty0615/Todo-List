import "./styles.css";
import header from "./header.js";
import { sidebar, addProjectButton } from "./sidebar.js";
import { setupProjectInteractions, renderInputProject } from "./project.js";
import { preview, previewInteraction } from "./preview.js";
import { setupTaskInteractions } from "./task.js";
import { projectManager } from "./projectManager.js";

header()

sidebar()

const projectList = projectManager.getProjects();
projectList?.forEach(project => renderInputProject(project));

addProjectButton()

preview()

setupProjectInteractions()

previewInteraction()

setupTaskInteractions()



