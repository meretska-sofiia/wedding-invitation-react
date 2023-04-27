import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import branchIcon from 'images/branch-icon.svg';

import css from './DressCode.module.css';

const DressCode = () => {
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
          <h2 className={css.dressCodeTitle}>DRESS-CODE</h2>
          <p className={css.dressCodeDescription}>
            Будемо вдячні, якщо ви підтримаєте кольорову гаму нашого весілля.
          </p>
          <p className={css.dressCodeDescription}>Чорний, білий, бежевий.</p>
          <div className={css.colorsWrapper}>
            <div className={`${css.color} ${css.black}`}></div>
            <div className={`${css.color} ${css.white}`}></div>
            <div className={`${css.color} ${css.beige}`}></div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default DressCode;
