# To Do App

A simple Todo App built with plain HTML, CSS, and JavaScript. It lets you add tasks, mark them as completed, delete them, and keeps a live count of total, completed, and pending tasks.

![HTML](https://img.shields.io/badge/HTML5-orange?logo=html5)
![CSS](https://img.shields.io/badge/CSS3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)

## Preview

A rounded card-style app showing task stats (Total, Completed, Pending) at the top, a list of tasks below, and a button to add new ones.

## Features

- Add new tasks using a prompt dialog
- Mark tasks as completed
- Delete any task, completed or pending
- Live tracking of Total, Completed, and Pending task counts
- Fully responsive design (mobile-friendly)

## Tech Stack

- **HTML5**
- **CSS3** (Flexbox, media queries)
- **JavaScript (Vanilla)**  DOM manipulation, event listeners

## Getting Started

### Prerequisites

You just need a web browser. No build tools or dependencies required.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Ayesha-zaheer-123/todo-app.git
   ```

2. Navigate to the project folder
   ```bash
   cd todo-app
   ```

3. Open `index.html` in your browser
   - Double-click the file, or
   - Use a tool like VS Code's Live Server extension

## Project Structure

```
todo-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

1. The app keeps track of `total`, `completed`, and `pending` task counts in variables.
2. Clicking **Add a new task** opens a prompt where you type your task text.
3. A new task element (with its own **Mark as Completed** and **delete task** buttons) is created using `document.createElement()` and added to the task list.
4. Clicking **Mark as Completed**:
   - Changes the button's color and text
   - Disables the button
   - Adds a strikethrough to the task text
   - Updates the completed/pending counters
5. Clicking **delete task**:
   - Removes the task from the list
   - Updates total/completed/pending counters depending on the task's state before deletion


## Author

**Ayesha Zaheer**
