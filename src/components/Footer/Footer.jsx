import css from './Footer.module.css';
import app from '../App.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={app.container}>
        <div className={css.wrapper}>
          <ul className={css.contactsList}>
            <li className={css.logoItem}>
              <span className={app.logo}>Kate Makhlai</span>
            </li>

            <li className={css.item}>
              <h3 className={css.contacts}>Location:</h3>
              <p className={css.contacts}>London, UK</p>
            </li>
            <li>
              <ul className={css.social}>
                <li className={css.social__item}>
                  <a
                    href="https://instagram.com/kate_makhlai?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.social__link}
                    title="instagram"
                  >
                    <svg className="icon" width="20" height="20">
                      <use href="../../makeup/icons.svg#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className={css.social__item}>
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.social__link}
                    title="WhatsApp"
                  >
                    <svg className="icon" width="30" height="30">
                      <use href="../../makeup/icons.svg#whatsapp"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className={app.location}></div>
        </div>
      </div>
      <div className={css.copiright}>
        <p>
          Developed by{' '}
          <a className={css.contacts} href="https://www.instagram.com/oleg_kushnir.js/">
            Oleg Kushnir
          </a>
          {' '}&#169;
        </p>
        <a
          className={css.atr}
          href="https://www.flaticon.com/free-icons/makeup"
          title="makeup icons"
        >
          Makeup icons created by Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
};
export default Footer;
