FROM node:21-bullseye

COPY . .

RUN yarn install\
&& npx prisma db push

CMD [ "start" ]
ENTRYPOINT [ "yarn" ]