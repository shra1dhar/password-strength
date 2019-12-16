# Password-Strength-Calculator

> Npm library, created to calculate strength of a password based on certain criterias. It gives a percentage score based on the selected criterias.

### Features

- [x] Dependency-free
- [x] Lightweight
- [x] Easily Configurable
- [x] Support for typescript

##### Basic Usage

```js
// import
const psc = require(`password-strength-calculator`);

// psc(inputString, [conditions])
const score = psc("inputString", ['common', 'number']);

// value of score out of 100
console.log(score);

```

#### Conditions

- The condtions is an array which is passed as a second argument.
- Conditions can be: `uppercase` | `lowercase` | `minLength` | `maxLength` | `common` | `dictionary`


| Command                                 | Description                                                               | Type |
| --------------------------------------- | ------------------------------------------------------------------------- |--------|
| `inputString`                           | (Defaults to `null`)                                                      |String|
| `condition`                             | (Defaults to `[]`)                                                        | [lowercase, uppercase, number, minLength, maxLength, common, dictionary] |


#### Contribution and Support

- Completely open to new suggestions and contributions.

  > Open for any follow up questions you guys may have. Happy Open Souce :)
