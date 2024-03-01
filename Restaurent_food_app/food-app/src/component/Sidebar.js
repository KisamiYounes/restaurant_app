import React from 'react'; // Import React explicitly

class Sidebar extends React.Component {
  render() {
    // Use JSX syntax for components and attributes
    return (
      <div className='sidebar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <i className='bx bx-restaurant'></i> Food Delivery App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    How it Works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for restaurants"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className='bx bx-log-in-circle'></i> Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className='bx bx-user-plus'></i> Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Remove the script tag from JSX, ideally load it in your main app component */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVfCSy5tEJznwM9P5q6qcIWBre8dO4dHPzGTRT3HqUTXxMUzUIGu" crossorigin="anonymous"></script> */}
      </div>
    );
  }
}

export default Sidebar;
