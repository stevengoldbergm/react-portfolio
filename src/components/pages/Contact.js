import React from 'react';

export default function Contact() {
  return (
    <div className='container'>
      <h1>Contact Me!</h1>
      <form>
        <div className=" container d-flex flex-column mb-3">
          {/* First and Last name fields */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-sm">
              <label for="inputFirstName" className="form-label">First Name:</label>
              <input type="text" className="form-control" placeholder="First name" aria-label="First name" id="inputFirstName"/>
            </div>
            <div className="col-12 col-sm">
              <label for="inputLastName" className="form-label">Last Name:</label>
              <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id="inputLastName"/>
            </div>
          </div>
          {/* email entry */}
          <div className='mb-3'>
            <label for="inputEmail" className="form-label">Email address:</label>
            <input type="email" className="form-control" placeholder="Email@yourmail.com" id="inputEmail" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          {/* Comments Section */}
          <div className="mb-3">
            <label for="inputComments" className="form-label">Comments:</label>
            <textarea className="form-control" placeholder="Your comments" id="inputComments" rows="3"></textarea>
          </div>

          <button typeof='submit' className='btn btn-primary col-12 col-sm-6 align-self-center'>Submit</button>


        </div>
      </form>
    </div>
  );
}
