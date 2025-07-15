# NASA APOD Web Application

This is a dynamic web application built with React, Vite, and JavaScript, designed to fetch and display the daily NASA Astronomy Picture of the Day (APOD) images using the NASA API. This project focuses on mastering React fundamentals, including API fetching, state management, component design, and data caching.

## Features

* **Daily APOD Display:** Fetches and displays the Astronomy Picture of the Day from NASA's API.

* **Responsive UI:** Designed and styled to provide a visually cohesive user interface across various screen sizes.

* **API Integration:** Utilizes the `useEffect` hook to reliably fetch daily image data.

* **Data Caching:** Implements `localStorage` with `useEffect` to cache API responses, reducing redundant API calls for returning users.

* **Interactive Sidebar:** A toggleable sidebar displays detailed information about the APOD.

* **Loading Indicator:** Shows a loading icon while fetching data from the API.

---

## Technologies Used

* **React:** A JavaScript library for building user interfaces.

* **Vite:** A fast build tool for modern web projects.

* **JavaScript:** The core programming language.

* **HTML:** For structuring the web content.

* **CSS:** For styling the application, ensuring a responsive design.

* **Font Awesome:** Used for various icons (e.g., info button, sidebar toggle).

* **NASA API:** For fetching Astronomy Picture of the Day data.

---

## Project Structure

The project follows a component-based architecture:

* `App.jsx`: The main root component that integrates `Main`, `SideBar`, and `Footer` components. It manages the application's global state, including API data, loading status, and sidebar visibility.

* `main.jsx`: The entry point of the application, responsible for rendering the `App` component into the `index.html`.

* `index.html`: The main HTML file where the React application is mounted. It includes links for Google Fonts and Font Awesome.

* `src/components/`: Contains reusable functional components:

    * `Main.jsx`: Displays the main APOD image.

    * `SideBar.jsx`: Presents the title, description, and other details of the APOD. It can be toggled open/closed.

    * `Footer.jsx`: Contains the APOD title, project name, and an info button to toggle the sidebar.

* `public/` and `assets/`: Folders for static assets (though images are primarily fetched from API).

* `package.json`: Manages project dependencies and scripts.

---

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* **Node.js:** Ensure Node.js is installed. You can check your version by running `node -v` in your terminal. If it's not installed, download it from [nodejs.org](https://nodejs.org/).

* **npm:** Node Package Manager (npm) is usually installed with Node.js.

### Steps

1.  **Create the Project:**
    Open your terminal or command prompt and run the following command to create a new Vite React project:

    ```bash
    npm create vite@latest nasa-react-app

    ```

    Navigate into your newly created project directory:

    ```bash
    cd nasa-react-app

    ```

2.  **Install Dependencies:**
    Install all necessary npm packages:

    ```bash
    npm install

    ```

3.  **Prepare `App.jsx`:**

    * Open `src/App.jsx`.

    * Remove any default imports (e.g., `import './App.css'`).

    * Delete the `App.css` file.

    * Clear everything inside the `return` statement of the `App` function, leaving an empty JSX fragment `<></>`.

    ```javascript
    function App() {
      return (
        <>
        </>
      )
    }
    export default App

    ```

4.  **Create Components Folder and Files:**
    Inside the `src` folder, create a new folder named `components`.
    Inside `src/components`, create the following files:

    * `Main.jsx`

    * `SideBar.jsx`

    * `Footer.jsx`

    *Tip: If you have the ES7 React extension in VS Code, type `rfc` in each new `.jsx` file and press Tab to generate the functional component skeleton.*

5.  **Add Font Awesome Icons:**

    * Go to [Font Awesome CDN](https://cdnjs.com/libraries/font-awesome).

    * Copy the `<link>` tag for Font Awesome (e.g., `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.x.x/css/all.min.css`).

    * Paste this `<link>` tag into your `index.html`'s `<head>` section, preferably below the `<title>` tag.

6.  **Import Components into `App.jsx`:**
    In `src/App.jsx`, import the newly created components:

    ```javascript
    import Footer from "./components/Footer"
    import Main from "./components/Main"
    import SideBar from "./components/SideBar"

    ```

    Then, integrate them into the `App` component's return statement:

    ```javascript
    function App() {
      return (
        <>
          <Main />
          <SideBar />
          <Footer />
        </>
      )
    }
    export default App

    ```

7.  **Initial Component Content:**

    * **`Main.jsx`:** Add an `img` tag with a placeholder `src` and `alt` attribute, and relevant class names for styling.

        ```javascript
        export default function Main() {
          return (
            <div className="imgContainer">
              <img src="placeholder.png" alt="APOD Image" className="bgImage" />
            </div>
          )
        }

        ```

    * **`SideBar.jsx`:** Include an `h2` for the title and a `p` tag for the description, along with class names.

        ```javascript
        export default function SideBar() {
          return (
            <div className="sidebarContents">
              <h2>Martian Landscape</h2>
              <p>Description</p>
              <div>
                {/* Description content goes here */}
              </div>
            </div>
          )
        }

        ```

    * **`Footer.jsx`:** Use a `footer` tag, include `h1` and `h2` for titles, and a `button` with a Font Awesome info icon.

        ```javascript
        export default function Footer() {
          return (
            <footer>
              <div>
                <h2>Martian Landscape</h2>
                <h1>APOD PROJECT</h1>
              </div>
              <button>
                <i class="fa-solid fa-circle-info"></i>
              </button>
            </footer>
          )
        }

        ```

8.  **Styling (`index.css`):**

    * Empty the contents of `src/index.css`.

    * Add global styles to the `:root` pseudo-class.

    * Apply styles to `#root` to control the main layout (e.g., `display: flex;`).

    * Style `.bgImage`, `.imgContainer` for the main image.

    * Style `footer` for fixed positioning, width, and flex properties to arrange its content.

    * Style `sidebar`, `.sidebarContents`, and their child elements for positioning, background, and text formatting.

    * Implement responsive styles using media queries for larger screens.

    * Add specific styles for buttons and icons to ensure proper appearance and interactivity.

    * **Important Fix for Long Strings:** For description paragraphs, add `overflow-wrap: break-word;` to prevent horizontal scrolling with unbroken strings.

9.  **API Fetching with `useEffect`:**

    * Obtain a NASA API key from [api.nasa.gov](https://api.nasa.gov/).

    * Store your API key in a `.env` file (e.g., `VITE_NASA_API_KEY=YOUR_API_KEY`).

    * In `App.jsx`, use the `useEffect` hook to fetch data from the NASA APOD API. Implement `useState` for `data` and `loading` states.

    ```javascript
    import React, { useState, useEffect } from 'react';
    // ... other imports

    function App() {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [showModal, setShowModal] = useState(false); // For sidebar visibility

      useEffect(() => {
        async function fetchAPIData() {
          setLoading(true);
          try {
            // Use import.meta.env.VITE_NASA_API_KEY for Vite
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
            const today = (new Date()).toDateString();
            const localKey = `apod-${today}`; // Unique key for today's data

            // Check local storage first
            if (localStorage.getItem(localKey)) {
              const apiData = JSON.parse(localStorage.getItem(localKey));
              setData(apiData);
              console.log('Fetched from cache today');
              setLoading(false);
              return;
            }

            // If not in local storage, fetch from API
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`);
            const apiData = await res.json();
            localStorage.setItem(localKey, JSON.stringify(apiData)); // Cache data
            setData(apiData);
            console.log('Fetched from API');

          } catch (err) {
            console.log(err.message);
          } finally {
            setLoading(false);
          }
        }
        fetchAPIData();
      }, []); // Empty dependency array means this runs once on component mount

      // Toggle sidebar modal
      function handleToggleModal() {
        setShowModal(!showModal);
      }

      return (
        <>
          {loading ? (
            // Display loading indicator
            <div className="loading">
              <i className="fa-solid fa-gear fa-spin"></i> {/* Example loading icon */}
            </div>
          ) : (
            <main>
              <Main data={data} />
              {showModal && <SideBar data={data} handleToggleModal={handleToggleModal} />}
              <Footer data={data} handleToggleModal={handleToggleModal} />
            </main>
          )}
        </>
      );
    }
    export default App;

    ```

10. **Update Components with Props:**

    * Pass the `data` and `handleToggleModal` (for sidebar) as props from `App.jsx` to `Main.jsx`, `SideBar.jsx`, and `Footer.jsx`.

    * Update `Main.jsx` to use `data.url` for the image source and `data.title` for alt text.

    * Update `SideBar.jsx` to display `data.title`, `data.date`, and `data.explanation`. Add a button with an arrow icon to close the sidebar using `handleToggleModal`.

    * Update `Footer.jsx` to display `data.title` and `data.date` (or `APOD PROJECT`) and attach `handleToggleModal` to the info button.

11. **Caching with `localStorage`:**

    * As shown in the `useEffect` example above, implement logic to:

        * Check `localStorage` for cached data for the current date.

        * If data exists, retrieve it from `localStorage`.

        * If not, fetch from the NASA API and then store the response in `localStorage` using `JSON.stringify()`.

        * When retrieving, parse the stored string using `JSON.parse()`.

---

## Running the Application

To start the development server and view your application:

```bash
npm run dev
