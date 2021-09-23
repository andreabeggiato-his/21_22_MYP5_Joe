import './styles/healthBar.css';

const HealthBar = (props) => {
  const { totalHp, currentHp } = props;

  const percent = (currentHp / totalHp) * 100;

  const style = {
    width: percent + '%',
  };

  return (
    <div
      className='healthBarContainer'
    >
      <div
        className="healtBarContent"
        style={style}
      />
    </div>
  );
};

export default HealthBar;