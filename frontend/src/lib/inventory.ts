import { api } from "~/utils/api";

export const COMPONENTS = [
  {
    id: "frame",
    name: "Frame",
    name_uppercase: "FRAME",
    componentAttributes: [
      { name: "frame_model_id", label: "Frame Model", type: "select" },
      { name: "frame_cost", label: "Frame Cost", type: "number" },
    ],
    model: "Frame",
    query: api.frame.read,
  },
  {
    id: "fc",
    name: "Flight Controller",
    name_uppercase: "FC",
    componentAttributes: [
      {
        name: "fc_model_id",
        label: "Flight Controller Model",
        type: "select",
      },
      {
        name: "fc_cost",
        label: "Flight Controller Cost",
        type: "number",
      },
    ],
    model: "Fc",
    query: api.fc.read,
  },
  {
    id: "motor",
    name: "Motor",
    name_uppercase: "MOTOR",
    componentAttributes: [
      { name: "motor_model_id", label: "Motor Model", type: "select" },
      { name: "motor_cost", label: "Motor Cost", type: "number" },
    ],
    model: "Motor",
    query: api.motor.read,
  },
  {
    id: "propeller",
    name: "Propeller",
    name_uppercase: "PROPELLER",
    componentAttributes: [
      {
        name: "propeller_model_id",
        label: "Propeller Model",
        type: "select",
      },
      { name: "propeller_cost", label: "Propeller Cost", type: "number" },
    ],
    model: "Propeller",
    query: api.propeller.read,
  },
  {
    id: "esc",
    name: "ESC",
    name_uppercase: "ESC",
    componentAttributes: [
      { name: "esc_model_id", label: "ESC Model", type: "select" },
      { name: "esc_cost", label: "ESC Cost", type: "number" },
    ],
    model: "ESC",
    query: api.esc.read,
  },
  {
    id: "rx",
    name: "Receiver",
    name_uppercase: "RECEIVER",
    componentAttributes: [
      { name: "rx_model_id", label: "Receiver Model", type: "select" },
      { name: "rx_cost", label: "Receiver Cost", type: "number" },
    ],
    model: "Rx",
    query: api.rx.read,
  },
  {
    id: "camera",
    name: "Camera",
    name_uppercase: "CAMERA",
    componentAttributes: [
      { name: "camera_model_id", label: "Camera Model", type: "select" },
      { name: "camera_cost", label: "Camera Cost", type: "number" },
    ],
    model: "Camera",
    query: api.camera.read,
  },
  {
    id: "vtx",
    name: "VTX",
    name_uppercase: "VTX",
    componentAttributes: [
      { name: "vtx_model_id", label: "VTX Model", type: "select" },
      { name: "vtx_cost", label: "VTX Cost", type: "number" },
    ],
    model: "VTX",
    query: api.vtx.read,
  },
  {
    id: "antenna",
    name: "Antenna",
    name_uppercase: "ANTENNA",
    componentAttributes: [
      { name: "antenna_model_id", label: "Antenna Model", type: "select" },
      { name: "antenna_cost", label: "Antenna Cost", type: "number" },
    ],
    model: "Antenna",
    query: api.antenna.read,
  },
  {
    id: "gps",
    name: "GPS",
    name_uppercase: "GPS",
    componentAttributes: [
      { name: "gps_model_id", label: "GPS Model", type: "select" },
      { name: "gps_cost", label: "GPS Cost", type: "number" },
    ],
    model: "GPS",
    query: api.gps.read,
  },
  {
    id: "buzzer",
    name: "Buzzer",
    name_uppercase: "BUZZER",
    componentAttributes: [
      { name: "buzzer_model_id", label: "Buzzer Model", type: "select" },
      { name: "buzzer_cost", label: "Buzzer Cost", type: "number" },
    ],
    model: "Buzzer",
    query: api.buzzer.read,
  },
  {
    id: "barometer",
    name: "Barometer",
    name_uppercase: "BAROMETER",
    componentAttributes: [
      {
        name: "barometer_model_id",
        label: "Barometer Model",
        type: "select",
      },
      { name: "barometer_cost", label: "Barometer Cost", type: "number" },
    ],
    model: "Barometer",
    query: api.barometer.read,
  },
  {
    id: "battery",
    name: "Battery",
    name_uppercase: "BATTERY",
    componentAttributes: [
      { name: "battery_model_id", label: "Battery Model", type: "select" },
      { name: "battery_cost", label: "Battery Cost", type: "number" },
    ],
    model: "Battery",
    query: api.battery.read,
  },
  {
    id: "transmitter",
    name: "Transmitter",
    name_uppercase: "TRANSMITTER",
    componentAttributes: [
      {
        name: "transmitter_model_id",
        label: "Transmitter Model",
        type: "select",
      },
      { name: "transmitter_cost", label: "Transmitter Cost", type: "number" },
    ],
    model: "Transmitter",
    query: api.transmitter.read,
  },
];
