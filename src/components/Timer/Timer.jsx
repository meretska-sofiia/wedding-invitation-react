import React, { useState, useEffect, useCallback } from 'react';
import css from './Timer.module.css';

import Container from 'components/Container/Container';

const initialTimer = {
  daysLeft: 0,
  hoursLeft: 0,
  minutesLeft: 0,
  secondsLeft: 0,
};

const Timer = () => {
  const [timer, setTimer] = useState(initialTimer);

  function updateTimer(timeLeft) {
    if (timeLeft < 0) {
      console.log('Дата уже прошла');
      clearInterval(timer);
      return;
    }

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    timeLeft -= daysLeft * (1000 * 60 * 60 * 24);

    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    timeLeft -= hoursLeft * (1000 * 60 * 60);

    const minutesLeft = Math.floor(timeLeft / (1000 * 60));
    timeLeft -= minutesLeft * (1000 * 60);

    const secondsLeft = Math.floor(timeLeft / 1000);

    setTimer(prev => ({
      ...prev,
      daysLeft,
      hoursLeft,
      minutesLeft,
      secondsLeft,
    }));
  }

  const memoizedUpdateTimer = useCallback(
    updateTimer,
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    let timerId;
    function startTimer(endDate) {
      const targetDate = new Date(endDate);
      const timeLeft = targetDate - new Date();
      updateTimer(timeLeft);
      timerId = setInterval(() => {
        const timeLeft = targetDate - new Date();
        updateTimer(timeLeft);
      }, 1000);
    }
    if (!timerId) {
      startTimer('2023-08-18 12:00');
    }
    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line
  }, [memoizedUpdateTimer]);

  return (
    <>
      <div className={css.timerSection}>
        <Container>
          <div className={css.timer}>
            <div className={css.timerContainer}>
              <span className={css.timerNumber} id="days">
                {timer.daysLeft}
              </span>
              <p className={css.timerText}>Днів</p>
            </div>
            <div className={css.timerContainer}>
              <span className={css.timerNumber} id="hours">
                {timer.hoursLeft}
              </span>
              <p className={css.timerText}>Годин</p>
            </div>
            <div className={css.timerContainer}>
              <span className={css.timerNumber} id="minutes">
                {timer.minutesLeft}
              </span>
              <p className={css.timerText}>Хвилин</p>
            </div>
            <div className={css.timerContainer}>
              <span className={css.timerNumber} id="seconds">
                {timer.secondsLeft}
              </span>
              <p className={css.timerText}>Секунд</p>
            </div>
          </div>
          <p className={css.timerTitle}>...і ми будемо одружені!</p>
        </Container>
      </div>
    </>
  );
};

export default Timer;
