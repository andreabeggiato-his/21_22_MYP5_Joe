import HealthBar from './HealthBar';

const Character = (props) => {
  const { image, name } = props;

  return (
    <div>
      <HealthBar />
      <img src={image} alt={name} />
    </div>
  );
}

export default Character;
