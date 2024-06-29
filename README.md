# Welcome to Flight Services

## Project Setup
- clone the project on your local system
- Execute `npm install` on the same path as root directory
- Create a `.env` file in the root dir and add following environments variable 
  `PORT 3000`
- Inside the `src/config` folder, create a new file `config.json` and then add the following piece of code

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

```
-Once you've added your db config as listed above, go to the src folder via terminal and execute 
`npx sequelize db:create` 
and then execute `npx sequelize db:migrate`

## Database Design
- Airplane table :
  - id
  - model number
  - capacity
- A flight belongs to an airplane but one airplane can be used in multiple flights.

- Flights table:
  - id
  - departure_city_id
  - destination_city_id
  - departure
  - arrival
  - airport_id
  - flight_number

- Airport table:
  - id
  - name
  - city_id
  - address
- One airplane can have many flights, but a flight belongs to one airplane.  

- City:
  - id
  - name
- A city has many airports but one airport belongs to single city.  


## Tables
### City Table -> id, name, created_at, updated_id
### Airport -> id, name, address, city_id, created_at, update_at
   Relationship : City has many airports and Airport belongs to a city (one to many relationship)