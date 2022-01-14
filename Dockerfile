FROM node:12.12.0-alpine
RUN mkdir -p /opt/app/build
RUN apk add python make gcc g++
WORKDIR /opt/app
COPY . .
RUN npm install


RUN npm run build

RUN adduser -S app
CMD chown -R app /opt/app
USER app
EXPOSE 8000

CMD [ "npm", "run", "prod" ]