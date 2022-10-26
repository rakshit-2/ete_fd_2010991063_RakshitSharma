import './index.css';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import feedback1 from './../../assets/images/feedback1.jpg';
import feedback2 from './../../assets/images/feedback2.jpg';
import feedback_icon from './../../assets/icon/feedback.svg';

const HomeSectionFeedback = (props) => 
{

  const[messageCount,setMessageCount]=useState({
                                                prev:"block",
                                                new:"none",
  });
  const[feedbackCount,setFeedbackCount]=useState({
                                                prev:"block",
                                                new:"none",
});

  const sendEmailMessage = (e) => {
    setMessageCount({prev:"none",new:"block"});
    e.preventDefault();

    emailjs.sendForm('service_gxw1i1n', 'template_56ak8if', e.target, 'm9zEe7gyayQtF5mLB')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  };

  const sendEmailFeedback = (e) => {
    setFeedbackCount({prev:"none",new:"block"});
    e.preventDefault();

    emailjs.sendForm('service_gxw1i1n', 'template_xwjzxm6', e.target, 'm9zEe7gyayQtF5mLB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  if(props.flag===1)
  {
    return (
    
      <>
        <div className="feedback__section">

          <div className="feedback__section__create">
            <div className="feedback__section__image">
              <img src={feedback1} className="feedback_img" alt=""/>
            </div>
            <div className="create">       
              <div className='feedback__heading'>Your Feedback will help us improve a lot !</div>
              <form onSubmit={sendEmailFeedback} style={{display:feedbackCount.prev}}>
                <label className='label__email'>Email:</label>
                <input type="email" name='email' placeholder='abc@gmail.com' required />
                <label className='label__feedback'>Give your Feedback:</label>
                <textarea name="feedback" required placeholder='feedback here..'></textarea>
                <button type="submit" className='feedback__button'>Send Feedback{'\u00A0'}{'\u00A0'}<img alt="" src={feedback_icon} className="feedbackIcon__css"/></button>
              </form>
              <form style={{display:feedbackCount.new}}>
                <label className='label__email'>Email:</label>
                <input type="email" name='email' required placeholder='Email sent' />
                <label className='label__feedback'>Give your Feedback:</label>
                <textarea name="feedback" placeholder='Feedback already sent' required></textarea>
                <button type="button" className='feedback__button' style={{cursor:"not-allowed"}}>Feedback Sent{'\u00A0'}{'\u00A0'}<img alt="" src={feedback_icon} className="feedbackIcon__css"/></button>
              </form>
            </div>
          </div>
          
        </div>
  
      </>
    );
  }
  else
  {
    return(
    <>
        <div className="feedback__section">
          
        <div className="feedback__section__suggestion">
          <div className="suggestion">
            <div className="suggestion__heading">What do you want us to provide you with? </div>
            <form onSubmit={sendEmailMessage} style={{display:messageCount.prev}}>
              <label className="suggestion__label">Anonymous suggestion (privacy respected) :</label>
              <textarea className="suggestion__textarea" name="message" placeholder='suggestion here..' required></textarea>
              <button type="submit" className='suggestion__button'>Send Message{'\u00A0'}{'\u00A0'}<img src={feedback_icon} className="feedbackIcon__css" alt=""/></button>
            </form>
            <form style={{display:messageCount.new}}>
              <label className="suggestion__label">Provide me with:</label>
              <textarea className="suggestion__textarea" name="message" placeholder='message already sent' required></textarea>
              <button type="button" className='suggestion__button' style={{cursor:"not-allowed"}}>Message Sent{'\u00A0'}{'\u00A0'}<img alt="" src={feedback_icon} className="feedbackIcon__css"/></button>
            </form>
          </div>
          <div className="feedback__section__image">
            <img src={feedback2} className="feedback_img" alt=""/>
          </div>
        </div>
          
        </div>
  
      </>
    );
  }
  
}

export default HomeSectionFeedback;