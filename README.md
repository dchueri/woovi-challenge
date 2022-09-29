#
# Movies Catalog - (GraphQL)
![Badge In Development](http://img.shields.io/static/v1?label=STATUS&message=IN%20DEVELOPMENT&color=blue&style=for-the-badge)  ![Badge Versão](https://img.shields.io/badge/VERSION-1.0.0-blue?style=for-the-badge) 

## Index

* [Description](#description)
* [First steps](#como-utilizar)
* [Technologies](#technologies)
* [Author](##author)

## 🚀 Description

The **Movies Catalog** was developed to participate of Woovi Challenge and has the objective to make movies catalogation by name and genre.

## 📄 Getting Started

To make the setup you first need to clone this repository typing the comand below in your terminal:

    https://github.com/dchueri/movies-catalog.git

Next, you need to access the project path: 

    cd server

If you'd like to use Docker (recomended) just insert the comand below:

    docker compose up --build
    
Or access the *server* path and install the application:

    cd server
    npm install    

## 🔶 Queries
 - All movies

    	{
          movies  {
            edges  {
              node  {
                id
                title
                genre
              }
              cursor
            }
            pageInfo  {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }

## 🔷 Mutations
### Movies
 - Create Movie
 
		mutation{
          CreateMovie(input: {title: "Some title", genre: "Action"}) {
            movieEdge {
              node {
                id
                title
                genre
              }
            }
            error
          }
        }

 - Update Movie
 
		mutation{
          UpdateMovie(input: {id: "123456789", title: "Some title", genre: "Action"}) {
            movieEdge {
              node {
                title
                genre
              }
            }
            error
          }
        }

 - Delete Movie
 
		mutation{
          DeleteMovie(input: {id: "123456789"}) {
            error
            success
          }
        }

### Users

- Register

		mutation {
		  RegisterUserMutation(input: {name: "Example", email: "example@example.com", password: "123456"}) {
		    token
		    me {
		      id
		      name
		      email
		      }
		    error
		  }
		}

- Login

		mutation {
		  LoginMutation(input: {email: "example@example.com", password: "123456"}) {
		    token
		    me {
		      id
		      name
		      email
		    }
		  }
		}

## 🛠️ Technologies

### Back-end
* `TypeScript`
* `GraphQL` - First time using GraphQL, I thougth very interesting to learn a new paradigm to construct this API, since I started in development I have always practice API-REST and OO;
* `KoaJS` - Used for web server;
* `Mongoose` - ODM; and
* `MongoDB` - Database used.

### Front-end
* `ReactJS` - Library for build the front-end;
* `Vite` - Used to base files generation for a ReactJs project;
* `Recoil` - State management;
* `MaterialUI` - UI Tools; and
* `Relay` - Data-fetching.

### Environment
* `Docker` - Was a docker-compose file to execute the API in containers (more stable).

## ✒️ Author

| [<img src="https://avatars.githubusercontent.com/u/84249430?s=400&u=b789830e57ccc23a4d4d758542785461dd656b5f&v=4" width=115><br><sub>Diego  Chueri</sub>](https://github.com/dchueri) | 
| :---: |
