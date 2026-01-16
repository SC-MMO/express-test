FROM node:24-alpine

WORKDIR /client

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]

