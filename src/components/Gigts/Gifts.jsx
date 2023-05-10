import Container from 'components/Container/Container';
import css from './Gifts.module.css';
import branchIcon from 'images/branch-icon.svg';

const Gifts = () => {
  return (
    <div className={css.giftSection}>
      <Container>
        <img
          src={branchIcon}
          alt="Branch"
          width="60"
          className={css.branchIcon}
        />
        <h2 className={css.giftTitle}>Нам не потрібно дарувати квіти!</h2>
        <p className={css.giftText}>
          Замість традиційних квітів, ми хотіли б попросити вас задонатити нашим
          військовим, які зробили можливим цей особливий день для нас.
          <br />
          На весіллі буде можливість зробити донат та ми з радістю розповімо про
          те, як це реалізувати.
        </p>
      </Container>
    </div>
  );
};

export default Gifts;
