// import { useState } from 'react';
import app from '../App.module.css';
import MessageMe from './MessageMe';

const Contacts = () => {
  // const [openMessage, setOpenMessage] = useState(false);
  // const handleSubmit = () => {
  //   console.log('Sending message');
  // };
  // const handleOpen = () => {
  //   setOpenMessage(!openMessage);
  //   setOpenMessage(true);

  // }
  return (
        <div className={app.contacts__wrapper}>
          <ul className={app.contacts}>
            <li className={app.contacts__item}>
              <div className={app.contacts__link}>
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#map"></use>
                </svg>
              </div>
              <div>
                <h2 className={app.title}>Location</h2>
                <p className={app.text}>London, UK</p>
              </div>
            </li>
            <li className={app.contacts__item}>
              <a
                href="mailto:email@gmail.com"
                className={app.contacts__link}
                title="email"
              >
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#alternate_email"></use>
                </svg>
              </a>
              <div>
                <h2 className={app.title}>Email</h2>
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
            {/* <li className={app.contacts__item} onClick={handleOpen}>
              <div className={app.contacts__link} id='message'>
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#envelope"></use>
                </svg>
              </div>
              {openMessage ? <MessageMe/> : <h2 className={app.title}>Message Me</h2>}
            </li> */}
          </ul>
          <MessageMe/>
          {/* <div className={app.message}>
            <h2 className={app.title}>Message Me</h2>
            <form  onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="email" name="email" required />
              <label>Message</label>
              <textarea name="message" rows="6" cols="30" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div> */}
        </div>
  );
};
export default Contacts;
