import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignInSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("accessToken");
        const storedToken = localStorage.getItem("AccessToken");
        if (token) {
            localStorage.setItem("AccessToken", token);
            navigate("/");
        } else if (!storedToken && !token) {
            console.error("No token found in URL parameters");
            navigate("/sign-in");
        }
    }, [navigate]);

    return (
        <div>
            <h2>Login Successful</h2>
            <p>Redirecting...</p>
        </div>
    );
};

export default SignInSuccess;
