import { useState } from "react/cjs/react.development";
import "./Header.styles.css";

const Header = ({ tracker, setTracker }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      fetch(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_GEOLOCATION_API}&ipAddress=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTracker(data);
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <div className="header">
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search your ip address"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <i class="fas fa-angle-right"></i>
        </button>
      </form>
    </div>
  );
};
export default Header;
