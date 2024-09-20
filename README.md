
●	WeatherApp Case Study

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Project Skeleton ](#project-skeleton)
  - [Links](#links)
  - [Built with](#built-with)
  - [Installation](#Installation)  
  - [Author](#author)

## The challenge

Hello. I used NextJs, Tailwind CSS, Zustand, React Query, HeadlessUI, Toastify, axios technologies in the project.

The project consists of 2 pages. On the first page, we log in to the application with the API Key you can obtain from openweathermap.org.

After logging in successfully, we are greeted by a page consisting of 2 tabs. You can see current weather information by choosing from the cities in the dropdown in the first tab and by selecting from the opened map in the second tab.

Weather information includes current temperature, humidity, wind, lowest temperature and highest temperature information.

By using sessionStorage, a structure was built that does not require the API key again when the browser is closed or a new tab is opened, and when the page is refreshed, this is not required.

After the application was completed, it was deployed on Vercel.


## Project Skeleton

```
●	WeatherApp Case Study
|
|----readme.md       
SOLUTION
├── public
│    ├── marker-icon.png
│    ├── marker-shadow.png
│    ├── components
│    ├── images
│           ├── bgcloud.jpg
│           ├── cold.png
│           ├── hot.png
│           ├── humidity.png
│           ├── Orbina.png
│           ├── wind.png
├── app
│    ├── components
│    │       ├── CitySelector.js
│    │       ├── Loading.js
│    │       ├── LoginForm.js
│    │       ├── Map.js
│    │       ├── WeatherApp.js
│    │       ├── WeatherDisplay.js
│    │       ├── WeatherInfo.js
│    ├── data
│    │       ├── cities.json
│    ├── lib
│    │       ├── axios.js
│    ├── services
│    │       ├── weatherService.js
│    ├── store
│    │       ├── store.js
│    ├── utils
│    │       ├── api.js
│    │       ├── classNames.js
│    ├── .env.sample.local
│    ├── layout.js
│    ├── page.js
│    └── global.css
├── package.json
└── tailwind.config.js
```
## Screenshot
<p align="left">
<img src="3.gif" alt="screenshot" >
<img src="1.jpg.gif" alt="screenshot" >
<img src="2.jpg.gif" alt="screenshot" >
</p>

## Links
<hr>
<b>Check The Live Website ➡️</b> <a href="https://orbina-mstfrs-projects.vercel.app/"> Live Website </a> 
<hr>

### Built with

- `NextJs`
- `Zustand`
- `Axios`
- `React Query`
- `Toastify`
- `HeadlessUI`
- `Leaflet JS`



### Installation

1. Clone this project:

   ```bash
     Clone the project: https://github.com/mstfrs/orbina.git
   ```
2. Change .env.sample.local to .env.local

 
3. Install the necessary dependencies:

   ```bash
   npm install / yarn
   ```

## Usage

1. Start the application:

   ```bash
   npm run start / yarn start
   ```
2. Open your web browser and go to [http://localhost:3000/](http://localhost:3000)

## Author

- Author - Mustafa ÖRS

<center> &#8987; Happy Coding  &#9997; </center>