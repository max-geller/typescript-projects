# Stage 1
FROM        node:18.17.0 as node
WORKDIR     /app
COPY . .
RUN         npm install
RUN         npm run build --prod
# Stage 2
FROM        nginx:alpine
COPY        --from=node /app/dist/typescript-projects /usr/share/nginx/html