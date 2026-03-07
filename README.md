# Todo-List

Vanilla JS Task Manager

A robust, modular To-Do List web application built with Vanilla JavaScript. This project allows users to create custom projects, add tasks with specific due dates, and organize their daily workflow. It utilizes Webpack for asset bundling and relies on local storage for data persistence.
Features

    Project Management: Create and delete custom projects to categorize your tasks.

    Task Tracking: Add and delete tasks within specific projects or the general inbox.

    Date Management: Assign due dates to tasks using a built-in date picker.

    Smart Filtering: Automatically filter tasks by "Today" and "This Week" (powered by date-fns).

    Data Persistence: Automatically saves all projects and tasks to the browser's localStorage so you never lose your data.

    Dynamic UI: Fully dynamic DOM rendering with event delegation for optimized performance.

Tech Stack

    Frontend: HTML5, CSS3, JavaScript (ES6 Modules)

    Bundler: Webpack

    Package Manager: npm

    Libraries: date-fns (for date parsing and filtering)

    Assets: Custom SVG icons

Project Structure

The application logic is broken down into highly cohesive ES6 modules within the src directory, which Webpack bundles into the dist directory:

    index.js: The entry point that initializes the UI and event listeners.

    projectManager.js & taskManager.js: Handle the state and logic for projects and tasks.

    project.js & task.js: Manage DOM creation, rendering, and specific interactions for their respective elements.

    preview.js: Controls the main display area, rendering the active project or filtered list (Today, This Week, Inbox).

    storage.js: A utility wrapper for interacting with the browser's LocalStorage API.

    icon.js: Manages SVG paths and icon generation.