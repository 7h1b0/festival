# Festival [![Build Status](https://travis-ci.com/7h1b0/festival.svg?branch=master)](https://travis-ci.com/7h1b0/festival) [![codecov](https://codecov.io/gh/7h1b0/festival/branch/master/graph/badge.svg?token=INA97QXW5D)](https://codecov.io/gh/7h1b0/festival) [![Netlify Status](https://api.netlify.com/api/v1/badges/32191849-dfc5-4285-b75d-4cbd831cfc2b/deploy-status)](https://app.netlify.com/sites/festival-converter/deploys)

## What it does

https://festival-converter.netlify.app/ is a sleek and modern currency converter for festivals

---

## Requirements

- [Node.js 10.x](https://nodejs.org/)

---

## Development

To start an ephemeral development server run:

```sh
npm install
npm start
```

Then browse to http://localhost:3000

---

## Commands

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run format:check` | Formats the code using prettier. |
| `npm run type:check`   | Checks types using Typescript    |
| `npm run lint:check`   | Lints the JavaScript code.       |
| `npm test`             | Runs tests.                      |
| `npm run test:e2e`     | Runs e2e tests using Cypress.    |
| `npm start`            | Runs the website in development. |
| `npm run build`        | Builds the production assets.    |

---

## Examples

- [Tomorrowland 2019](https://festival-converter.netlify.app/?name=Tomorrowland+2019&currency=Pearl&rate=1.6)
- [Mysteryland 2019](https://festival-converter.netlify.app/?name=Mysteryland&currency=Token&rate=3)
- [Rock Werchter 2019](https://festival-converter.netlify.app/?name=Rock+Werchter&currency=Voucher&rate=2.75)
