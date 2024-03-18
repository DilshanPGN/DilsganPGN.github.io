import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <label htmlFor="">Your Name</label>
        <input type="text"></input>
        <label htmlFor="">Email</label>
        <input type="email"></input>
        <label htmlFor="">Subject</label>
        <input type="text"></input>
        <label htmlFor="">Message</label>
        <textarea rows="10" placeholder="Type Your Message Here."/>
        <button className="btn"> Submit </button>

    </div>
  )
}

export default Form
