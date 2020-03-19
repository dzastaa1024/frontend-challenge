
## Installation

Install all dependencies using:
```bash
npm install
```
Run the application using: 
```bash
npm run start
```

## Layout

Applications were a great opportunity to learn more about React. I really liked the project structure and styled-components.


First of all, I created a fork from your repository. Then I got to know the structure of the project. I have read the API documentation.

I used Fetch in order to get data from API. In keep data in the App component. Function Search is invoked every time when the onChange event happens.

![image](https://user-images.githubusercontent.com/47246412/77062598-184e7680-69d4-11ea-8a1c-c9d1db70d9e3.png)

The whole application is divided into Sidebar and the component returned by rooting.

![image](https://user-images.githubusercontent.com/47246412/77062608-1edcee00-69d4-11ea-940a-de2e79d1c26b.png)

The Discover component is divided into two parts. The first part is responsible for displaying movies, the second has search sections and filters section. 

![image](https://user-images.githubusercontent.com/47246412/77062625-27352900-69d4-11ea-874a-d8b0b485ba66.png)

The search section is divided into two parts as well. The first contains two inputs- first is using for a name, and second (optional) is a year of release. 

![image](https://user-images.githubusercontent.com/47246412/77062640-2dc3a080-69d4-11ea-99fd-94dca9127329.png)



The list of filters is expandable but the logic responsible for a filter is not implemented.

![image](https://user-images.githubusercontent.com/47246412/77062657-35834500-69d4-11ea-8286-b7549f830fd0.png)


## Key Functionality 

Movies are store in the State of the discover component. After that, they are passed by props to the Movielist component - which passes a single movie to the Movieitem component.



Movieitem is clickable, click on a single movie card displays a modal - that displays all the details about the movie.

![image](https://user-images.githubusercontent.com/47246412/77062682-4338ca80-69d4-11ea-8093-60b59d997f88.png)


All components are styled using styled-components.

![image](https://user-images.githubusercontent.com/47246412/77062698-4b910580-69d4-11ea-9c4c-e5f90605d8a6.png)









# Cohire Coding Challenge (Frontend)

### Introduction 
Welcome! This coding challenge is designed to explore your React & SCSS frontend skills. You will have to create a simple SPA based off the provided mockup and make a few API calls to a public web API.

### The challenge
You have to complete the test and write any necessary code so that the search page looks like this [mockup]. All the images/icons you need are already imported into this repository. 

The discover page should enable the user to search for movies as keywords are typed into the search bar. Functionality for filtering does not need to be implemented, however the filter categories should still be expandable upon clicking. On mobile devices, the navigation bar should slide in from left to right when the user clicks on the hamburger icon. 

There will also be some UI bugs that you should spot and fix. In addition, you have to add all the responsive stylesheets for the app to run smoothly on mobile devices.

Movie data can be queried via: 
- [theMovieDB]

Packages & Technologies used in the repo:
- `axios`
- `node-sass`
- `react-router-dom`
- `styled-components`

### Submission guide
Please fork this repo and drop your contact person a note once you are done

### How we review
- **Design**: Were you able to translate the mockup into a web application that works well on various browsers and devices? Does the output match the mockup? This is the most important aspect. Weight: 50%
- **Functionality**: Does the search function work? Weight: 25%
- **Code quality**: Is the code easy to understand and maintain? Is the coding style consistent with the language's best practices? Do you demonstrate a good grasp of JavaScript, especially ES6? Weight: 15%
- **Performance**: Does the UI render quickly? Are the choice of libraries etc appropriate for the web page? Weight: 10%

### Bonus points
- **Functionality** - Do the results load instantly as the user types? If the API backend has rate limiting enforced, how do you implement the aforementioned while also taking rate limiting into account?
- **Documentation** - Is the README well written? Are the commit messages clear?
- **Automated Tests** - Are there any automated frontend tests?
- **Production-readiness** - Is there proper error handling? Is the code ready to to put into production?
- **Future-readiness** - Web workers? PWA? Client-side caching?

[mockup]: <https://drive.google.com/file/d/1_UckmdKpjack6ObU1iRejZvQIx7LG8uJ/view?usp=sharing>
[theMovieDB]: <https://www.themoviedb.org/documentation/api>
