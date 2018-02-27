FROM node:9.5.0
MAINTAINER Presslabs ping@presslabs.com

RUN echo "deb http://http.us.debian.org/debian unstable main non-free contrib" >> /etc/apt/sources.list \
    && echo "deb-src http://http.us.debian.org/debian unstable main non-free contrib" >> /etc/apt/sources.list \
    && apt-get update \
    && apt-get install -y fontforge=1:20170731~dfsg-1 ttfautohint=1.8.1-1 libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev \
    && npm install -g yarn