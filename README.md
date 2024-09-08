# With Docker Compose

This example contains everything needed to get a Next.js and MongoDB, in a development and production environment up and running with Docker Compose. 

## Benefits of Docker Compose

- Develop locally without Node.js or TypeScript installed ✨
- Easy to run, consistent development environment across macOS, Windows, and Linux teams
- Run multiple Next.js apps, databases, and other microservices in a single deployment
- Multistage builds combined with [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) outputs up to 85% smaller apps (Approximately 110 MB compared to 1 GB with create-next-app)
- Easy configuration with YAML files

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
git clone https://github.com/meyer-pidiache/docker-compose-nextapp-mongodb.git
```

Optionally, after the installation is complete:

- Run `cd next-app`, then run `npm install` or `yarn install` or `pnpm install` to generate a lockfile.

It is recommended to commit a lockfile to version control. Although the example will work without one, build errors are more likely to occur when using the latest version of all dependencies. This way, we're always using a known good configuration to develop and run in production.

## Development

To run the development server:

```bash
# Build dev
docker compose -p dev -f docker-compose.dev.yml build

# Up dev
docker compose -p dev -f docker-compose.dev.yml up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Production

Multistage builds are highly recommended in production. Combined with the Next [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature, only `node_modules` files required for production are copied into the final Docker image.

To run the production server (Final image approximately 110 MB).

```bash
# Build prod
docker compose -p prod -f docker-compose.prod.yml build

# Up prod
docker compose -p prod -f docker-compose.prod.yml up
```

Open [http://localhost:4000](http://localhost:4000).

## Useful commands

```bash
# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
docker system prune -af --volumes
```

## References

- [Next.js with Docker Compose](https://github.com/vercel/next.js/tree/canary/examples/with-docker-compose)
