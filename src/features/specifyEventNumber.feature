Feature: Specify event length

Scenario: 32 is the deafult length of events
Given a number of events to be shown has not been specified
When a user searches for events in a city
Then a list of thirty two events should be shown

Scenario: User can change the number of events they want to searched
Given a list of events is visible
When a user specifies a number of events to shown
Then the list should match the chosen number
