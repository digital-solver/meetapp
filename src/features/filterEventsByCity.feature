Feature: Filter events by city

Scenario: When a user hasn't searched for a city, show upcoming events from all cities.
Given user hasn't searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario: User should see a list of suggestions when they search for a city
Given the main page is opens
When the user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they've typed

Scenario: User can select a city from the suggested list
Given the user was typing in the search box
And the suggestions list is visible
When the user selects a city from the list
Then the user's active city shoud be changed to their selection
And the user should be shown that city's list of events
