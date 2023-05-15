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
              <h3 className={css.booking}>Contacts:</h3>
            </li>
            <li className={css.item}>
              <a className={css.contacts} href="tel:+381111111111">
                (+38) 111 111 11 11
              </a>
            </li>
            <li className={css.item}>
              <a className={css.contacts} href="tel:+382222222222">
                (+38) 222 222 22 22
              </a>
            </li>
            <li className={css.item}>
              <a className={css.contacts} href="mailto:email@gmail.com">
                email@gmail.com
              </a>
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
                    href="telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.social__link}
                    title="telegram"
                  >
                    <svg className="icon" width="25" height="25">
                      <use href="../../makeup/icons.svg#telegram"></use>
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
                <li className={css.social__item}>
                  <a
                    href="https://www.viber.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.social__link}
                    title="Viber"
                  >
                    <svg className="icon" width="27" height="27">
                      <use href="../../makeup/icons.svg#viber"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div
            className={app.location}
          ></div>
        </div>
      </div>
      <div className={css.copiright}>
        <p> Developed by Oleg Kushnir &#169;</p>
      </div>
    </footer>
  );
};
export default Footer;
