# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Weather App
A simple and responsive frontend application built with React that fetches and displays weather data from the OpenWeatherMap API. The app allows users to search for a city's current weather and 5-day forecast, with a clean UI and a light/dark mode toggle for enhanced user experience.
Features

City Search: Search for weather data by entering a city name.
Current Weather: Displays the current temperature, weather description, and a weather icon for the selected city.
5-Day Forecast: Shows a 5-day weather forecast with daily temperatures and weather descriptions.
Responsive Design: Adapts to different screen sizes for a seamless experience on desktop and mobile.

Tech Stack

React: Frontend library for building reusable UI components.
JavaScript: Core programming language for logic and API integration.
CSS: Styling for a clean and responsive UI.
Fetch API: Used to make HTTP requests to the OpenWeatherMap API.

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14 or higher)
npm (comes with Node.js)
A free OpenWeatherMap API key

Installation
Follow these steps to set up and run the project locally:

Clone the Repository:
git clone https://github.com/Tirth-Patel-5/weather-app.git
cd weather-app


Install Dependencies:
npm install


Set Up the API Key:

Sign up at OpenWeatherMap to obtain a free API key.
Create a .env file in the root of the project.
Add your API key to the .env file:REACT_APP_API_KEY=your_api_key_here


The app will automatically use this key for API requests.


Run the Application:
npm start


The app will open in your default browser at http://localhost:3000.



Usage

Search for a City:

Enter a city name (e.g., "London") in the search bar and click the search button.
The app will display the current weather and 5-day forecast for the city.


View Weather Data:

The Current Weather section shows the temperature, weather description, and an icon.
The Forecast section displays a 5-day forecast with daily details.


Toggle Theme:

Click the theme toggle button to switch between light and dark modes.



Demo
A short video showcasing the app’s features and explaining the implementation approach is available here: Insert Demo Video Link.
Note: Please replace the placeholder above with the actual link to your demo video (e.g., Google Drive, YouTube, or Loom).
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the existing style and includes appropriate tests.
License
This project is licensed under the MIT License.
