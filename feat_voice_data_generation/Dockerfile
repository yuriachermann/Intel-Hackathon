FROM python:3.9.12-slim-buster

MAINTAINER yuriachermann

WORKDIR /code

RUN apt-get update && \
    apt-get clean

COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

# exposing endpoint port
EXPOSE 5004

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5004"]