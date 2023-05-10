import Container from 'components/Container/Container';
import branchIcon from 'images/branch-icon.svg';
import pinkColor from 'images/pink.png';
import goldColor from 'images/gold.png';
import roseColor from 'images/rose.png';
import whiteColor from 'images/white.png';

import css from './DressCode.module.css';

const DressCode = () => {
  return (
    <div className={css.dressCodeSection}>
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
        <div className={css.colorsWrapper}>
          <div className={css.colorWrapper}>
            <img
              src={pinkColor}
              alt=" "
              width={100}
              className={css.dressCodeColor}
            />
            <p className={css.colorDescription}>Малиновий</p>
          </div>
          <div className={css.colorWrapper}>
            <img
              src={roseColor}
              alt=" "
              width={100}
              className={css.dressCodeColor}
            />
            <p className={css.colorDescription}>Ніжно-рожевий</p>
          </div>
          <div className={css.colorWrapper}>
            <img
              src={whiteColor}
              alt=" "
              width={100}
              className={css.dressCodeColor}
            />
            <p className={css.colorDescription}>Білий</p>
          </div>
          <div className={css.colorWrapper}>
            <img
              src={goldColor}
              alt=" "
              width={100}
              className={css.dressCodeColor}
            />
            <p className={css.colorDescription}>Золотий</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DressCode;
