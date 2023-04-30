import Section from 'components/Section/Section';
import Container from 'components/Container/Container';

import branchIcon from 'images/branch-icon.svg';
import timingPhoto from 'images/timing.jpg';
import css from './Timing.module.css';

const Timing = () => {
  return (
    <>
      <Section>
        <Container>
          <img
            src={branchIcon}
            alt="Branch"
            width="60"
            className={css.branchIcon}
          />
          <h2 className={css.timingTitle}>Таймінг дня</h2>
          <div className={css.timingContainer}>
            <div className={css.timingWrapper}>
              <p className={css.time}>12:00</p>
              <p className={css.timingDescription}>Збір гостей</p>
            </div>
            <div className={css.timingWrapper}>
              <p className={css.time}>13:00</p>
              <p className={css.timingDescription}>Церемонія</p>
            </div>
            <div className={css.timingWrapper}>
              <p className={css.time}>13:30</p>
              <p className={css.timingDescription}>Фотосесія з гостями</p>
            </div>
            <div className={css.timingWrapper}>
              <p className={css.time}>14:00</p>
              <p className={css.timingDescription}>Банкет</p>
            </div>
            <div className={css.timingWrapper}>
              <p className={css.time}>15:30</p>
              <p className={css.timingDescription}>Танок молодят</p>
            </div>
            <div className={css.timingWrapper}>
              <p className={css.time}>20:00</p>
              <p className={css.timingDescription}>Весільний торт</p>
            </div>
            <div className={css.timingWrapper}>
              <p className={css.time}>21:00</p>
              <p className={css.timingDescription}>Happy End</p>
            </div>
          </div>
        </Container>
        <img src={timingPhoto} alt="two people" className={css.timingPhoto} />
      </Section>
    </>
  );
};

export default Timing;
