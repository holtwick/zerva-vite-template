FROM node:16
WORKDIR /app
COPY . .
RUN yarn --no-lockfile --production
RUN yarn build
CMD ["node", "dist/main.cjs"]
EXPOSE 8080
