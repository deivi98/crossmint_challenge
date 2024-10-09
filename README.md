# Crossmint challenge

This repo has been created as part of an interview process challenge requested by Crossmint.

## Project

The goal is to use the API provided and its docs to create a simple program which performs calls
to achieve desired result.

More about it at https://challenge.crossmint.com/

## Features
- De-coupled modular project structure
- Used axios for http requests and implemented rate limiting
- Multiple layers: request, domain (model), service, client
- Error handling
- Interfaces + independent replaceable components
- Logging for verbosity (track progress)
- Very light in dependencies
- Business logic at domain level + validation

## Installation
1. Clone repo
2. Ensure you install and use Node v22
3. Install pnpm
4. Run `pnpm i`
5. Create env file `cp .env.dist .env` and fill env variables
6. Run program with `pnpm dev`

> [!CAUTION]
> This project has only been tested in Linux using Node v22. It is not intented to work smoothly otherwise

## TO-DO
- [ ] Unit tests
- [ ] Use of value-objects for validation purposes
- [ ] Allow multiple astral objects in same position?
- [ ] Not use Void model if not necessary
- [ ] Better error handling and logs
- [x] Comments and docs
- [x] Check env variables are set