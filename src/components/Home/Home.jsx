import About from 'components/About/About';
import app from '../App.module.css';
import { useInView } from 'react-intersection-observer';
import Faq from 'components/Faq/Faq';

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <div className={app.hero} aria-label="hero">
        <h2
          className={
            !inView ? app.hero__title : `${app.hero__title} ${app.show}`
          }
          ref={ref}
        >
          Kate Makhlai<span className={app.hero__sublogo}>makeup artist</span>
        </h2>
      </div>
      <div className={app.container}>
        <About/>
        <Faq/>
      </div>
    </>
  );
};
export default Home;
