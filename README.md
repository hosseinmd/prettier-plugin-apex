# Prettier Apex  [![Build Status](https://travis-ci.org/dangmai/prettier-plugin-apex.svg)](https://travis-ci.org/dangmai/prettier-plugin-apex)

![Prettier Banner](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)

This is a code formatter for the Apex Programming Language,
used on the Salesforce development platform.

It uses the excellent [Prettier](https://prettier.io/) engine for formatting,
and the jorje compiler from Salesforce for parsing.

## Status

This project is actively being worked on, and has been tested on production code.

* Formatting still needs work.
* Some defaults might be changed in the future, e.g. default number of spaces,
continuation indent, etc.

## How to run

```bash
git clone https://github.com/dangmai/prettier-plugin-apex.git
cd prettier-plugin-apex
npm i
npm run execute -- prettify /path/to/apex/dir
```

### License

MIT
