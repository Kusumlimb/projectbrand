import React from 'react'
import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'


const ContactForm = () => {
  return(
    <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT" icon={<MdMessage />}/>
      <Button text="VIA CALL" icon={<FaPhoneAlt />}/>
      </div>
      <Button
      isOutline={true}
      text="VIA EMAIL FORM" icon={<MdEmail />}/>
      <form>
        <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/> 
        </div>
        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/> 
        </div>
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea name="text" rows="8"/> 
        </div>
        <div style={{
          display:"flex",
          justifyContent:"end",
        }}>
        <Button text="SUBMIT"/>
        </div>
        
      </form>
    
    </div>
    <div className={styles.contact_image}>
      <img src="/images/contact.svg" alt="contact_image" />
    </div>


  </section>

  ) 
  
}

export default ContactForm
