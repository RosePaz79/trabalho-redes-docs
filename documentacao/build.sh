#!/bin/bash

## Cria a imagem
docker build -t rosealcantara/documentacao:0.1 .

## Define a nova imagem como latest
docker tag rosealcantara/documentacao:0.1 rosealcantara/documentacao


#Push das imagens para o Docker Hub
docker login
docker push rosealcantara/documentacao:0.1
docker push rosealcantara/documentacao
#docker logout