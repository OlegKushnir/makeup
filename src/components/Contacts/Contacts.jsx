import app from '../App.module.css';
import MessageMe from './MessageMe';

const Contacts = () => {

  return (
    <div className={app.contacts__wrapper}>
      <ul className={app.contacts}>
        <li className={app.contacts__item}>
          <div className={app.contacts__link}>
            <svg className={app.icon} width="30" height="30">
              <use href="icons.svg#map"></use>
            </svg>

            <div className={app.text}>
              <h2 className={app.title}>Location</h2>
              <p>London, UK</p>
            </div>
          </div>
        </li>

        <li className={app.contacts__item}>
          <a
            href="https://instagram.com/kate_makhlai?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            className={app.contacts__link}
            title="instagram"
          >
            <svg className={app.icon} width="30" height="30">
              <use href="icons.svg#instagram"></use>
            </svg>
            <div className={app.text}>
              <h2 className={app.title}>Instagram</h2>
            </div>
          </a>
        </li>

        <li className={app.contacts__item}>
          <a
            href="whatsapp://send?phone=+447884456842"
            target="_blank"
            rel="noopener noreferrer"
            className={app.contacts__link}
            title="WhatsApp"
          >
            <svg className={app.icon} width="40" height="40">
              <use href="icons.svg#whatsapp"></use>
            </svg>
            <div className={app.text}>
              <h2 className={app.title}>WhatsApp</h2>
            </div>
          </a>
        </li>
      </ul>
      <MessageMe />
    </div>
  );
};
export default Contacts;
