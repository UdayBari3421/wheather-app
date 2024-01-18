import React, { useState } from "react";
import "./style.css";

const App = () => {
  let [lat, setLat] = useState(0);
  let [long, setLong] = useState(0);
  let [sdate, setDate] = useState(() => {
    return new Date().getMonth() + 1;
  });

  function user() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      setDate(position.coords.sdate);
    });
  }

  return (
    <div>
      <h2>{lat}</h2>
      <h2>{long}</h2>
      <h2>{sdate}</h2>
      <button onClick={user}>button</button>
    </div>
  );
};

export default App;
