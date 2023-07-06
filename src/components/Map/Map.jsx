import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';

import branchIcon from '../../images/branch-icon.svg';
import css from './Map.module.css';

const Map = () => {
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
          <h2 className={css.mapTitle}>ЦЕРЕМОНІЯ ТА БАНКЕТ</h2>
          <p className={css.mapAdress}>вул. Виноградна, Київ</p>
          <p className={css.mapAdress}>Osocor Restaurant</p>
          <p className={css.mapAdress}>Початок о 14:00</p>
          <PrimaryButton
            href={'https://goo.gl/maps/zTmQPoHecfJXfCXs9'}
            className={css.mapButton}
          >
            дивитись на мапі
          </PrimaryButton>
        </Container>
      </Section>
    </>
  );
};

export default Map;
