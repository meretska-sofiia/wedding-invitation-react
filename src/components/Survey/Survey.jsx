import Container from 'components/Container/Container';
import SecondaryButton from 'components/SecondaryButton/SecondaryButton';

import css from './Survey.module.css';

const Survey = () => {
  return (
    <div className={css.surveySection}>
      <Container>
        <h2 className={css.surveyTitle}>
          Чи зможете ви приєднатись <br />
          до святкування разом з нами?
        </h2>
        <div className={css.questResponse}>
          <p className={css.questName}>Olexandr</p>
          <div className={css.buttonWrapper}>
            <SecondaryButton
              text="Так"
              className={`${css.firstSurveyButton}`}
            />
            <SecondaryButton
              text="Ні"
              className={`${css.firstSurveyButton} ${css.active}`}
            />
          </div>
        </div>
        <div className={css.questResponse}>
          <p className={css.questName}>Lina</p>
          <div className={css.buttonWrapper}>
            <SecondaryButton
              text="Так"
              className={`${css.firstSurveyButton}`}
            />
            <SecondaryButton
              text="Ні"
              className={`${css.firstSurveyButton} ${css.active}`}
            />
          </div>
        </div>
        <p className={css.questResponsePS}>
          Прохання повідомити про присутність до 10-го липня 2023 року
        </p>
      </Container>
    </div>
  );
};

export default Survey;
