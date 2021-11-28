# TO DO LIST

## Introduction

It is a full Stack project where authentication and authorization are practiced to be able to navigate the page.

## About

It is an app where you can make your To Do List. put prices, descriptions, type of use, etc. Any change or publication is made first by registering or logging in.

It is a CRUD app where you can modify, delete or add your publications.

## Stack of Technologies

### Front End:

HTML, CSS, Javascript, React, Styled Components, Redux.

### Back End:

Express, Node JS, JWT, pcrypt, sequelize, PostSQL.

## **Starting Instructions**

### BoilerPlate

The boilerplate has two folders: `api` and `client`. In these folders will be the code of the back-end and the front-end respectively.

In `api` you should to create a file called: `.env` that's has the following form:

```
DB_USER=userPostgres
DB_PASSWORD=passwordPostgres
DB_HOST=localhost
```

Replace `userPostgres` and `passwordPostgres` with your own credentials to connect to postgreSQl.

Additionally, it will be necessary to create a database from psql called: `publicaciones`

Realizar:

- In `api` file:

```
npm install / yarn add
```

- In `client` file:

```
npm install / yarn add
```

The `api` file has as local path "localHost:3001" and the `client` file as local path "localHost:3000".

- In `api` file:

```
npm start / yarn start
```

- In `client` file:

```
npm start / yarn start
```

to run the application.
