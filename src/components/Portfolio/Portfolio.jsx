import app from '../App.module.css';
import Brides from 'components/Brides/Brides';
import Photoshoots from 'components/Photoshoots/Photoshoots';
import Clients from 'components/Clients/Clients';

const Portfolio = () => {
  return (
    <section className={app.portfolio}>
      <Brides/>
      <Photoshoots/>
      <Clients/>
    </section>
  );
};
export default Portfolio;
