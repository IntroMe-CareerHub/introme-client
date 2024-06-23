import "./SignIn.css";

const SignIn = () => {
    const handleLoginClick = () => {
        window.location.href = "/oauth2/authorization/google";
    };

    return (
        <div className="container">
            <div className="sign-in-card">
                <h2>Intro me</h2>
                <button className="google-login-button" onClick={handleLoginClick}>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SignIn;
