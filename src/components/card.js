function Card({ name, number, handleClick }) {
  return (
    <button onClick={handleClick} name={name} className="card">
      {name} {number}
    </button>
  );
}

export default Card;
