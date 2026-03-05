import "./styles.css";
import * as Icons from './icon.js';
import {renderInputTask, } from "./task.js";
import { taskManager } from "./taskManager.js";
import { isToday, isThisWeek, parseISO } from 'date-fns';

export function preview() {
    const main = document.querySelector("main");
    const previewContainer = document.createElement("div");
    previewContainer.id = "preview-container";
    const previewTitle = document.createElement("div");
    previewTitle.id = "preview-title";
    const previewContent = document.createElement("div");
    previewContent.id = "preview-content";
    const previewAdd = document.createElement("div");
    previewAdd.id = "preview-add";
    previewContainer.append(previewTitle, previewContent, previewAdd);
    main.append(previewContainer);
}

export function previewInteraction() {
    
    const sidebarContainer = document.querySelector("#sidebar");
    sidebarContainer.addEventListener("click", (event) => {
        const clickedPreviewBtn = event.target.closest(".preview-btn");
        
        if (clickedPreviewBtn) {
            const buttonText = clickedPreviewBtn.querySelector("div").textContent.trim();
            renderPreviewTitle(buttonText);

            if (clickedPreviewBtn.classList.contains('project-item')){
                renderPreviewContent(buttonText);
                addTaskButton()
            };

            if (clickedPreviewBtn.id === "today") {
                renderPreviewToday();
                addTaskButton()
            };

        }

    })
}

function renderPreviewTitle(buttonText) {
    const renderPreviewTitle = document.querySelector("#preview-title");
    renderPreviewTitle.innerHTML = "";
    const renderPreviewContent = document.querySelector("#preview-content");
    renderPreviewContent.innerHTML = "";
    const previewTitle = document.createElement("h2");
    previewTitle.textContent = buttonText;
    renderPreviewTitle.append(previewTitle);
}

function renderPreviewContent(buttonText) {
    const currentTasks = taskManager.getTasks();
    currentTasks.forEach(task => {
        if (buttonText === task.id) {
            renderInputTask(task.name, task.date);
        }
    });
}

export function addTaskButton() {
    const addTask = document.querySelector("#preview-add");
    addTask.innerHTML = "";
    const addBtn = document.createElement("button");
    addBtn.id = "add-task-btn";
    const addSvg = Icons.addIcon;
    const addIcon = Icons.getIconElement(addSvg, "add-icon");
    addBtn.appendChild(addIcon);
    const addText = document.createElement("div");
    addText.textContent = "Add Task";
    addBtn.appendChild(addText);
    addTask.appendChild(addBtn);
}

function renderPreviewToday() {
    const taskList = taskManager.getTasks();
    const tasksToday = taskList.filter(task => isToday(parseISO(task.date)));
    console.log(tasksToday);
    tasksToday.forEach(task => {
            renderInputTask(`${task.name}(${task.id})`, task.date);
    });
}

