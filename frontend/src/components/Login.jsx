import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});


  const inputHandler = (e) => {
    
    if (Object.keys(errors).length > 0) {
      validateFields();
    }

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log(user);
  };

  const addHandler = () => {
    
    if (validateFields())
    {
    console.log('button clicked', user);
    axios
      .post('http://localhost:3000/api/login', user)
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        if (response.data.message === 'Login sucessfully') {
          navigate('/navbar');
        } else {
          alert(response.data.message);
        }
      });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateFields = () => {
    const {username, password} = user;
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Please enter your username!';
    }else if (!/\S+@\S+\.\S+/.test(username)) {
      newErrors.username = 'Please enter a valid email address!';
    }
    if (!password) {
      newErrors.password = 'Please enter your password!';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <div className="container">
        <section className="section-register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="./assets/img/ict_logo.png" alt="" />
                    <span className="d-none d-lg-block">ICTAK Curriculum Tracker</span>
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login</h5>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder='Enter Email Address'
                          onChange={inputHandler}
                        />
                        {errors.username && <div className="invalid-feedback d-block">{errors.username}</div>}
                      </div>
                    </div>
                    <br />
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Password</label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="form-control"
                        placeholder='Enter Password'
                        onChange={inputHandler}
                      />
                      {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                    </div>
                    <br />
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={toggleShowPassword}
                        />
                        <span>Show Password</span>
                      </div>
                    </div>
                    <br/>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" onClick={addHandler}>Login</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have an account? <a href="/signup">Create an account</a></p>
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

export default Login;
