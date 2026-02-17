import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // On success, go to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", textAlign: "center" }}>
      <h2>Lecturer Attendance System</h2>
      <p>Sign in to manage your classes.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: 12, fontSize: 12 }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
