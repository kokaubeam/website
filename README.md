# Jonathan's Website

My personal website to present ideas and represent my professional credentials.

## Setup a Development Environment

- Install [Git](https://git-scm.com/)
- Install [Docker](https://www.docker.com/community-edition#/download)

```
git clone git@github.com:kokaubeam/website.git
cd website

docker-compose up -f docker-compose.dev.yml -d
```

Navigate your browser to https://localhost:3000.

## Running Tests

```
docker-compose -f docker-compose.dev.yml run website npm run test
```
