import "./styles.css";
// import * as Icons from './icon.js';

export default function preview() {
    const main = document.querySelector("main");
    const preview = document.createElement("div");
    preview.textContent = "Hello";
    preview.id = "preview";
    main.append(preview);
}