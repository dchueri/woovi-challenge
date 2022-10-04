FROM node:lts

WORKDIR /app

RUN apt-get update && apt-get install npm -y

COPY package*.json ./

ARG PORT=5173

ENV PORT=$PORT

EXPOSE $PORT

COPY . .

RUN chmod +x ./.docker/entrypoint.sh

ENTRYPOINT [ "bash", "./.docker/entrypoint.sh" ]