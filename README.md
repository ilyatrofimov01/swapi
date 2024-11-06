# Project Overview

> It's a basic UI representation of [SWAPI](https://swapi.dev/)

## How install this application? 
1. To install app locally, please, clone repo to your device
2. Install project dependencies (I reccommend use npm)
```
npm install
```
3. Create your own `.env` file inide root folder (you can see `.env.example` [Link to .env.example](https://github.com/ilyatrofimov01/swapi/blob/main/.env.example) inside the project)
4. After adding env file you can successfully run the project using command below:
   ```
   npm start
   ```
## Some comments regarding project AUTH

In login page you can see different methods to authenticate to app: default, facebook and google login buttons.
If you didnt't set `.env` variables you can't use facebook aand google auth, because they requiered application or client keys.
For this case I create default Auth flow, so you can use **any** `email` and `password` for loggin 
