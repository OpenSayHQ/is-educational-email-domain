# is-educational-email-domain

Check if an email domain belongs to an educational institution.

[![CircleCI](https://circleci.com/gh/AnonymityBot/is-educational-email-domain.svg)](https://circleci.com/gh/AnonymityBot/is-educational-email-domain)
[![Coverage Status](https://coveralls.io/repos/github/AnonymityBot/is-educational-email-domain/badge.svg?branch=master)](https://coveralls.io/github/AnonymityBot/is-educational-email-domain?branch=master)
[![version](https://img.shields.io/npm/v/@anonymitybot/is-educational-email-domain.svg?style=flat-square)](http://npm.im/@anonymitybot/is-educational-email-domain)



## Why?

We offer [AnonymityBot](https://anonymitybot.com) for **free** for educational workspaces but couldn't find an
efficient way to detect email domains of educational institutions.


###  Why Open Source?

Why not?

> We’ve been students and lecturers ourselves and personally felt the
> communicational hardships affecting both sides (the fear of being ridiculed for
> asking a question, the moment no one asks questions - not knowing if they got
> it, etc.) and therefore think that more software should offer Pro Bono tiers
> for educational purposes.

> For this reason, we decided to open source our software that automatically
> detects if an email domain belongs to an educational institution.

You can [read more here](https://anonymitybot.com/blog/automatically-free-for-educational-workspaces/).

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

### Where is the data coming from?

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
