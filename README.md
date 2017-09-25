An Angular 4 SPA implementation for spotify services.

# Why
The goal of the project was to write services for some missing functionality that I felt spotify needed for managing playlists.

I haven't found new or updated projects that included any login functionality to get the required token necessary to make spotify calls.

# Status

This project is very new and I'm still sorting it out.  I'm learning Angular 4 in the process.

## As of today (9/25/17)
* The "implicit grant flow" does work for logging in for a very limited happy path solution.  Use the browser dev console.  If a 401 is returned with a token expired message then "logout" and "login again. 
* The search service does work taking the token and searching on artists and tracks.

Be very aware that 
