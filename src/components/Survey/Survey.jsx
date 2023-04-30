import { useState, useEffect } from 'react';
import Container from 'components/Container/Container';
import SecondaryButton from 'components/SecondaryButton/SecondaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { guests } from 'redux/guestSelectors';
import { willComeThunk } from 'redux/guestOperations';

import css from './Survey.module.css';

const Survey = () => {
  const guestsInfo = useSelector(guests);
  const [guestsState, setGuestsState] = useState([
    { id: 'willCome1', guest: '', willCome: false },
    { id: 'willCome2', guest: '', willCome: false },
    { id: 'willCome3', guest: '', willCome: false },
    { id: 'willCome4', guest: '', willCome: false },
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (guestsInfo) {
      setGuestsState([
        {
          id: 'willCome1',
          guest: guestsInfo.guest1,
          willCome: guestsInfo.willCome1,
        },
        {
          id: 'willCome2',
          guest: guestsInfo.guest2,
          willCome: guestsInfo.willCome2,
        },
        {
          id: 'willCome3',
          guest: guestsInfo.guest3,
          willCome: guestsInfo.willCome3,
        },
        {
          id: 'willCome4',
          guest: guestsInfo.guest4,
          willCome: guestsInfo.willCome4,
        },
      ]);
    }
  }, []);

  const handleWillCome = async id => {
    try {
      const guestIndex = guestsState.findIndex(guest => guest.id === id);
      guestsState[guestIndex].willCome = true;
      setGuestsState([...guestsState]);
      console.log(guestsState);

      if (guestsState[guestIndex].willCome) {
        await dispatch(
          willComeThunk({
            [guestsState[guestIndex].id]: guestsState[guestIndex]?.willCome,
            userId: '644b820456a34a61c04de710',
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleWontCome = async id => {
    try {
      const guestIndex = guestsState.findIndex(guest => guest.id === id);
      guestsState[guestIndex].willCome = false;
      setGuestsState([...guestsState]);
      console.log(guestsState);
      if (!guestsState[guestIndex].willCome) {
        await dispatch(
          willComeThunk({
            [guestsState[guestIndex].id]: guestsState[guestIndex]?.willCome,
            userId: '644b820456a34a61c04de710',
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.surveySection}>
      <Container>
        <h2 className={css.surveyTitle}>
          Чи зможете ви приєднатись <br />
          до святкування разом з нами?
        </h2>
        {guestsState.map(guest => {
          if (guest.guest) {
            return (
              <div key={guest.id} className={css.questResponse}>
                <p className={css.questName}>{guest.guest}</p>

                {!guest.willCome ? (
                  <div className={css.buttonWrapper}>
                    <SecondaryButton
                      onClick={() => handleWillCome(guest?.id)}
                      text="Так"
                      className={`${css.firstSurveyButton}`}
                    />
                    <SecondaryButton
                      onClick={() => handleWontCome(guest.id)}
                      text="Ні"
                      className={`${css.firstSurveyButton} ${css.active}`}
                    />
                  </div>
                ) : (
                  <div className={css.buttonWrapper}>
                    <SecondaryButton
                      onClick={() => handleWillCome(guest.id)}
                      text="Так"
                      className={`${css.firstSurveyButton} ${css.active}`}
                    />
                    <SecondaryButton
                      onClick={() => handleWontCome(guest.id)}
                      text="Ні"
                      className={`${css.firstSurveyButton} `}
                    />{' '}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}

        <p className={css.questResponsePS}>
          Прохання повідомити про присутність до 10-го липня 2023 року
        </p>
      </Container>
    </div>
  );
};

export default Survey;
