import React from 'react';
import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
    return (
        <div className="outside-container">
            <h1 className="headline">
                Make team connection better with <span className="logo-name">Koji</span>
            </h1>
            <div className="login-page-container">
                <div className="login-card">
                    {/* Input Form */}
                    <form className="login-form">
                        <label htmlFor="work-email" className="email-label">
                            <b>Work email</b>
                        </label>
                        <input
                            type="email"
                            id="work-email"
                            name="work-email"
                            placeholder="you@company.com"
                            className="email-input"
                            required
                        />

                        {/* Sign Up Button */}
                        <button type="submit" className="signup-button">
                            Sign up
                        </button>
                    </form>

                    {/* Log In Link for existing users */}
                    <div className="login-link-container">
                        <p className="prompt-with-divider">
                            already have an account?
                        </p>
                        <a href="/login" className="login-link centered-link">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;