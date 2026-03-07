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
            const newTask = { name: taskName, id: previewProject, date: "No date" };

            const success = taskManager.addTask(newTask);

            if (success) {
                console.log("Current List:", taskManager.getTasks());
                renderInputTask(newTask.name, newTask.date);
                addTaskButton();
            } else {
                alert("Please enter a different task name!");
            }
            return;

        }

        const clickedDeleteTaskBtn = event.target.closest(".task-d-btn");
        if (clickedDeleteTaskBtn) {
            const taskDeleted = clickedDeleteTaskBtn.closest('.task');
            let taskDeletedTitle = taskDeleted.querySelector('div').textContent;
            let taskDeletedProjectTitle = document.querySelector("#preview-title").textContent;
            const btnList = ["Today", "Inbox", "This Week"];
            
            if ( btnList.includes(taskDeletedProjectTitle) ) {
                [taskDeletedTitle, taskDeletedProjectTitle] = taskDeletedTitle.split(/[()]/);
            } 
            taskManager.deleteTask(taskDeletedProjectTitle, taskDeletedTitle);
            taskDeleted.remove();
            console.log(taskManager.getTasks());
            return;
        };

        const dateBtn = event.target.closest(".task-date-btn");
        if (dateBtn) {
            const taskItem = dateBtn.closest(".task");
            const dateDiv = taskItem.querySelector('.task-date');
            renderDateForm(dateDiv);
            return;
        };
    });

    previewContent.addEventListener("change", (event) => {
        const clickedDateBtn = event.target.closest(".task-date-input");
        if (clickedDateBtn) {
            const selectedDate = event.target.value;
            console.log("Date saved automatically:", selectedDate);

            const taskItem = clickedDateBtn.closest(".task");
            const dateDiv = taskItem.querySelector('.task-date');
            dateDiv.innerHTML = "";
            const taskDate = renderInputDate(selectedDate);
            dateDiv.append(taskDate);

            const taskTitle = taskItem.querySelector('div').textContent;
            const taskProjectTitle = document.querySelector("#preview-title").textContent;
            taskManager.addDateToTask(selectedDate, taskProjectTitle, taskTitle);

            return;
        };
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

export function renderInputTask(taskName, taskDate) {
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

    if (taskDate === "No date" ) {
        const noDate = renderInputDate("No date");
        taskDiv.append(taskTitle, noDate, taskDeleteBtn);
    } else {
        const date = renderInputDate(taskDate);
        taskDiv.append(taskTitle, date, taskDeleteBtn);
    }
    previewContent.appendChild(taskDiv);
}

function renderDateForm(dateInput){
    dateInput.innerHTML = "";
    const input = document.createElement("input");
    input.type = "date";
    input.classList.add("task-date-input");
    input.name = "task-date";
    dateInput.append(input);
    input.focus();
}

function renderInputDate(date){
    const taskDate = document.createElement("div");
    const taskDateBtn = document.createElement("button");
    taskDateBtn.classList.add("task-date-btn");
    taskDate.classList.add("task-date");
    taskDateBtn.textContent = date;
    taskDate.append(taskDateBtn);
    return taskDate;
}