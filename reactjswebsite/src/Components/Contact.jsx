import React from 'react'
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <>
      <section id="contact">

        <h1 class="contact_heading">
          Get in Touch
        </h1>

        <form>
          <div class="contact_form">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email" required />
            <textarea cols="30" rows="6" placeholder="Write here..."></textarea>
            <button class="contact_button">Send</button>
          </div>
        </form>

      </section>

      <footer class="footer">
        © Copyright Obaid | All Rights Reserved
      </footer>

    </>


  )
}

export default Contact