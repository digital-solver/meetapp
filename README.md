# Meetapp

Meetapp is a cross-platform React PWA that helps users to find and connect with likeminded people in their city by discovering events that they are interested in that are happening in their city. By using the Google Calendar API, Meetapp is able to fetch event data and display it to the user in a user-friendly interface.

To complete this project, I implemented serverless technologies, a BDD & TDD methodology, Google Calendar API, search functionality, toggleable event details, and the ability to change the number of events displayed. I am particularly happy with the offline functionality that allows users to access cached data when they don't have an internet connection.

Working on Meetapp was a fun experience while also improving my skills in frontend development, serverless, and API integration.

# Table of Contents

* [Features](#features)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Configuration](#configuration)
* [Materials](#materials)
* [Contribution Guideilnes](#contribution)
* [License](#license)
* [Contact](#contact)
* [Resources](#resources)
* [Appendix](#appendix)

## Features

### 1. Search events by city:
- When user hasn’t searched for a city, show upcoming events from all cities.
- User should see a list of suggestions when they search for a city.
- User can select a city from the suggested list.

### 2. Toggle info visibility:
- An event element is collapsed by default.
- User can expand an event to see its details.
- User can collapse an event to hide its details.

### 3. Select number of events to show:
- When user hasn’t specified a number, 32 is the default number.
- User can change the number of events they want to see.

### 4. Available offline:
- Show cached data when there’s no internet connection.
- Show error when user tries to access the app in offline mode and there is no cache available.

## Technologies

The following technologies were used in the development of this project:

* Frontend:
    * React
    * PWA (& Service Workers)
    * Data visualization (recharts)
* Backend:
    * Google Calendar Meetup API
    * OAuth2 authentication
    * Serverless functions (AWS Lambda)
* Testing:
    * Jest for TDD (Unit & Integration)
    * Jest-Cucumber for BDD
    * Puppeteer for E2E
    * Tests with coverage rate >= 90%
* Deployment:
    * GitHub Pages
* Miscellaneous:
    * Version control with Git
    * Online monitoring tool

## Installation

1. First, make sure that you have Node.js and npm installed on your local machine. These are required to run the project.
2. Next, clone the repository to your local machine using the following command: `git clone https://github.com/digital-solver/meetapp.git`
3. Navigate to the project directory by running: `cd meetapp`
4. Install the necessary dependencies by running: `npm install`
5. Build the project by running: `npm run build`
6. Start the development server by running: `npm start`
7. The app should now be running and available at http://localhost:3000/. You can access it by opening a web browser and navigating to that address.
8. If you encounter any errors or issues during the installation process, you can get in touch with me (see contact section).

## Usage

To start using Meetapp, follow these steps:

1. Open the app in your web browser by navigating to the URL where it is hosted.
2. Authenticate and log in with Google OAuth
3. After logging in, by default, the app will show a list of upcoming events from all cities. To filter the events by city, type the name of the city you are interested in into the textbox at the top of the page and select a city from the list of suggestions. The list of events will update to show only those that take place in the selected city.
4. To see more details about an event, click on the event in the list. This will expand the event to show additional information such as the event's description and location. To hide the details again, click the event again.
5. You can adjust the number of events shown in the list by specifying a number in the "Number of events to show" textbox.
6. If the app is used offline or in slow network conditions, a cached version of the event data will be shown. An error message will be displayed if the app is unable to retrieve fresh data from the server.
7. To install the app as a PWA on your desktop or add it to your mobile home screen, follow the prompts that appear when you visit the app in your web browser. This will allow you to access the app more quickly and easily in the future.

## Materials

- Google Calendar API documentation
- User Stories, BDD Scenarios, and Gherkin syntax (see appendix)

## Contribution

1. Follow the BDD & TDD methodology.
2. Create a new branch for every new feature or bug fix.
3. Write clear and concise commit messages.
4. Use Pull Requests to merge changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Feel free to contact me at kerr(dot)digitalsolver@gmail.com if you have any questions or suggestions.

## Resources

[PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) | 
[React](https://reactjs.org/)

## Appendix - User Stories, BDD Scenarios, and Gherkin syntax

### **1. Search events by city**
***Scenario 1:*** When user hasn’t searched for a city, show upcoming events from all cities.

>*User Story*:  As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.

*Given* user hasn't serached for any city,

*When* the user opens the app,

*Then* the user should see a list of all upcoming events.
<br><br>

**Scenario 2:** User should see a list of suggestions when they search for a city.

>*User Story*:  As a user, I should be able to see a list of suggestsions when I start typing, so that events that I am show are near my location.

*Given* the main page is open,

*When* the user starts typing in the city textbox,

*Then* the user should see a list of cities (suggestions) that match what they've typed.
<br><br>

**Scenario 3:** User can select a city from the suggested list.

>*User Story*:  As a user, I should be able to select a city from the sugessted list, so that I can see events relevant to my location.

*Given* city suggestsions are visible after a user typed something in the city textbox,

*When* the user selects a city from the list,

*Then*  user's city should be changed to their selection, and be shown that city's list of events
<br><br>

### **2. Toggle info visibility**
**Scenario 1:** An event element is collapsed by default

>*User Story*:  As a user, I should see a list of events without details, so that I can quickly get an overview of what is available.

*Given* a user has searched for a city,

*When* the list of events is shown,

*Then* all events details should be hidden.
<br><br>

**Scenario 2:** User can expand an event to see its details

>*User Story*:  As a user, I should be able to reveal event details, so that I can get a more in-depth idea of what the event is about.

*Given* a list of unexpanded events are shown,

*When* a user clicks on an event,

*Then* event details should be revealed.
<br><br>

**Scenario 3:** User can collapse an event to hide its details

>*User Story*:  As a user, I should be able to hide event details, so that I can go back to seeing the main overview of available events.

*Given* an event has had its details expanded,

*When* a user hides details,

*Then* the event's details should collapse.
<br><br>

### **3. Select number of events to show**
**Scenario 1:** When user hasn’t specified a number, 32 is the default number

>*User Story*:  As a user, I should be able to see a list of events by default, so that I can get started searching immediately.

*Given* a number of events to be shown has not been specified,

*When* a user searches for events in a city,

*Then* a list of 32 events should be shown.
<br><br>

**Scenario 2:** User can change the number of events they want to see

>*User Story*:  As a user, I should be able to change the number of events shown, so that I can choose whether many or few are shown.

*Given* a list of events is shown,

*When* a user specifies a number of events to show,

*Then* the list should match the chosen number.
<br><br>


### **4. Available offline**
**Scenario 1:** Show cached data when there’s no internet connection

>*User Story*:  As a user, I should be able to access the app offline, so that I can view events even on a patchy connection or when I've run out of data.

*Given* the app is live,

*When* connection to internet is lost,

*Then* app should still work by showing data taken from an offline cache.
<br><br>

**Scenario 2:** Show error when user changes the settings (city, time range)

>*User Story*:  As a user, I should be able to see an error message when I do something wrong, so that I can go back to being able to use the app.

*Given* default time and city settings,

*When* a user changes city and time settings,

*Then* an error message should be displayed.
<br><br>


### 5. **Data visualisation**
**Scenario 1:** Show a chart with the number of upcoming events in each city

>*User Story*:  As a user, I should be able to see a data visualisation of upcoming events, so that I can better and more easily understand the situation.

*Given* a city has been chosen,

*When* a user chooses to view data on upcoming events,

*Then* appropriate charts and data visualisations should be displayed.
