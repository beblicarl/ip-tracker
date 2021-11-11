import "../Location/location.styles.css";

const Location = ({ tracker }) => {
  console.log(tracker?.location.lat, "1111111111111111111111111111111111111");
  console.log(tracker?.location.lng);
  return (
    <div className="location">
      <div>
        <h6> IP ADDRESS</h6>
        <h2>{tracker?.ip}</h2>
      </div>
      <div>
        <h6> LOCATION</h6>
        <h2>{tracker && tracker.location && tracker.location.city}</h2>
      </div>
      <div>
        <h6> TIME ZONE</h6>
        <h2>{tracker && tracker.location && tracker.location.timezone}</h2>
      </div>
      <div>
        <h6> ISP</h6>
        <h2>{tracker?.isp}</h2>
      </div>
    </div>
  );
};

export default Location;
