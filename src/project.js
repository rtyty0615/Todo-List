import { addProjectButton } from "./sidebar.js";
export default function addProject(){
    const addProjectBtn = document.querySelector("#add-project-btn");
    addProjectBtn.addEventListener("click", () => {
        const addProjectDiv = document.querySelector("#add-project");
        addProjectDiv.innerHTML = "";
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
        cancelBtn.addEventListener("click", () => {
            addProjectButton();
            addProject();
        })
        submitBtnDiv.append(submitBtn, cancelBtn);

        addProjectDiv.append(input, submitBtnDiv);
    })   
}

