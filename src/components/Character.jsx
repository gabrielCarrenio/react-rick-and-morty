function Character({ id, name, image, origin }) {
  return (
    <div key={id} className="text-center p-5">
      <h3>{name}</h3>
      <img className="img-fluid rounded-pill" src={image} alt={name} />
      <p>{origin.name}</p>
    </div>
  );
}

export default Character;
