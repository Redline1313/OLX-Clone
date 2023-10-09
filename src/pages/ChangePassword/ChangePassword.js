import React, { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      await updatePassword(auth.currentUser, newPassword);

      setSuccessMessage("Password changed successfully!");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="change-password-container">
      <div className="change-password-form">
        <h2 className="change-password-title">Change Password</h2>
        {successMessage && (
          <p className="change-password-success">{successMessage}</p>
        )}
        <input
          required
          className="change-password-input"
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          required
          className="change-password-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="change-password-button"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
        {error && <p className="change-password-error">{error}</p>}
        <p>
          <a href="#" onClick={() => navigate("/")} className="profile-link">
            Go back to profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
