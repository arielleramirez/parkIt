import React, { Component } from "react";
import ParkingList from "./ParkingList";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import SearchBar from "./SearchBar";

const MainPage = props => {
  console.log(props);
  // state = {
  //   location: {
  //     lat: 51.505,
  //     lng: -0.09
  //   },
  //   haveUsersLocation: false,
  //   zoom: 1
  // };

  // const position = [props.location.lat, props.location.lng];
  return (
    <div>
      <SearchBar />
      {props.parkingData.map(park => {
        return (
          <ParkingList
            address={park.address}
            city={park.city}
            state={park.state}
            zip={park.zip}
            key={park.location_id}
          />
        );
      })}
    </div>
  );
};

export default MainPage;

// <Map className="map" center={position} zoom={props.zoom}>
// <TileLayer
// attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// />
// {props.haveUsersLocation ? (
//   <Marker position={position} icon={myIcon}>
//   <Popup>
//   A pretty CSS3 popup. <br /> Easily customizable.
//   </Popup>
//   </Marker>
// ) : (
//   "null"
// )}
// </Map>

// <SearchBar />
// {props.parkingData.map(park => {
//   return (
//     <ParkingList
//       address={park.address}
//       city={park.city}
//       state={park.state}
//       zip={park.zip}
//       key={park.location_id}
//     />
