FROM nginx

ADD website /usr/share/nginx/html
COPY nginx/main.conf /etc/nginx/conf.d/main.conf
RUN find /usr/share/nginx/html -type d -exec chmod 755 {} \;
RUN find /usr/share/nginx/html -type f -exec chmod 644 {} \;
