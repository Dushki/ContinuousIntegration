FROM node:carbon
MAINTAINER Dushyant V1
WORKDIR /root/hello-jenkins
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
EXPOSE 80 5000 5001 
