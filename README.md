# Jonathan's Website

My personal website to present ideas and represent my professional credentials.

Visit the site at https://jonathan.obj.co.

## Setup a Development Environment

- Install [Git](https://git-scm.com/)
- Install [Docker](https://www.docker.com/community-edition#/download)

```
git clone git@github.com:kokaubeam/website.git
cd website

docker-compose -f docker-compose.dev.yml up -d
```

Navigate your browser to https://localhost:3000.

### Using Windows?

Add `CHOKIDAR_USEPOLLING=true` to the `.env` file, at least until Windows learns to detect file changes.

## Running Tests

```
docker-compose -f docker-compose.dev.yml run website npm run test
```
