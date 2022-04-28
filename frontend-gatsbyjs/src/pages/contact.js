import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
    <Seo title='Contact'/>
      <dection className="contact-page">
        <article className="contact-form">
          <h3>Get In Touch</h3>
          <form
              action="https://formspree.io/f/xrgjalez"
              method="POST" >
            <div className="form-group">
              <input type="text" name="name" placeholder='name' className='form-control' />
              <input type="email" name="email" placeholder='email' className='form-control' />
              <textarea name="message" rows="5" placeholder='message' className='form-control'>

              </textarea>
            </div>
            <button type='submit' className='submit-btn btn'>
              submit here
            </button>
          </form>
        </article>
      </dection>
    </>
  )
}

export default contact
