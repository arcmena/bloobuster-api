<div align="center">
<img src="https://user-images.githubusercontent.com/57734796/87494337-18c6e900-c625-11ea-9025-d8c79cd19c74.png" width="250" />
<p>A new way to share and talk about media.</p>
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/arcmena/bloobuster-api?color=1c619e&style=flat-square">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/arcmena/bloobuster-api?color=1c619e&style=flat-square">
<img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed-raw/arcmena/bloobuster-api?color=1c619e&style=flat-square">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/arcmena/bloobuster-api?color=1c619e&style=flat-square">
</div>

## What is it?

Bloobuster API is a easy way to connect your users to their favourite tv series and movies.

It's going to be integrated with IMDb-API to search and relate to the user in the database.

## Technologies

-   NodeJs
-   TypeScript
-   Sequelize
-   PostgreSQL
-   JWT


## Movie API

To get the movie and tv series information we are using the [imdb-api](https://imdb-api.com). They have a free tier subscription with up to 100 requests by day.

There are other free movie api over the internet, but they lack crucial information.

# How to start

Clone this repo:

```bash
git clone https://github.com/arcmena/bloobuster-api.git
```

## Starting

Install the dependencies:

```bash
npm install
```

or simply:

```bash
yarn
```

## Configuration

Create a .env.development based on the .env.example with your configuration to connect to the database and the movie api.

```json
# Database variables

DB_HOST=        # The DB host address.
DB_USER=        # The DB username
DB_PASSWORD=    # The DB password.
DB_DATABASE=    # The DB name.
DB_PORT=        # The DB port.

# JWT configuration

JWT_SECRET=     # The authentication secret key.

# Movie API configuration

API_KEY=        # The API key you got on the api site.
API_ENDPOINT=   # The API url base endpoint (e.g. https://imdb-api.com/en/API)
```

<div align="center">
🛠 IN PROGRESS
</div>

## Author

-   **Marcelo Mena** [arcmena](https://github.com/arcmena)
