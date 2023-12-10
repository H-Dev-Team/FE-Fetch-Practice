FROM node:21-bullseye

COPY . .

RUN yarn install

CMD [ "start" ]
ENTRYPOINT [ "yarn" ]