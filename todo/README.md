# Project & Task Management App

A simple and practical **Project & Task Management Application** built
with **React.js**.\
This project was created to practice React Hooks, Context API, state
management, and Local Storage.

## Features

-   Create new projects
-   Delete projects
-   Create and manage tasks
-   Task status management:
    -   Assigned
    -   Working
    -   Completed
-   Dynamic task dates
-   Data persistence using Local Storage
-   Project-wise task management
-   Centralized state management using Context API

## Technologies Used

-   React.js
-   JavaScript (ES6+)
-   Context API
-   React Hooks
    -   `useState`
    -   `useEffect`
    -   `useMemo`
    -   `useCallback`
-   Local Storage
-   Bootstrap / CSS

## Project Structure

``` text
src/
├── components/
│   └── pages/
│       └── Home/
│           ├── SidebarProject.jsx
│           ├── ToDoCard.jsx
│           ├── TodoSubCard.jsx
│           └── Home.jsx
│
├── context/
│   └── project/
│       ├── ProjectToDoContext.js
│       └── ProjectToDoContextProvider.jsx
│
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
```

## Context API

The project uses **Context API** to manage project and task data across
components.

`ProjectToDoContextProvider.jsx` handles:

-   Project data
-   Current selected project
-   Creating projects
-   Deleting projects
-   Creating tasks
-   Updating task status
-   Persisting data in Local Storage

## Task Management

Each task contains information such as:

``` js
{
    id: 1,
    title: "Create Login Page",
    desc: "Create a responsive login page",
    status: "assigned",
    assignedDate: "2026-08-03",
    lastUpdate: "2026-08-03"
}
```

Task status can be updated as the work progresses:

``` text
Assigned → Working → Completed
```

## Local Storage

Project and task data are stored in the browser's Local Storage so that
the data remains available after refreshing the page.

## Installation

Clone the repository and install dependencies:

``` bash
npm install
```

## Run the Project

Start the development server:

``` bash
npm start
```

The application will run on the local development server.

## Learning Outcomes

Through this project, I practiced:

-   React component-based development
-   Context API
-   State management
-   React Hooks
-   Immutable state updates
-   Dynamic data handling
-   Local Storage
-   Creating reusable components

## Future Improvements

Some possible improvements:

-   Edit project and task details
-   Search and filter tasks
-   Task priority
-   Due dates
-   User authentication
-   Backend/API integration
-   Responsive UI improvements

## Author

**Vishal Kumar**

Built with React.js while learning and improving frontend development
skills.
