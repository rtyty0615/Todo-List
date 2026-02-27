import "./styles.css";
import { } from "./project.js";
import * as Icons from './icons.js';


function header(){
    const header = document.querySelector("header");
    const headerDiv = document.createElement("div");
    const bigIconSvg = Icons.bigIcon;
    const bigIcon = Icons.getIconElement(bigIconSvg, "big-icon");
    headerDiv.appendChild(bigIcon);
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "Todo List";
    headerDiv.appendChild(headerTitle);
    header.appendChild(headerDiv);
}
header()