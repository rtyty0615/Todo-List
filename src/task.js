import * as Icons from './icon.js';
import { addTaskButton } from "./preview.js";
import { taskManager } from "./taskManager.js";

export function setupTaskInteractions() {
    const previewContent = document.querySelector("#preview-container");
    
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
            if (!input) return;
            
            const taskName = input.value.trim();
            if (taskName === "") {
                alert("Please enter a task name!");
                return;
            }

            const previewProject = document.querySelector("#preview-title").textContent;
            const newTask = { name: taskName, id: previewProject };

            // Ask the manager to add the task. It returns true or false.
            const success = taskManager.addTask(newTask);

            if (success) {
                // It worked! Render it.
                console.log("Current List:", taskManager.getTasks());
                renderInputTask(newTask.name);
                addTaskButton();
            } else {
                // It failed (duplicate found)
                alert("Please enter a different task name!");
            }
            return;

        }
    });

    return {
        getTasks: () => taskList
    };
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

export function renderInputTask(taskName) {
    const previewContent = document.querySelector("#preview-content");
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    const taskSvg = Icons.taskIcon;
    const taskIcon = Icons.getIconElement(taskSvg, "task-icon");
    taskDiv.appendChild(taskIcon);
    const taskTitle = document.createElement("div");
    taskTitle.textContent = taskName;

    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.classList.add("task-d-btn");
    const taskDeleteSvg = Icons.deleteIcon;
    const taskDeleteIcon = Icons.getIconElement(taskDeleteSvg, "task-d-icon");
    taskDeleteBtn.append(taskDeleteIcon);

    taskDiv.append(taskTitle, taskDeleteBtn);
    previewContent.appendChild(taskDiv);
}