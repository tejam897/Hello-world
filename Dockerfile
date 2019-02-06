FROM node

WORKDIR ./app

COPY . /app

RUN  npm install

EXPOSE 3000


ENTRYPOINT ["node", "server.js"]

CMD ["-c"]