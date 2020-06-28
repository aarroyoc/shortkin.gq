FROM node:12.18.1

WORKDIR /opt/shortkin.gq

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY . .

VOLUME /opt/shorkin.gq/data

EXPOSE 7291

CMD ["npm", "start"]
