FROM public.ecr.aws/docker/library/python:3.8

# copy assets over to image
COPY /src /logistics_demand_forecasting

# set the working directory
WORKDIR /logistics_demand_forecasting

# install dependancies
RUN pip3 install --user --no-cache-dir -r requirements.txt

# set PATH
ENV PATH=.local/bin:$PATH

# exposing endpoint port
EXPOSE 5001

ENTRYPOINT ["python", "serve.py"]