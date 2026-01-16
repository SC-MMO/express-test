FROM node:24-alpine

WORKDIR /server

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

CMD ["sh", "-c", "npx prisma db push --accept-data-loss && npx prisma migrate deploy && npx prisma generate && pnpm run dev"]
