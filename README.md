# Welcome to Flight Services

## Project Setup
-clone the project on your local system
-Execute `npm install` on the same path as root directory
-Create a `.env` file in the root dir and add following environments variable 
  -`PORT 3000`
-Inside the `src/config` folder, create a new file `config.json` and then add the following piece of code

```
{
  "development": {
    "username": <Your DB login name>,
    "password": <Your local sql password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}  

