import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
}));

// initial location on map
const position = [-43.5321, 172.6362];
const locations = [
  {
    title: "Location 1",
    description: "Description of location 1.",
    coordinates: [-43.531, 172.6392],
  },
  {
    title: "Location 2",
    description: "Description of location 2.",
    coordinates: [-43.532, 172.6352],
  },
  {
    title: "Location 3",
    description: "Description of location 3.",
    coordinates: [-43.533, 172.6312],
  },
  {
    title: "Location 4",
    description: "Description of location 4.",
    coordinates: [-43.534, 172.6342],
  },
  {
    title: "Location 5",
    description: "Description of location 5.",
    coordinates: [-43.535, 172.6352],
  },
];

const CustomMap = () => {
  const classes = useStyles();

  return (
    <Map center={position} zoom={13} className={classes.root}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((item) => (
        <Marker position={item.coordinates}>
          <Popup>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default CustomMap;
