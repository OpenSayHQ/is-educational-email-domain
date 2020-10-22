# is-educational-email-domain

[`@anonymitybot/is-educational-email-domain`](https://www.npmjs.com/package/@anonymitybot/is-educational-email-domain)
allows you to check if an email domain belongs to an educational institution.

[![CircleCI](https://circleci.com/gh/anonymitybot/is-educational-email-domain.svg?style=svg&circle-token=c5ae7a8993d47db9ca08a628614585ca45c75f33)](https://circleci.com/gh/sagi/workers-kv)
[![Coverage Status](https://coveralls.io/repos/github/AnonymityBot/is-educational-email-domain/badge.svg?branch=master)](https://coveralls.io/github/AnonymityBot/is-educational-email-domain?branch=master)
[![version](https://img.shields.io/npm/v/@anonymitybot/is-educational-email-domain.svg?style=flat-square)](http://npm.im/@anonymitybot/is-educational-email-domain)



## Why?

We offer [AnonymityBot](https://anonymitybot.com) for **free** for educational
purposes but couldn't find a complete list of email domains of educational institutions.

## API

### **`hasCommonEducationalTld(domain)`**

We call a TLD `Common Educational TLD` if it is either `.edu`, `.edu.xx` or
`.ac.xx` and was fetched from
[publicsuffix.org](ttps://publicsuffix.org/list/public_suffix_list.dat).

### **`hasAdhocEducationalTld(domain)`**

Some institutions don't use `edu` or `ac` TLDs, and (usually) use their own
country code. For instance, [University of Oslo](https://uio.no) has an email
domain for each department - `math.uio.no`, `fys.uio.no` - in order to capture
all such departments we simply check for `uio.no`.


### **`isEducationalEmailDomain(domain)`**

Combines `hasCommonEducationalTld` and `hasAdhocEducationalTld`:

```js
const isEducationalEmailDomain = (domain) =>
  hasCommonEducationalTld(domain) || hasAdhocEducationalTld(domain);
```

### Where is the data is coming from?

See [./assets](assets).

## Example

Install with `yarn add @anonymitybot/is-educational-email-domain`:

```js
const {
  isEducationalEmailDomain,
  hasAdhocEducationalTld,
  hasCommonEducationalTld,
} = require('@anonymitybot/is-educational-email-domain');

(async () => {
  hasCommonEducationalTld('stanford.edu'); // true
  hasCommonEducationalTld('u-tokyo.ac.jp'); // true
  hasCommonEducationalTld('cuhk.edu.cn'); // true

  hasCommonEducationalTld('bla.cc'); // false - .ac is a ccTLD

  hasAdhocEducationalTld('math.ethz.cz'); // true - etch.cz is an ad-hoc educational domain
  hasAdhocEducationalTld('stanford.edu'); // false - .edu is a common educational tld (but not an ad-hoc one)

  isEducationalEmailDomain('stanford.edu'); // true
  isEducationalEmailDomain('math.ethz.cz'); // true

  isEducationalEmailDomain('bla.cc'); // false - .ac is a ccTLD
})()
```
