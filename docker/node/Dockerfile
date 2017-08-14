FROM node:7.8

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
#CMD ["nodemon", "server.js"]