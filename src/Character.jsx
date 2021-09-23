import HealthBar from './HealthBar';

const Character = (props) => {
  const { image, name, totalHp, currentHp } = props;

  return (
    <div>
      <HealthBar
        totalHp={totalHp}
        currentHp={currentHp}
      />
      <img src={image} alt={name} />
    </div>
  );
}

export default Character;
