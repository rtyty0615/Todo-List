import { addProjectButton } from "./sidebar.js";
import * as Icons from './icon.js';

export default function setupProjectInteractions() {
    const projectContainer = document.querySelector("#project");
    const projectList = [];
    projectContainer.addEventListener("click", (event) => {
        const clickedAddProjectBtn = event.target.closest("#add-project-btn");
        if (clickedAddProjectBtn) {
            renderInputForm();
            return;
        }
        if (event.target.id === "cancel-btn") {
            addProjectButton(); 
            return;
        }
        if (event.target.id === "submit-btn") {
            const input = document.querySelector("#user-input");
            const projectName = input.value.trim();
            if (projectList.includes(projectName)) {
                alert("Please enter a different project name!");
            } else if (projectName !== "") {
                projectList.push(projectName);
                console.log(projectList);
                renderInputProject(projectName);
                addProjectButton();
            } else {
                alert("Please enter a project name!");
            };
            return;
        }
        const clickedDeleteProjectBtn = event.target.closest(".project-d-btn");
        if (clickedDeleteProjectBtn) {
            const projectDeleted = clickedDeleteProjectBtn.closest('.project-div');
            const projectDeletedTitle = projectDeleted.querySelector('div').textContent;
            const index = projectList.indexOf(projectDeletedTitle);
            if (index > -1) {
                projectList.splice(index, 1);
            }
            projectDeleted.remove();
            console.log(projectList);
            return;
        };
    });
}

function renderInputForm() {
    const projectAdd = document.querySelector("#add-project");
    projectAdd.innerHTML = "";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "user-input";
    input.placeholder = "Type something...";

    const submitBtnDiv = document.createElement("div");
    submitBtnDiv.id = "submit-btn-div";

    const submitBtn = document.createElement("button");
    submitBtn.id = "submit-btn";
    submitBtn.textContent = "Add";

    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel-btn";
    cancelBtn.textContent = "Cancel";

    submitBtnDiv.append(submitBtn, cancelBtn);
    projectAdd.append(input, submitBtnDiv);
}

function renderInputProject(projectName) {
    const projectContainer = document.querySelector("#project-container");
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("preview-btn","project-item");
    const projectSvg = Icons.projectIcon;
    const projectIcon = Icons.getIconElement(projectSvg, "project-icon");
    projectBtn.appendChild(projectIcon);
    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = projectName;
    projectBtn.appendChild(projectTitle);

    const projectDeleteBtn = document.createElement("button");
    projectDeleteBtn.classList.add("project-d-btn");
    const projectDeleteSvg = Icons.deleteIcon;
    const projectDeleteIcon = Icons.getIconElement(projectDeleteSvg, "project-d-icon");
    projectDeleteBtn.append(projectDeleteIcon);
    projectDiv.append(projectBtn, projectDeleteBtn);
    projectContainer.appendChild(projectDiv);
}