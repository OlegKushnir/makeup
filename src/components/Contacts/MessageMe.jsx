import { useState, useRef, useReducer } from 'react';
import app from '../App.module.css';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'email':
      return { ...state, email: action.value };
    case 'message':
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

const MessageMe = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [submitedForm, setSubmitedForm] = useState('');
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;

  const form = useRef();

  const submitForm = e => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = captchaValue => {
    const params = {
      ...formState,
      'g-recaptcha-response': captchaValue,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        params,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setSubmitedForm('Message sent. Kate will contact you soon.');
          } else {
            setSubmitedForm(
              'Unexpected status code returned from EmailJS, try again later or contact Kate using different method'
            );
          }
        },
        err => {
          console.log(err);
          setSubmitedForm(
            'Error sending message, try again later. Please contact Kate either by instagram or whatsapp.'
          );
        }
      );
  };

  return !submitedForm ? (
    <div className={app.message}>
      <h2 className={app.title}>Message Me</h2>
      {!showCaptcha ? (
        <form ref={form} onSubmit={submitForm}>
          <label>Name</label>
          <input
            id="form_name"
            type="text"
            value={name}
            onChange={e => dispatch({ type: 'name', value: e.target.value })}
            required
          />
          <label>Email</label>
          <input
            id="form_email"
            type="email"
            value={email}
            onChange={e => dispatch({ type: 'email', value: e.target.value })}
            required
          />
          <label>Message</label>
          <textarea
            id="form_message"
            value={message}
            onChange={e => dispatch({ type: 'message', value: e.target.value })}
            rows="6"
            cols="30"
            required
          ></textarea>

          <button type="submit">
          </button>
        </form>
      ) : (
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPCHA}
          onChange={sendEmail}
        />
      )}
    </div>
  ) : (
    <div className={app.message}>
      <h2 className={app.title}>{submitedForm}</h2>
    </div>
  );
};
export default MessageMe;
