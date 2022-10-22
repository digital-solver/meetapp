Feature: Show and hide event details

Scenario: An event element is collapsed by default
Given a user has searched for a city
When the list of events is shown
Then all event details should be hidden

Scenario: User can expand an event to see its details
Given a list of unexpanded events are shown
When a user clicks on an event
Then the event details should be revealed

Scenario: User can collapse an event to hide its details
Given an event has had its details expanded
When a user hides details
Then the events details should collapse
