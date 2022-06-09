FROM node:latest

WORKDIR /usr/src/app

# instalar o dockerize que tem uma funcão de aguardar um outro container subir, no compose tem o comando
RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY ./app .


RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]