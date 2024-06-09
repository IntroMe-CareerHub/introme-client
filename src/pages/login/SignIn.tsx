const SignIn = () => {
    const handleLoginClick = () => {
        window.location.href = "/login";
    };

    return (
        <div>
            <h2>Sign In</h2>
            <button onClick={handleLoginClick}>Login with Google</button>
        </div>
    );
};

export default SignIn;
