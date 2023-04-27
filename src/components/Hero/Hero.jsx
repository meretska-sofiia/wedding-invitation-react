import heroIcon from 'images/hero-3.svg';
import css from './Hero.module.css';
import Container from 'components/Container/Container';

const Hero = () => {
  return (
    <div className={css.heroSection}>
      <Container>
        <img
          src={heroIcon}
          alt="Icon Hero"
          className={css.heroName}
          width={450}
        />
      </Container>
    </div>
  );
};

export default Hero;
