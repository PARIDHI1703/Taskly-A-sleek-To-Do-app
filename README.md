Taskly: A sleek To-Do app
Taskly is a clean, minimalist, and client-side to-do list application built with vanilla HTML, CSS, and JavaScript. It's designed to be an "external cortex"—a simple tool to offload your mental tasks, connect your thoughts to actions, and provide clarity on what needs to be done next.

📸 Screenshot
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5ad28cc8-8982-42fc-b75d-5b6e56cee7bc" />


✨ Features
Add New Tasks: Quickly add tasks to your list via an input field.

Mark as Complete: Simply click on a task to toggle its completion status.

Delete Tasks: Remove tasks you no longer need with a dedicated delete button.

Data Persistence: Your tasks are saved in the browser's localStorage, so your list will be waiting for you even after you close the tab or refresh the page.

💻 Tech Stack
HTML5: Provides the core structure and semantic markup for the application.

CSS3: Used for all styling, layout, and making the interface clean and user-friendly.

Vanilla JavaScript (ES6+): The "brain" of the application, handling all logic, user interaction, and data management without any external libraries or frameworks.

Browser Local Storage API: A web storage API used for persisting task data on the client-side.

🧠 Core Technical Concepts
This project demonstrates a solid understanding of fundamental front-end web development concepts.

DOM Manipulation

The task list is not hard-coded in the HTML. Instead, JavaScript dynamically creates, modifies, and deletes HTML elements (<li> and <button>) in response to user input. This is achieved using methods like document.createElement(), appendChild(), and removeChild().

Event Handling & Event Delegation

The application is fully interactive thanks to JavaScript event listeners (addEventListener).

For efficiency, Event Delegation is used to manage clicks on the task list. A single event listener is attached to the parent <ul> element instead of attaching a separate listener to every single task. When a click occurs, the event's target property is inspected to determine if a task item or a delete button was clicked, making the app more performant.

Data Persistence with localStorage

To save tasks, the application uses the browser's localStorage. Since localStorage can only store string key-value pairs, the application's task data (an array of JavaScript objects) is first serialized into a JSON string using JSON.stringify().

When the page loads, this JSON string is retrieved from localStorage and deserialized back into a usable JavaScript array with JSON.parse(), allowing the application to rebuild the user's task list.

🚀 How to Run Locally
This is a purely front-end project and requires no special build steps.

Clone the repository or download the files.

git clone <your-repo-url>


Navigate to the project directory.

cd <your-repo-folder>


Open the index.html file in your web browser.

You can do this by double-clicking the file or right-clicking and selecting "Open with..." your browser of choice.

📈 Future Improvements
Edit Tasks: Implement functionality to edit the text of an existing task.

Task Filtering: Add buttons to filter between "All," "Active," and "Completed" tasks.

Due Dates & Priorities: Allow users to add optional due dates or priority levels to tasks.

Improved Accessibility: Enhance the application with ARIA attributes for better screen reader support.

📜 License
This project is licensed under the MIT License. See the LICENSE.md file for details.
