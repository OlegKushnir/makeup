import app from '../App.module.css';
import { Carousel } from 'react-responsive-carousel';

const About = () => {
  return (
    <section className={app.about}>
      <div className={app.wrapper}>
        <div className={app.imgWrapper}>
          <Carousel
            autoPlay
            showArrows={false}
            interval={10000}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            transitionTime={2000}
            stopOnHover={false}
            swipeable={false}
          >
            <div>
              <img src="/makeup/about1_d.jpg" alt="" />
            </div>
            <div>
              <img src="/makeup/about2_d.jpg" alt="" />
            </div>
            <div>
              <img src="/makeup/about3_d.jpg" alt="" />
            </div>
          </Carousel>
        </div>
        <h2 className={app.section__title}>About me</h2>
        <article className={app.text}>
          <p>
            Dears, here I want to tell you a little about myself and how I got
            to where I am now.
          </p>
          <p>
            The start of my makeup career dates back to 2010, when, being a
            student of the Faculty of Philology, I worked as a fire show artist
            and spent most of the money on cosmetics and good makeup courses
          </p>
          <p>
            In 2012 I started teaching, and in 2013 I opened my makeup school
          </p>
          <p>
            The school lasted until 2022, had three teachers, an administrator,
            two basic makeup courses, one browist course, course of makeup for
            myself and advanced training for working make-up artists
          </p>
          <p>
            I have been based in London since 2022 and enjoy working with
            clients. I do makeup and hair, but also with great pleasure I will
            give you a personal makeup lesson and help with the selection of
            cosmetics
          </p>
          <p>
            I love working with people and I am sure you will enjoy working with
            me.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
