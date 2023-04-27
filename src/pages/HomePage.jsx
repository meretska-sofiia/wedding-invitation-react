import Hero from 'components/Hero/Hero';
import Invitation from 'components/Invitation/Invitation';
import Timer from 'components/Timer/Timer';
import Map from 'components/Map/Map';
import Survey from 'components/Survey/Survey';
import DressCode from 'components/DressCode/DressCode';
import Gallery from 'components/Gallery/Gallery';
import Timing from 'components/Timing/Timing';
import Subscription from 'components/Subscription/Subscription';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Invitation />
      <Timer />
      <Map />
      <Survey />
      <DressCode />
      <Gallery />
      <Timing />
      <Subscription />
    </div>
  );
};

export default HomePage;
