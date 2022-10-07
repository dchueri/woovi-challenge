#
# Movies Catalog - (GraphQL)
![Badge In Development](http://img.shields.io/static/v1?label=STATUS&message=IN%20DEVELOPMENT&color=blue&style=for-the-badge)  ![Badge Versão](https://img.shields.io/badge/VERSION-1.0.0-blue?style=for-the-badge) 

## Index

* [Description](#description)
* [Getting Started](#getting-started)
	* [Preparing environment](#preparing-environment)
	* [Running](#running)
	* [Tests](#running-tests)
* [Technologies](#technologies)
* [Author](#author)

## Description

The **Movies Catalog** was developed to participate of Woovi Challenge and has the objective to make movies catalogation by name and genre.

## Getting Started

### Preparing environment
First you need to clone this repository typing the command below in your terminal:

    git clone https://github.com/dchueri/movies-catalog.git

After this, you need to access the project path: 

    cd movies-catalog

Now, copy the environment variables:

    yarn copy-envs
or

    npm run copy-envs

You need to complete .env files with their keys:

 #### server .env
 

    PORT=          // Port where server runs
    MONGO_URL=     // Mongodb URI
    JWT_SECRET=    // Secret key for JWT


#### web .env

    PORT=          // Port where server runs
    URL=           // URL of your server
    WEB_HOST=      // Link of your web app, this variable it's used for the recovery password email
    PUBLIC_KEY=    // Key of EmailJS¹
    TEMPLATE_ID=   // ID of your EmailJS template
    SERVICE_ID=    // ID of your EmailJS service
    TMDB_KEY=      // Your TMDB key²

¹ - See [Getting Started | EmailJS](https://www.emailjs.com/docs/)

² - See [The Movie Database API (themoviedb.org)](https://developers.themoviedb.org/3/getting-started/introduction) 

> #### Docker 
> Now if you'd like to use Docker just insert the comand below:
>  
>      docker compose up --build

After configuration, it's time of install the dependencies:

    yarn install
or

    npm install

Lastly, generate a schema with:

    yarn schema:generate
and [Relay](https://relay.dev/docs/guides/compiler/#compiler) artifacts with:

    yarn relay

 ### Running
 To run *server* and *app* simultaneously: 
 

    yarn start

To run just *server*:

    yarn start:server
 or *web*:
 
    yarn start:web
 
 ### Running tests

    yarn test -u

## Technologies

### Back-end
* `TypeScript`
* `GraphQL` - First time using GraphQL, I thougth very interesting to learn a new paradigm to construct this API, since I started in development I have always practice API-REST and OO;
* `KoaJS` - Used for web server;
* `Jest` - Automated tests;
* `Mongoose` - ODM; and
* `MongoDB` - Database used.

### Front-end
* `ReactJS` - Library for build the front-end;
* `Vite` - Used to base files generation for a ReactJs project;
* `Recoil` - State management;
* `Jest` - Automated tests;
* `Testing Library` - Testing utilities;
* `MaterialUI` - UI Tools; and
* `Relay` - Data-fetching.

### Environment
* `Docker` - Was a docker-compose file to execute the API in containers (more stable);
* `Webpack` - Module bundler.

## Author

| [<img src="https://avatars.githubusercontent.com/u/84249430?s=400&u=b789830e57ccc23a4d4d758542785461dd656b5f&v=4" width=115><br><sub>Diego  Chueri</sub>](https://github.com/dchueri) | 
| :---: |
