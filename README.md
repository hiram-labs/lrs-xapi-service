# LRS xAPI Service

RESTful API wrapping a mongodb to facilitate transactions.

### Installation

```sh
git clone git@github.com/hiram-labs/lrs-xapi-service.git
cd /lrs-xapi-service
npm i
```

### Development

```sh
docker-compose up -d
cp .env.example .env
vi .env
npm start:dev
```

### Test

```sh
docker-compose up -d
cp .env.example .env
vi .env
npm run fmt
npm run lint
npm run build
npm test:local
```
