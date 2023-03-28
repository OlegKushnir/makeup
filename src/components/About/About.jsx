import app from '../App.module.css';

const About = () => {
  return (
    <section>
      <div className={app.wrapper}>
        <img className={app.imgWrapper} src="/makeup/about.jpg" alt="" />
      </div>
      <h2 className={app.section__title}>Kate Makhlai</h2>
      <div className={app.wrapper}>
        <article className={app.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, voluptas quo eveniet, repellat accusantium reiciendis ad
              facere alias recusandae incidunt rem consequuntur, laboriosam
              ipsam? Itaque error dolorum repudiandae magni quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              quo nam. Aspernatur, incidunt reprehenderit? Ratione, modi ipsam.
              Veniam harum voluptas eos ducimus, consequuntur eum at unde
              similique nesciunt. Excepturi, itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, voluptas quo eveniet, repellat accusantium reiciendis ad
              facere alias recusandae incidunt rem consequuntur, laboriosam
              ipsam? Itaque error dolorum repudiandae magni quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              quo nam. Aspernatur, incidunt reprehenderit? Ratione, modi ipsam.
              Veniam harum voluptas eos ducimus, consequuntur eum at unde
              similique nesciunt. Excepturi, itaque.
            </p>
          
        </article>
      </div>
    </section>
  );
};
export default About;
