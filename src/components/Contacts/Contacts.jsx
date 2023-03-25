import app from '../App.module.css';
import { NavLink } from 'react-router-dom';

const Contacts = () => {
  return (
    <>
      <section>
        <div className={app.contacts__wrapper}>
          <ul className={app.contacts}>
            <li className={app.contacts__item}>
              <NavLink to="/map" className={app.contacts__link}>
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#map"></use>
                </svg>
              </NavLink>
              <div>
                <h2 className={app.title}>Location</h2>
                <p className={app.text}>Makeup location</p>
              </div>
            </li>
            <li className={app.contacts__item}>
              <span className={app.contacts__link}>
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#clock"></use>
                </svg>
              </span>
              <div>
                <h2 className={app.title}>Working Hours</h2>
                <p className={app.text}>Monday to Friday 08:00 to 18:00</p>
                <p className={app.text}>Saturday: 10:00 - 14:00</p>
              </div>
            </li>
            <li className={app.contacts__item}>
              <a
                href="mailto:email@gmail.com"
                className={app.contacts__link}
                title="email"
              >
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#envelope"></use>
                </svg>
              </a>
              <div>
                <h2 className={app.title}>Message Us</h2>
                <p className={app.text}>email@gmail.com</p>
              </div>
            </li>
            <li className={app.contacts__item}>
              <a
                href="tel:+3801111111111"
                className={app.contacts__link}
                title="phone"
              >
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#phone-form"></use>
                </svg>
              </a>
              <div>
                <h2 className={app.title}>Book Makeup</h2>
                <p className={app.text}>(+38) 111 111 11 11</p>
              </div>
            </li>
          </ul>
          <div className={app.contacts}>
            <article className={app.text}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, voluptas quo eveniet, repellat accusantium reiciendis
                ad facere alias recusandae incidunt rem consequuntur, laboriosam
                ipsam? Itaque error dolorum repudiandae magni quos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quo nam. Aspernatur, incidunt reprehenderit? Ratione, modi
                ipsam. Veniam harum voluptas eos ducimus, consequuntur eum at
                unde similique nesciunt. Excepturi, itaque.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contacts;
