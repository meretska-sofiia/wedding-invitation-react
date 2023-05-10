import heroIcon from 'images/hero-3.svg';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.heroSection}>
      <img
        src={heroIcon}
        alt="Icon Hero"
        className={css.heroName}
        width={450}
      />
    </div>
  );
};

export default Hero;
