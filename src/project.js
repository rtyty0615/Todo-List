import { addProjectButton } from "./sidebar.js";
import * as Icons from './icon.js';

export default function setupProjectInteractions() {
    const projectContainer = document.querySelector("#add-project");
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
            if (projectList.includes(input.value)) {
                alert("Please enter a different project name!");
            } else if (input.value.trim() !== "") {
                const projectName = input.value;
                projectList.push(input.value);
                renderInputProject(projectName);
                addProjectButton();
            } else {
                alert("Please enter a project name!");
            };
            return;
        }
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
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("preview-btn");
    const projectSvg = Icons.projectIcon;
    const projectIcon = Icons.getIconElement(projectSvg, "project-icon");
    projectBtn.appendChild(projectIcon);
    const projectTitle = document.createElement("div");
    projectTitle.textContent = projectName;
    projectBtn.appendChild(projectTitle);
    projectContainer.appendChild(projectBtn);
}