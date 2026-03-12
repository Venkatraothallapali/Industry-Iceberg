import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // login logic
    console.log("Login attempt:", formData);

    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-card">

          <div className="login-header">
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">
              Sign in to your CompliSense account
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>

            {error && <div className="error-message">{error}</div>}

            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email" className="form-label">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="form-group">

              <label htmlFor="password" className="form-label">
                Password
              </label>

              <div className="password-input">

                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* OPTIONS */}

            <div className="form-options">

              <label className="checkbox-label">

                <input type="checkbox" className="checkbox" />

                <span className="checkbox-text">
                  Remember me
                </span>

              </label>

              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>

            </div>

            {/* SUBMIT */}

            <button type="submit" className="login-button">
              Sign In
            </button>

          </form>

          <div className="login-footer">

            <p className="signup-text">
              Don't have an account?{" "}
              <Link to="/request-demo" className="signup-link">
                Sign up for a demo
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;