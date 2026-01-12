FROM node:20

WORKDIR /src

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml /src/

RUN pnpm install

COPY . /src

CMD ["pnpm", "start"]

