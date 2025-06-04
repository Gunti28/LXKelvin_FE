    # # Step 1: Build React App
    # FROM node:alpine3.22 as build
    # WORKDIR /app
    # COPY package.json .
    # RUN npm ci
    # COPY . .
    # RUN npm run build

    
    # # Step 2: Serve With Nginx
    # FROM nginx:3.22-alpine
    # WORKDIR /usr/share/nginx/html
    # RUN rm -rf *
    # # COPY --from=build /app/build .
    # COPY --from=build /app/build /usr/share/nginx/html
    # EXPOSE 80
    # ENTRYPOINT ["nginx", "-g", "daemon off;"]


    # Stage 1: Build React App
    FROM node:22-alpine as build
    WORKDIR /app
    COPY package.json ./
    RUN npm install
    COPY . .
    # Build the app
    RUN npm run build

    # Stage 2: Serve With Nginx
    FROM nginx:alpine
    COPY --from=build /app/dist /usr/share/nginx/html

    # Copy custom Nginx config
    COPY nginx.conf /etc/nginx/conf.d/default.conf

    EXPOSE 80
    ENTRYPOINT ["nginx", "-g", "daemon off;"]