import './styles/healthBar.css';

const HealthBar = (props) => {
  const { totalHp, currentHp } = props;

  let percent = (currentHp / totalHp) * 100;
  let backgroundColor = 'green';

  if (percent <= 50) {
    backgroundColor = 'yellow';
  }

  if (percent <= 20) {
    backgroundColor = 'red';
  }

  const style = {
    width: percent + '%',
    backgroundColor: backgroundColor,
  };

  return (
    <div
      className='healthBarContainer'
    >
      <div
        className="healtBarContent healtBarColorTransition"
        style={style}
      />
    </div>
  );
};

export default HealthBar;