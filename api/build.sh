#!/bin/bash

## Cria a imagem
docker build -t rosealcantara/api:0.1 .

## Define a nova imagem como latest
docker tag rosealcantara/api:0.1 rosealcantara/api


#Push das imagens para o Docker Hub
docker login
docker push rosealcantara/api:0.1
docker push rosealcantara/api
#docker logout