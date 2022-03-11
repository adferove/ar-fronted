FROM nginx:stable

# Copy static files to Nginx container
COPY public /usr/share/nginx/html

# Nginx service is running in port 80
EXPOSE 80