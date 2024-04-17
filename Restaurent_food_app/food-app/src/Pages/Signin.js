
import './Signin.css'; // Import the CSS file for styling (explained later)

const Signin = () => {
  return (
    <div className="container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <form action="/signin" method="post">
          <div className="form-group">
            <label htmlFor="email">
              Email Address <i className="bx bxs-envelope"></i>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password <i className="bx bxs-lock-alt"></i>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn-signin">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
