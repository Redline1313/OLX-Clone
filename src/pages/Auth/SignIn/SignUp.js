import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { UserContext } from "../../../App";
import { useUser } from "../../../ContextAPI/ContextAPI";
const SignUp = () => {
  const { name, setName } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const { username, setUsername } = useUser();
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: username,
      });
      setUsername(username);

      setSuccessMessage("You have successfully signed up!");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use.");
      } else {
        setError("An error occurred while signing up.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-foam">
        <h2 className="signup-title">Sign Up</h2>
        {successMessage && <p className="signup-success">{successMessage}</p>}
        <input
          required
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          className="signup-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
        {error && <p className="signup-error">{error}</p>}
        <p>
          Already have an account?
          <Link to="/login" className="signup-link">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
