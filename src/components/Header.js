// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="sticky-top">
      <div className="header-bg pt-4 ">
        <header className="jumbotron jumbotron-fluid ">
          <div className=" d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-end px-3">
            <h1 className="display-4 text-white pb-3">
              <a
                href="#AboutMe"
                onClick={() => handlePageChange("AboutMe")}
                // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "AboutMe"
                    ? "nav-link active text-white text-center px-0"
                    : "nav-link text-white text-center px-0"
                }
              >
                <strong className="text-secondary">Steven Goldberg</strong>
              </a>
            </h1>
          </div>

          <ul className="nav nav-pills d-flex justify-content-around justify-content-sm-end pb-4">
            <li className="nav-item col-4 mx-1 px-2 col-sm-2 col-md-2 col-lg-1 text-center">
              <a
                href="#AboutMe"
                onClick={() => handlePageChange("AboutMe")}
                // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "AboutMe"
                    ? "nav-link active text-white text-center px-0"
                    : "nav-link text-white text-center px-0"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item col-4 mx-1 px-2 col-sm-2 col-md-2 col-lg-1 text-center">
              <a
                href="#Portfolio"
                onClick={() => handlePageChange("Portfolio")}
                // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Portfolio"
                    ? "nav-link active text-center px-0"
                    : "nav-link text-white text-center px-0"
                }
              >
                Projects
              </a>
            </li>
            <li className="nav-item col-4 mx-1 px-2 col-sm-2 col-md-2 col-lg-1 text-center">
              <a
                href="#Contact"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact"
                    ? "nav-link active text-center px-0"
                    : "nav-link text-white text-center px-0"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item col-4 mx-1 px-2 col-sm-2 col-md-2 col-lg-1 text-center">
              <a
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
                // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Resume"
                    ? "nav-link active text-center px-0"
                    : "nav-link text-white text-center px-0"
                }
              >
                Skills
              </a>
            </li>
          </ul>
        </header>
      </div>
      <div className="py-1 bg-primary"></div>
    </div>
  );
}

export default NavTabs;
