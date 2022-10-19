import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
  <>
    <footer class="py-3 my-4 fixed-bottom">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="https://github.com/" class="nav-link px-2 text-muted">Github</a></li>
        <li class="nav-item"><a href="https://LinkedIn.com/" class="nav-link px-2 text-muted">LinkedIn</a></li>
        <li class="nav-item"><a href="https://Twitter.com/" class="nav-link px-2 text-muted">Twitter</a></li>

      </ul>
      <p class="text-center text-muted">© 2022 stevengoldbergm</p>
    </footer>
  </>
  );
}

export default NavTabs;
