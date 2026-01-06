const Card = (props) => {
  return (
    <div className="card">
      <img src={props.elem.data.sprites.front_shiny} alt="" />
      <h2>{props.elem.data.species.name}</h2>
    </div>
  );
};

export default Card;
