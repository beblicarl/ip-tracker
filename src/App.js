import { useEffect, useState } from "react/cjs/react.development";
import "./App.css";
import Header from "./components/Header";
import Location from "./components/Location";
import Map from "./components/Map";

function App() {
  const [tracker, setTracker] = useState(null);
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_Rt5mnqOpd18Iw6sjWKV7LZfqBAiwI`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTracker(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Header setTracker={setTracker} />
      <Location tracker={tracker} />
      <Map tracker={tracker} />
    </div>
  );
}

export default App;
