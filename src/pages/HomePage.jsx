import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { guestInfoThunk } from 'redux/guestOperations';
import { guests } from 'redux/guestSelectors';

import Hero from 'components/Hero/Hero';
import Invitation from 'components/Invitation/Invitation';
import Timer from 'components/Timer/Timer';
import Map from 'components/Map/Map';
import Survey from 'components/Survey/Survey';
import DressCode from 'components/DressCode/DressCode';

import Timing from 'components/Timing/Timing';
import Subscription from 'components/Subscription/Subscription';
import Gifts from 'components/Gigts/Gifts';
import Carousel from 'components/Carousel/Carousel';
import css from './HomePage.module.css';
const HomePage = () => {
  const dispatch = useDispatch();
  const guestNames = useSelector(guests);

  useEffect(() => {
    dispatch(guestInfoThunk());
  }, [dispatch]);
  if (!guestNames) {
    return null;
  }
  const { guest1, guest2, guest3, guest4 } = guestNames;

  const names = [guest1, guest2, guest3, guest4].filter(Boolean);

  return (
    <div className={css.pageContainer}>
      <Hero />
      <Invitation guestsNames={names} />
      <Timer />
      <Map />
      <Survey />
      <DressCode />

      <Carousel />
      <Timing />
      <Gifts />
      <Subscription />
    </div>
  );
};

export default HomePage;
