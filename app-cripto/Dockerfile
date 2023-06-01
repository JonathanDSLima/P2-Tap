FROM node:16.14.2-slim AS builder

COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000

ENTRYPOINT ["node"]

CMD npm start