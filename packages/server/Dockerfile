FROM node:lts

WORKDIR /app

RUN apt-get update && apt-get install npm -y

COPY package*.json ./

ARG PORT=4000

ENV PORT=$PORT

EXPOSE $PORT

COPY . .

RUN chmod +x ./.docker/entrypoint.sh

ENTRYPOINT [ "bash", "./.docker/entrypoint.sh" ]