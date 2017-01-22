FROM mhart/alpine-node:7
LABEL gistproxy
MAINTAINER briangonzalez

ENV NAME GITHUB_TOKEN
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000

CMD ["node", "index.js"]
