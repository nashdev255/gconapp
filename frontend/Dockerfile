FROM node:22.15.0-alpine3.21

WORKDIR /app/

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
