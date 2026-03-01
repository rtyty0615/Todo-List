import "./styles.css";
// import * as Icons from './icon.js';

export function preview() {
    const main = document.querySelector("main");
    const preview = document.createElement("div");
    preview.textContent = "Hello";
    preview.id = "preview";
    main.append(preview);
}

export function previewInteraction() {
    const sidebarContainer = document.querySelector("#sidebar");
    sidebarContainer.addEventListener("click", (event) => {
        const clickedPreviewBtn = event.target.closest(".preview-btn");
        
        if (clickedPreviewBtn) {
            const buttonText = clickedPreviewBtn.querySelector("div");
            renderPreview(buttonText.textContent.trim());
            return;
        }
    })
}

function renderPreview(buttonText){
    const renderPreview = document.querySelector("#preview");
    renderPreview.innerHTML = "";
    const previewTitle = document.createElement("h2");
    previewTitle.textContent = buttonText;
    renderPreview.append(previewTitle);
}
