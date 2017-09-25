An Angular 4 SPA implementation for spotify services.

# Why
The goal of the project was to write services for some missing functionality that I felt spotify needed for managing playlists.

I haven't found new or updated projects that included any login functionality to get the required token necessary to make spotify calls.

# Status

This project is very new and I'm still sorting it out.  I'm learning Angular 4 in the process.

## As of today (9/25/17)
* The "implicit grant flow" does work for logging in for a very limited happy path solution.  Use the browser dev console.  If a 401 is returned with a token expired message then "logout" and "login again. 
* The search service does work taking the token and searching on artists and tracks.
* Not test cases exist.

## Next Steps
* Add a simple test case to build out that flow
* Add better happy path flow.  It the token is expired try to get a new one or ask to log in again.
* UI updates on search results to have results better organized.

# To Use

* Add client key and callback url to spotify.services.ts
* npm install
* ng serve
* open localhost:4200
