const Card = ({ data }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${data.image})` }}>
      <p className="des">{data.description}</p>
      <div className="duration">
        <p className="Series">{data.series}</p>
        <p className="time">{data.time}</p>
      </div>
      <div className="progressBar">
        <div
          style={{ width: `${data.progressBar}` }}
          className="completeBar"
        ></div>
      </div>
    </div>
  );
};

export default Card;
