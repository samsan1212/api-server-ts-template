FROM node:14.15.1-alpine AS builder

WORKDIR /builder

ADD . .

# install yarn & python for node bcrypt package
RUN apk add --update yarn \
    python \
    python-dev \
    py-pip \
    build-base \
    && pip install virtualenv \
    && rm -rf /var/cache/apk/*

# install package and build file
RUN yarn && yarn build

FROM node:14.15.1-alpine as app

WORKDIR /app

COPY --from=builder /build/bin ./bin
COPY --from=builder /build/package.json ./package.json

# install yarn & python for node bcrypt package
RUN apk add --update yarn \
    python \
    python-dev \
    py-pip \
    build-base \
    && pip install virtualenv \
    && rm -rf /var/cache/apk/*

# install packages
RUN yarn

ENV NODE_ENV=production

CMD ["yarn", "start"]
