import "./styles.css";
import * as Icons from './icon.js';

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
            const buttonText = clickedPreviewBtn.querySelector("div");
            renderPreview(buttonText.textContent.trim());
            if (clickedPreviewBtn.classList.contains('project-item')){
                addTaskButton()
            }
        }

    })
}

function renderPreview(buttonText){
    const renderPreview = document.querySelector("#preview-title");
    renderPreview.innerHTML = "";
    const renderPreviewContent = document.querySelector("#preview-content");
    renderPreviewContent.innerHTML = "";
    const previewTitle = document.createElement("h2");
    previewTitle.textContent = buttonText;
    renderPreview.append(previewTitle);
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

