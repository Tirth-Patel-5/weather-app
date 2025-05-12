Weather App
A simple and responsive frontend application built with React that fetches and displays weather data from the OpenWeatherMap API. The app allows users to search for a city's current weather and 5-day forecast, with a clean UI for enhanced user experience.
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
 npm run dev


The app will open in your default browser at http://localhost:5173.



Usage

Search for a City:

Enter a city name (e.g., "London") in the search bar and click the search button.
The app will display the current weather and 5-day forecast for the city.


View Weather Data:

The Current Weather section shows the temperature, weather description, and an icon.
The Forecast section displays a 5-day forecast with daily details.



Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the existing style and includes appropriate tests.
License
This project is licensed under the MIT License.
