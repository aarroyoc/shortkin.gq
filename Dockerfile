FROM node:12.14.1-buster

WORKDIR /opt/shortkin.gq

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY . .

VOLUME /opt/shorkin.gq/shortkin-db

EXPOSE 7291

CMD ["npm", "start"]
