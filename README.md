# welcome to Flight service

## Project setup

- clone the project on your local system
- Execute `npm install` in the same directory as cloned project
- Create `.env` file in the cloned project and the following env variable
  - `PORT=3000`
- Inside the src/config folder create a new file config.json and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute
  - `npx sequelize db:create` and then execute `npx sequelize model:generate ......` for creating model and
    then execute
    `npx sequelize db:migrate` for migrating /sinking the model in database
