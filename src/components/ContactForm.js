import React, { useState } from 'react';

// Create a helper to validate email syntax
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}   

function Form() {
  // Create state variables for the fields in the form
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [comments, setComments] = useState('');


  const handleInputChange = (e) => {
    // Get the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, set the state of the desired form element
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else {
      setComments(inputValue);
    }
    handleFormBlur();
  };

  const handleFormBlur = (e) => {
    // Whenever the user clicks off of an input, check to see what else they need to do!
    if (!firstName) {
        setErrorMessage('Please enter your first name');
        return;
    } else if (!lastName) {
        setErrorMessage('Please enter your last name');
    } else if (!validateEmail(email)) {
        setErrorMessage('That email is invalid');
        return;
    } else if (!comments) {
        setErrorMessage('Please add a comment');
        return;
    } else {
        setErrorMessage('');
    } 
  }

  const handleFormSubmit = (e) => {
    // Preventing default!
    e.preventDefault();

    // When the user tries to submit, make sure there aren't any empty fields!
    if (!firstName || !lastName || !email || !comments) {
      handleFormBlur()
      return;
    };
    
    // If there's an error message, don't submit!
    if (errorMessage) {
      return;
    };

    // Just send an e-mail for now

    window.open(`mailto:stevengoldbergm@gmail.com?subject='Contact Request from ${firstName} ${lastName}'&body=${comments}`)

    // Clear inputs! In the future, pass form variables to somewhere else (email, backend data, etc)
    setFirstName('');
    setLastName('');
    setEmail('');
    setComments('');
  };

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
    <h1 className='mt-2 mb-4'>Contact Me!</h1>
    <form className='col-10 col-md-8'>
      <div className=" container d-flex flex-column mb-3">
        {/* First and Last name fields */}
        <div className="row g-3 mb-3">
          <div className="col-12 col-sm">
            <label 
              htmlFor="inputFirstName" 
              className="form-label">
                First Name:
            </label>
            <input 
              required
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              type="text" 
              className="form-control" 
              placeholder="First name" 
              aria-label="First name" 
              id="inputFirstName"/>
          </div>
          <div className="col-12 col-sm">
            <label 
              htmlFor="inputLastName" 
              className="form-label">
                Last Name:
            </label>
            <input 
              required
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              type="text" 
              className="form-control" 
              placeholder="Last name" 
              aria-label="Last name" 
              id="inputLastName"/>
          </div>
        </div>
        {/* email entry */}
        <div className='mb-3 col-12 col-sm-6'>
          <label 
            htmlFor="inputEmail" 
            className="form-label">
              Email address:
          </label>
          <input 
            required
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleFormBlur}
            type="email" 
            className="form-control" 
            placeholder="Email@yourmail.com" 
            id="inputEmail" 
            aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* Comments Section */}
        <div className="mb-3">
          <label 
            htmlFor="inputComments" 
            className="form-label">
              Comments:
          </label>
          <textarea
            required 
            value={comments}
            onChange={handleInputChange}
            onBlur={handleFormBlur}
            name="comments"
            className="form-control" 
            placeholder="Your comments" 
            id="inputComments" 
            rows="3">
          </textarea>
            
        </div>
        {/* Add a dynamic error message! */}
        {errorMessage && (
                <div id="emailHelp" className="form-text align-self-center pb-3 text-danger">
                    <strong>{errorMessage}</strong>
                </div>
            ) 
        }
        <button 
          typeof='submit' 
          className='btn btn-primary col-12 col-sm-6 align-self-center' 
          onClick={handleFormSubmit}
        >
            Submit
        </button>
      </div>
    </form>
  </div>
  );
}

export default Form;
