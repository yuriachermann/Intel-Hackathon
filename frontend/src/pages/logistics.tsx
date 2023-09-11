import axios from "axios";
import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import Layout from "../components/layout/Layout";
import type { MapRef } from "react-map-gl";
import Map from "react-map-gl";

function Logistics() {
  const [city, setCity] = React.useState("");
  const [lat, setLat] = React.useState(0);
  const [lon, setLon] = React.useState(0);

  const mapRef = useRef<MapRef | null>(null);

  const fetchLocation = async () => {
    const apiURL = "https://ipgeolocation.abstractapi.com/v1/";
    const apiKey = process.env.NEXT_PUBLIC_ABSTRACT_TOKEN;

    try {
      const response = await axios.get(apiURL, {
        params: { api_key: apiKey },
      });
      if (response.data.city) {
        setCity(response.data.city);
        setLat(response.data.latitude);
        setLon(response.data.longitude);
      }
    } catch (error: any) {
      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        error.response.status === 429
      ) {
        console.error("Rate limit reached. Try again later.");
      } else {
        console.error("There was an error fetching the data:", error);
      }
    }
  };

  useEffect(() => {
    const fetchDataAndFly = async () => {
      await fetchLocation();
      setTimeout(() => {
        mapRef.current?.flyTo({
          center: [lon, lat],
          zoom: 11,
          duration: 2000,
        });
      }, 0);
    };

    fetchDataAndFly();
  }, [city]);

  const handleDetect = async () => {

    const DATA = {
      keras_saved_model_dir: './store/models/feat_logistics_demand_forecasting/model.pb',
      output_saved_dir: './store/models/feat_logistics_demand_forecasting/model.pb',
      input_file: './store/datasets/feat_logistics_demand_forecasting/test.csv',
      results_save_dir: './store/outputs/feat_logistics_demand_forecasting/',
      window: 'demand forecaster window',
      lag_size: 'demand forecaster lag window',
      batch_size: 'demand forecaster batch',
      num_iters: 'demand forecaster iterations'
    };

    try {
      const response = await axios.post(
        `http://localhost:5001/predict`,
        DATA
      );
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed running endpoint");
    }
  };

  handleDetect();

  return (
    <Layout>
      <main className="grow">
        <div className="flex items-center justify-center">
          <div className="flex basis-1/2 flex-col items-center justify-center"></div>
          <div className="h-[75vh] w-full basis-1/2">
            <Map
              ref={mapRef}
              initialViewState={{
                latitude: 0,
                longitude: 0,
                zoom: 1,
                bearing: 0,
                pitch: 0,
              }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            ></Map>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Logistics;
