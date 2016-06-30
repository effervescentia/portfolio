FROM node:6.1.0

MAINTAINER effervescentia

ENV NODE_ENV production

WORKDIR /home/mean

RUN npm install -g http-server

# This is just a check to ensure riot is available
COPY dist /home/mean

EXPOSE 8080

CMD ["http-server"]
