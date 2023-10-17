#!/bin/bash

## Cria a imagem
docker build -t rosealcantara/front:0.1 .

## Define a nova imagem como latest
docker tag rosealcantara/front:0.1 rosealcantara/front


#Push das imagens para o Docker Hub
docker login
docker push rosealcantara/front:0.1
docker push rosealcantara/front
#docker logout