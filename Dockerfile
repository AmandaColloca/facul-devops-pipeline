FROM node
WORKDIR /src
COPY . .
RUN npm install
CMD ["npm", "start"]