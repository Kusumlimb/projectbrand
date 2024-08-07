import React from 'react'
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className='container ${styles.contact_section}'>
      <h1>CONTACT US</h1>
      <p>
        This is a simple contact page. We can provide
        many types of help according to your needs. Please
        feel free to contact us.
      </p>
    </div>
  )
}

export default ContactHeader
