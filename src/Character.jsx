const Character = (props) => {
  const { image, name } = props;

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
}

export default Character;
