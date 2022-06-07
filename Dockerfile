FROM golang:1.18.3-alpine AS builder


WORKDIR /usr/src/app

COPY . .

RUN go build

FROM scratch

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/hello-fullcycle .


ENTRYPOINT [ "./hello-fullcycle" ]