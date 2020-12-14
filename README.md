# Shopping Cart by Tomy

This repository contains the client for a shopping cart app.

## Description

In this project, I utilized my knowledge of TypeScript, React, Redux, Redux-Saga and Test Driven Development.
I used [Etsy's API](https://www.etsy.com/ca/developers) to retrieve product data. 

## Features

Users are able to:
* See a list of products
* Add and remove products from a shopping cart
* View their shopping cart
* View the quantity of products in their cart

Test driven development - 
The user experiences mentioned above are expressed through tests written with Jest.

Caching - 
To avoid hitting the request limits on this API, I came up with a caching solution 
which utilizes local storage, Redux and Redux Saga. 

## To Do

Due to time contraints, I was not able to devote enough time to make as clean of user-interface as I would have liked.
In particular, I would have liked to have implemented a products detail page and have fleshed out the other pages.


# Getting started

## Initial setup and build

With a fresh repository, thils will get the application compiled and running on http://localhost:3000/

1. Install dependencies

```
yarn install
```

2. Copy example configuration file and modify accordingly. To get the API Key, sign up for one on [Etsy Developer](https://www.etsy.com/ca/developers)
```
cp .env.example .env
```

3. Compile TypeScript, optionally watch source files for changes and build them automatically

```
yarn build [--watch]
```

4. Run tests, optionally watch source files for changes and run the tests automatically

```
yarn test [--watch]
```

5. Build and start the application on your browser

```
yarn start [-c]
```

If you forgot to place an API KEY in the previous step, you will need to start from step 3 and ensure you clear your cache

```
yarn start -c
```
