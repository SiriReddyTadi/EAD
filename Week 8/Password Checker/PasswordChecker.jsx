import React, { useState } from "react";
import "./PasswordChecker.css";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pwd) => {
    let score = 0;

    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[!@#$%^&*]/.test(pwd)) score++;

    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
    if (score === 4) return "Strong";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkStrength(value));
  };

  return (
    <div className="container">
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />

      {password && (
        <p className={`strength ${strength.toLowerCase()}`}>
          Strength: {strength}
        </p>
      )}

      <div className="rules">
        <p>✔ Minimum 8 characters</p>
        <p>✔ At least one uppercase letter</p>
        <p>✔ At least one number</p>
        <p>✔ At least one special character</p>
      </div>
    </div>
  );
}

export default PasswordChecker;