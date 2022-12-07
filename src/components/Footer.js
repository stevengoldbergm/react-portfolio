import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage, handlePageChange }) {
  return (
  <>
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="https://github.com/stevengoldbergm" className="nav-link px-2 text-muted">Github</a></li>
        <li className="nav-item"><a href="https://www.linkedin.com/in/stevengoldbergm/" className="nav-link px-2 text-muted">LinkedIn</a></li>
        <li className="nav-item"><a href="https://twitter.com/stevengoldbergm" className="nav-link px-2 text-muted">Twitter</a></li>

      </ul>
      <p className="text-center text-muted">© 2022 stevengoldbergm</p>
    </footer>
  </>
  );
}

export default Footer;
