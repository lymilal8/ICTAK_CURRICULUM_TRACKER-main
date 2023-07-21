import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});


  const navigate = useNavigate();

  const inputHandler = (e) => {

   // Only show errors when the user submits the form or leaves a field empty after interacting with it
    if (Object.keys(errors).length > 0) {
      validateFields();
    }

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

  };

  const validateFields = () => {
    const { name, email, password, confirmPassword } = inputs;
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Please enter your name!';
    }
    if (!email) {
      newErrors.email = 'Please enter your email!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address!';
    }
    if (!password) {
      newErrors.password = 'Please enter your password!';
    } 
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password!';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPasswordStrengthColor = () => {
    const passwordStrength = getPasswordStrength(inputs.password);

    if (passwordStrength === 'strong') {
      return 'green';
    } else if (passwordStrength === 'medium') {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const getPasswordStrength = (password) => {
    // Password Strength Rules
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber) {
      return 'strong';
    } else if (password.length >= 6 && (hasUppercase || hasLowercase || hasNumber)) {
      return 'medium';
    } else {
      return 'poor';
    }
  };

  const submitHandler = () => {
    if (validateFields()) {
      let data={
        name:inputs.name,
        email:inputs.email,
        password:inputs.password,
        userStatus:"user"
      }
      
    console.log("onsubmit",data);
      axios
        .post('http://localhost:3000/api/signup', data)
        .then((response) => {
          // console.log(response);
          console.log(response.data);
          if (response.data.message === 'Signup successfully') {
            alert(response.data.message);
            navigate('/');
          } else {
            alert(response.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="container">
        <section className="section min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="./assets/img/ict_logo.png" alt="" />
                    <span className="d-none d-lg-block">ICTAK Curriculum Tracker</span>
                  </a>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="pb-2">
                      <h5 className="card-title text-center fs-4">Signup</h5>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        onChange={inputHandler}
                        required
                      />
                      {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">
                        Email
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">
                          @
                        </span>
                        <input
                          type="email"
                          name="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          onChange={inputHandler}
                          required
                        />
                        {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="yourPassword"
                        onChange={inputHandler}
                        required
                      />
                      {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}

                      {inputs.password && (
                        <div style={{ color: getPasswordStrengthColor() }}>
                          Password Strength: {getPasswordStrength(inputs.password)}
                        </div>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        onChange={inputHandler}
                        required
                      />
                      {errors.confirmPassword && (
                        <div className="invalid-feedback d-block">{errors.confirmPassword}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary btn-block" onClick={submitHandler}>
                        Create Account
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="mb-0">
                        Already have an account? <a href="/">Log in</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
