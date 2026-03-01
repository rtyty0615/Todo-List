import * as Icons from './icon.js';
import { addTaskButton } from "./preview.js";

export default function setupTaskInteractions() {
    const previewContent = document.querySelector("#preview-container");
    const taskList = [];
    previewContent.addEventListener("click", (event) => {
        const clickedAddTaskBtn = event.target.closest("#add-task-btn");
        if (clickedAddTaskBtn) {
            renderTaskForm();
            return;
        }
        if (event.target.id === "cancel-btn-task") {
            addTaskButton(); 
            return;
        }
        if (event.target.id === "submit-btn-task") {
            const input = document.querySelector("#task-input");
            if (taskList.includes(input.value)) {
                alert("Please enter a different task name!");
            } else if (input.value.trim() !== "") {
                const taskName = input.value;
                taskList.push(input.value);
                console.log(taskList);
                renderInputTask(taskName);
                addTaskButton();
            } else {
                alert("Please enter a task name!");
            };
            return;
        }
    });
}


function renderTaskForm() {
    const taskAdd = document.querySelector("#preview-add");
    taskAdd.innerHTML = "";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "task-input";
    input.placeholder = "Type something...";

    const submitBtnDiv = document.createElement("div");
    submitBtnDiv.id = "submit-btn-container";

    const submitBtn = document.createElement("button");
    submitBtn.id = "submit-btn-task";
    submitBtn.textContent = "Add";

    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel-btn-task";
    cancelBtn.textContent = "Cancel";

    submitBtnDiv.append(submitBtn, cancelBtn);
    taskAdd.append(input, submitBtnDiv);
}

function renderInputTask(taskName) {
    const previewContent = document.querySelector("#preview-content");
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    const taskSvg = Icons.taskIcon;
    const taskIcon = Icons.getIconElement(taskSvg, "task-icon");
    taskDiv.appendChild(taskIcon);
    const taskTitle = document.createElement("div");
    taskTitle.textContent = taskName;
    taskDiv.appendChild(taskTitle);
    previewContent.appendChild(taskDiv);
}