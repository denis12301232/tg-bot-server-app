FROM node:14.17.4

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .
RUN npm run build

EXPOSE 50

CMD ["node", "./dist/main.js"]