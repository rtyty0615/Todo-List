import "./styles.css";
import * as Icons from './icon.js';

export function sidebar() {
    const main = document.querySelector("main");
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    const btnList = document.createElement("div");

    const inboxBtn = document.createElement("button");
    const inboxSvg = Icons.inboxIcon;
    const inboxIcon = Icons.getIconElement(inboxSvg, "inbox-icon");
    inboxBtn.appendChild(inboxIcon);
    const inboxText = document.createElement("div");
    inboxText.textContent = "Inbox";
    inboxBtn.appendChild(inboxText);
    btnList.appendChild(inboxBtn);

    const todayBtn = document.createElement("button");
    const todaySvg = Icons.todayIcon;
    const todayIcon = Icons.getIconElement(todaySvg, "today-icon");
    todayBtn.appendChild(todayIcon);
    const todayText = document.createElement("div");
    todayText.textContent = "Today";
    todayBtn.appendChild(todayText);
    btnList.appendChild(todayBtn);

    const weekBtn = document.createElement("button");
    const weekSvg = Icons.weekIcon;
    const weekIcon = Icons.getIconElement(weekSvg, "week-icon");
    weekBtn.appendChild(weekIcon);
    const weekText = document.createElement("div");
    weekText.textContent = "This week";
    weekBtn.appendChild(weekText);
    btnList.appendChild(weekBtn);
    sidebar.appendChild(btnList);

    const projectText = document.createElement("h2");
    projectText.textContent = "Project";
    sidebar.appendChild(projectText);

    const projectContainer = document.createElement("div");
    projectContainer.id = "project-container";
    sidebar.appendChild(projectContainer);

    const addProjectButton = document.createElement("div");
    addProjectButton.id = "add-project";
    sidebar.appendChild(addProjectButton);

    main.appendChild(sidebar);
}

export function addProjectButton() {
    const containerAdd = document.querySelector("#add-project");
    containerAdd.innerHTML = "";
    const addBtn = document.createElement("button");
    addBtn.id = "add-project-btn";
    const addSvg = Icons.addIcon;
    const addIcon = Icons.getIconElement(addSvg, "add-icon");
    addBtn.appendChild(addIcon);
    const addText = document.createElement("div");
    addText.textContent = "Add Project";
    addBtn.appendChild(addText);
    containerAdd.appendChild(addBtn);
}