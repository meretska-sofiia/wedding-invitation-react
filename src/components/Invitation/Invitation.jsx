import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import branchIcon from 'images/branch-icon.svg';
import datePicker from 'images/date-picker.png';

import css from './Invitation.module.css';

const Invitation = ({ guestsNames }) => {
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
          <p className={css.invitationText}>Дорогі,</p>

          <p className={css.invitationName}>{guestsNames.join(', ')}</p>

          <p className={css.invitationText}>
            З радістю запрошуємо вас на наше весілля, яке відбудеться:
          </p>
          <img
            src={datePicker}
            alt="Date picker"
            className={css.datePicker}
            width={350}
          />

          <p className={css.invitationText}>
            І ми не уявляємо цей радісний день без вас - близьких і дорогих нам
            людей!
          </p>
        </Container>
      </Section>
      ;
    </>
  );
};

export default Invitation;
