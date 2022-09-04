# Festival ![Validate](https://github.com/7h1b0/festival/workflows/Validate/badge.svg) [![codecov](https://codecov.io/gh/7h1b0/festival/branch/master/graph/badge.svg?token=INA97QXW5D)](https://codecov.io/gh/7h1b0/festival) [![Netlify Status](https://api.netlify.com/api/v1/badges/32191849-dfc5-4285-b75d-4cbd831cfc2b/deploy-status)](https://app.netlify.com/sites/festival-converter/deploys)

## What it does

https://festival-converter.netlify.app/ is a sleek and modern currency converter for festivals

---

## Requirements

- [Node.js 14.x](https://nodejs.org/)

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

- [Tomorrowland 2019](https://festival-converter.netlify.app/?name=Tomorrowland+2019&currency=Pearl&eur=16&value=10)
- [Mysteryland 2019](https://festival-converter.netlify.app/?name=Mysteryland&currency=Token&eur=15&value=5)
- [Rock Werchter 2019](https://festival-converter.netlify.app/?name=Rock+Werchter&currency=Voucher&eur=55&value=20)
- [Rock Werchter 2022](https://festival-converter.netlify.app/?name=Rock+Werchter+2022&currency=Voucher&eur=35&value=10)
- [Tomorrowland 2022](https://festival-converter.netlify.app/?name=Tomorrowland+2022&currency=Pearl&eur=20&value=12)
- [Mysteryland 2022](https://festival-converter.netlify.app/?name=Tomorrowland+2022&currency=Pearl&eur=16&value=4.5)
