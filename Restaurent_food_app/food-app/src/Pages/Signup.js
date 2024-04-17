import  { Component } from 'react';
import './SignUp.css'; // Import the CSS file

class Signup extends Component {
  render() {
   
    return (
      <div className="continer">
        <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
            
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              placeholder="Enter your age"
              
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-control" id="gender" name="gender"  onChange={this.handleChange}>
              <option >Male</option>
              <option >Female</option>
              
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select
              className="form-control"
              id="maritalStatus"
              name="maritalStatus"
              
              onChange={this.handleChange}
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="monthlyIncome">Monthly Income</label>
            <input
              type="number"
              className="form-control"
              id="monthlyIncome"
              name="monthlyIncome"
              placeholder="Enter your monthly income"
              
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="familySize">Family Size</label>
            <input
              type="number"
              className="form-control"
              id="familySize"
              name="familySize"
              placeholder="Enter your family size"
              
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
      </div>
      
    );
  }
}



export default Signup;