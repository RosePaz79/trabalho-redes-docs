FROM python:3.8-slim

WORKDIR /app

COPY . /app

RUN pip install mkdocs

EXPOSE 8000

ENV MKDOCS_PORT=8000

CMD ["mkdocs", "serve", "--dev-addr=127.0.0.1:$MKDOCS_PORT"]
