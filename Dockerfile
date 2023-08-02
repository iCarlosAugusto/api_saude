FROM node

WORKDIR /usr/app

COPY package.json ./

COPY . .

RUN npm install
RUN npx prisma generate
RUN npx prisma db push
RUN NODE_OPTIONS="--max-old-space-size=8192"

ENTRYPOINT [ "npm", "run", "dev" ]