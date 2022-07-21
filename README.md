# The Book Exchange

The Book Exchange is an online marketplace for users to exchange books they’ve already read for books they haven’t. 

```
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

## Notes

A few notes to keep you out of trouble:
- When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
- When running webpack, run `npm run webpack <extra commands>`, e.g. `npm run webpack`, rather than using `npx`
- This repo is set up for SCSS (aka "sass" style CSS). To avoid getting into a "why is my CSS not working" trap you'll need to make your CSS changes in /client/styles/index.scss and NOT in /server/public/styles.css

## Project team

Daniela
Jillian
Kate
Mandy
Tim
Victoria

## View Online
[The Book Exchange](https://the-book-exchange-mako.herokuapp.com/)
