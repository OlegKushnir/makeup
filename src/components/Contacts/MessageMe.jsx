import { useState } from 'react';
import app from '../App.module.css';

const MessageMe = () => {
    // const [sentMessage, setSentMessage] = useState(false)
    const [disabled, setDisabled] = useState(false)

  const handleSubmit = () => {
    console.log('Sending message');
    // setSentMessage(true)
    setDisabled(true)
  };
  return (
    // sentMessage ? <h2 className={app.title}>Message Sent</h2> : 
    <div className={app.message}>
        {/* <div className={
            sentMessage ? app.message__animated : `${app.message__animated} ${app.show}`
          }> */}
            <h2 className={app.title}>Message Me</h2>
            <form  onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="email" name="email" required />
              <label>Message</label>
              <textarea name="message" rows="6" cols="30" required></textarea>
              <button type="submit" disabled={disabled}>{disabled ? "Message Sent" : "Send Message"}</button>
            </form>
          </div>
  );
};
export default MessageMe;
