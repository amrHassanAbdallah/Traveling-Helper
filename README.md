[![CircleCI](https://circleci.com/gh/amrHassanAbdallah/Traveling-Helper/tree/master.svg?style=svg)](https://circleci.com/gh/amrHassanAbdallah/Traveling-Helper/tree/master)

# Travel Helper

An application to help travelers know more about the countries they want to travel to, information such as timezones, locations to visit

built using nodejs, expressjs 

## Installation


### Dependencies
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* postgres (with gis extenstion)
* [docker-compose](https://docs.docker.com/compose/install/)

## Up & Running
Make sure to create **.env** with your db configurations, something like below

```
//example of .env
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=secrect
POSTGRES_HOST=localhost
POSTGRES_DB=HAMDA
```

### Locally
1. ```shell
   npm install
   ```
2. ```shell
   npm run serve
   ```


### Using docker-compose
1. ```shell
   docker-compose up
   ```


### To run the tests
```bash
npm run test
```
