FROM node:20-alpine

RUN apk update && apk upgrade
RUN apk add shadow
RUN apk add bash

ENTRYPOINT [ "" ]

CMD echo "Server" && if [ -d /app/ ]; then cd /app; npm install; npm run start; fi
