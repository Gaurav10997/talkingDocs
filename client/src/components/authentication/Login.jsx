import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../store/AuthContext';
import './Login.css';

function Login() {
  const authCtx = useContext(AuthContext);

  const [newUser, setNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  // Functions Defined Here
  function toggleAuth() {
    setNewUser((prev) => !prev);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const AddUsers = async (authname, userInfo) => {
    try {
      const response = await fetch(`https://talkingdocs.onrender.com/users/${authname}`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authCtx.token}`
        },
      });
    //   console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        authCtx.login(data.token);
      } else if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'An error occurred while processing your request.');
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const handleAdduser = async (e) => {
    e.preventDefault();
    try {
      if (newUser) {
        const userInfo = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmpassword: formData.cpassword,
        };
        await AddUsers('signup', userInfo);
      } else if (!newUser) {
        const userInfo = {
          email: formData.email,
          password: formData.password,
        };
        await AddUsers('signin', userInfo);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
      setErrorMessage('');
    }
  }, [errorMessage]);

  return (
    <div className="login">
      <img className="login__image" src="https://quantive.com/images/svg/icon-login.svg" width={100} alt="" />
      <div>
        {!newUser && <h1 className="login__heading">Login</h1>}
        {newUser && <h1 className="login__heading">SignUp</h1>}
      </div>
      <form className="login__form" onSubmit={handleAdduser}>
        {newUser && <input type="text" name="username" placeholder="Enter Your Name" onChange={handleChange} />}
        <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} />
        {newUser && <input name="cpassword" type="password" placeholder="Confirm Your Password" onChange={handleChange} />}
        <button type="submit">{!newUser ? "Login" : "SignUp"}</button>
        <h3>{!newUser ? "New to Quantive?" : "Already a Quantive User ?"}
          <span onClick={toggleAuth}>
            <b style={{ color: '#579ffb' }}>
              {!newUser ? "Create an account" : "Login with your account"}
            </b>
          </span>
        </h3>
      </form>
    </div>
  );
}

export default Login;
