# ⏱️ React Timer & Stopwatch

A clean and responsive **Timer & Stopwatch application** built with
**React.js**.\
This project demonstrates practical usage of React Hooks, React Router
DOM, browser LocalStorage, interval management, and reusable components.

------------------------------------------------------------------------

## 📌 Overview

**React Timer & Stopwatch** is a simple productivity utility that
provides two core features:

-   **Timer** -- Run a countdown timer with persistent timer state.
-   **Stopwatch** -- Track elapsed time with start, pause, reset, and
    lap functionality.

The application uses **React Router DOM** to navigate between pages
while maintaining a shared layout with a header and footer.

------------------------------------------------------------------------

## ✨ Features

### ⏳ Timer

-   Start and manage countdown time
-   Pause and resume timer
-   Reset timer
-   Persist timer-related data using LocalStorage
-   Handle interval cleanup correctly

### ⏱️ Stopwatch

-   Start stopwatch
-   Pause stopwatch
-   Reset stopwatch
-   Record lap times
-   Display recorded laps in a list
-   Maintain stopwatch state using React state and LocalStorage

### 🧭 Navigation

-   React Router DOM based navigation
-   Dedicated Timer and Stopwatch pages
-   Reusable Header and Footer
-   Shared application layout

### 🎨 UI

-   Responsive interface
-   Bootstrap-based styling
-   Simple and user-friendly navigation
-   Clean component structure

------------------------------------------------------------------------

## 🛠️ Tech Stack

  Technology          Purpose
  ------------------- -------------------------------
  React.js            Frontend library
  JavaScript (ES6+)   Application logic
  React Router DOM    Client-side routing
  Bootstrap           UI and responsive styling
  HTML5               Application structure
  CSS3                Custom styling
  LocalStorage        Browser-side data persistence
  Git & GitHub        Version control

------------------------------------------------------------------------

## 📂 Project Structure

``` text
react-timer-stopwatch/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   └── pages/
│   │       ├── StopTimeOut.jsx
│   │       └── StopWatch.jsx
│   │
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   │
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   │
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

------------------------------------------------------------------------

## 🧩 Component Structure

### `Header.jsx`

Contains the main navigation bar and provides links to the Timer and
Stopwatch pages.

### `Footer.jsx`

Contains the common footer section displayed across the application.

### `Layout.jsx`

Provides the shared application layout and keeps common UI elements such
as the Header and Footer consistent across pages.

### `StopTimeOut.jsx`

Responsible for the Timer page and its countdown-related functionality.

### `StopWatch.jsx`

Responsible for the Stopwatch page, including:

-   Start
-   Pause
-   Reset
-   Lap recording
-   Lap display

------------------------------------------------------------------------

## ⚛️ React Concepts Used

This project focuses on practical React concepts.

### `useState()`

Used to manage dynamic application data such as:

-   Timer values
-   Stopwatch values
-   Start/Pause status
-   Lap records
-   User interface state

### `useEffect()`

Used for side effects such as:

-   Creating intervals
-   Updating timer/stopwatch values
-   Cleaning up intervals
-   Synchronizing required data

### `setInterval()`

Used to update timer and stopwatch values at regular intervals.

### `clearInterval()`

Used to stop running intervals and prevent unnecessary background
execution.

### LocalStorage

Used to store relevant timer/stopwatch information in the browser so the
application can maintain required state across navigation or page
refreshes.

------------------------------------------------------------------------

## 🧭 Routing

The application uses **React Router DOM** for client-side navigation.

Example:

``` text
Application
│
├── Header
│   ├── Timer
│   └── Stop Watch
│
├── Main Content
│   ├── /timer
│   │   └── StopTimeOut.jsx
│   │
│   └── /stopwatch
│       └── StopWatch.jsx
│
└── Footer
```

> Route paths may differ depending on the current configuration in
> `App.js`.

------------------------------------------------------------------------

## 💾 Data Persistence

The project uses browser **LocalStorage** for persistence where
required.

This allows selected timer/stopwatch data to remain available even when:

-   Navigating between pages
-   Refreshing the browser
-   Temporarily leaving the active page

The application also removes or updates stored values when the related
functionality is reset or completed.

------------------------------------------------------------------------

## 🔄 Interval Management

Timer-based applications require proper interval handling.

The project uses React's `useEffect()` cleanup mechanism to prevent
multiple intervals from running simultaneously.

Conceptually:

``` javascript
useEffect(() => {
    const interval = setInterval(() => {
        // Update timer or stopwatch
    }, 1000);

    return () => clearInterval(interval);
}, []);
```

This cleanup is important when:

-   A component unmounts
-   Dependencies change
-   The timer/stopwatch needs to stop
-   The user navigates to another page

------------------------------------------------------------------------

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

-   **Node.js**
-   **npm**
-   **Git**

You can verify the installation with:

``` bash
node --version
npm --version
git --version
```

------------------------------------------------------------------------

## 📥 Installation

### 1. Clone the repository

``` bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project directory

``` bash
cd react-timer-stopwatch
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm start
```

The application will normally be available at:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

## 🏗️ Build for Production

Create an optimized production build using:

``` bash
npm run build
```

The generated production files will be available in the `build/`
directory.

------------------------------------------------------------------------

## 🧪 Run Tests

To run the project's test suite:

``` bash
npm test
```

------------------------------------------------------------------------

## 📱 Responsive Design

The application is designed to work across different screen sizes,
including:

-   💻 Desktop
-   💻 Laptop
-   📱 Mobile
-   📟 Tablet

Bootstrap and custom CSS are used to maintain a responsive layout.

------------------------------------------------------------------------

## 🎯 Project Goals

The main purpose of this project is to strengthen practical knowledge
of:

-   React component architecture
-   React Hooks
-   State management
-   Side effects
-   React Router DOM
-   Timer and stopwatch logic
-   `setInterval()` and `clearInterval()`
-   LocalStorage
-   Reusable components
-   Responsive UI development
-   Git and GitHub workflow

------------------------------------------------------------------------

## 🔮 Future Improvements

Possible future enhancements include:

-   ⏰ Custom timer input
-   🔔 Timer completion notification
-   🔊 Sound notification
-   🌙 Dark mode
-   🌓 Light/Dark theme switcher
-   📊 Stopwatch statistics
-   🗑️ Delete individual laps
-   📤 Export lap records
-   ⌨️ Keyboard shortcuts
-   🎨 More UI themes

------------------------------------------------------------------------

## 🤝 Contributing

Contributions are welcome.

To contribute:

1.  Fork the repository
2.  Create a new branch

``` bash
git checkout -b feature/new-feature
```

3.  Make your changes
4.  Commit your changes

``` bash
git add .
git commit -m "Add new feature"
```

5.  Push the branch

``` bash
git push origin feature/new-feature
```

6.  Open a Pull Request

------------------------------------------------------------------------

## 📄 License

This project is created for learning and development purposes.

------------------------------------------------------------------------

## 👨‍💻 Author

**Vishal Kumar**

Built with ❤️ using **React.js**.

------------------------------------------------------------------------

## ⭐ Support

If you found this project useful or interesting, consider giving the
repository a ⭐ on GitHub.
