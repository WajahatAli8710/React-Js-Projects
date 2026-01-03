const Card = (props) => {
  const { idx, elem, deleteHandler } = props;
  return (
    <div className="card">
      <img src={elem.imageUrl} alt="" />
      <h2>{elem.name}</h2>
      <p className="role">{elem.role}</p>
      <p>{elem.des}</p>
      <button
      className="deleteBtn"
        onClick={() => {
          deleteHandler(idx);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
