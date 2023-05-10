import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';

import css from './Subscription.module.css';
import subscriptionPhoto from 'images/subscription.jpg';
import sprite from 'images/symbol-defs.svg';

const Subscription = () => {
  return (
    <>
      <Section>
        <Container>
          <img
            src={subscriptionPhoto}
            alt="two people"
            className={css.subscriptionPhoto}
          />
          <p className={css.subscriptionText}>
            Для швидкого обміну інформацією, фото та відео між нашими гостями ми
            створили групу в Telegram
          </p>
          <PrimaryButton
            href="https://t.me/+YKg7XKi7T7IzZjMy"
            text={'приєднатися'}
            className={css.subscriptionButton}
          >
            приєднатися
            <svg width={25} height={25} className={css.subscriptionIcon}>
              <use href={`${sprite}#icon-telegram`}></use>
            </svg>
          </PrimaryButton>
        </Container>
      </Section>
    </>
  );
};

export default Subscription;
