FROM centos:centos6

MAINTAINER brian.kirkland@live.com

# Copy app to /src
COPY . /src

EXPOSE 8080

CMD cd /src
