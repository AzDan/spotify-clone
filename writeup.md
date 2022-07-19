# Technical decisions

## The api is not exposed to the end user
The spotify api is a well defined public api, but in applications that we develop, it is highly
likely we will be developing our own api. It's a good idea not to expose the api endpoint to the user.

## Using a .env file to store sensitive data
The application should never expose sensitive info like client id or secret in the application anywhere.
It should be provided by the environment we are using.

## Folder structure
Clean folder structure is important as the project codebase scales over time.
The api, assests, components, helper functions and redux store, all have their separate folders
with further bifurcations as necesssary. It is a good practice to keep well structured codebase

## Redux
We have used Redux for state management in our application.
There is always a slight learning curve to using redux that cannot be avoided.
I have tried to use naming conventions that make sense for action types and action creators

## Logic offload
I've tried to keep most logic away from UI components. 
The components only render data based on the redux state
Most components perform one api call needed for proper functioning of the application
But logic is not shared among components, so they can be used independently of each other

## Typescript
I have used Typescript with React to make this application
Typescript provides type check while development which helps prevent buggy code to a huge extent

## SCSS over plain CSS
I like to use SCSS over plain CSS because of the many advantages it provides
Code can be written in nested form, the ability to make mixins and the code looks clean

## Future scope to improve the project
There are many features that have not been incorporated yet and can be to improve the
usability and user friendliness of the application which are as follows:
- Error handling and token expiration handling
- Integrate the spotify player SDK so user can listen to music on the app
- Logout functionality
- More interactive UI
- Functionality of the browse section