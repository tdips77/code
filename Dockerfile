# Fetching latest code from Node Carbon

FROM node:carbon

# Create app directory

WORKDIR /home/ubuntu/docker

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

#Expose 3000 Port

EXPOSE 3000

#Start the application from package.json

CMD [ "npm", "start" ]