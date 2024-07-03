import { useState } from 'react'
import axios from "axios"

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("/api/login", { username, password });

        if (response.data.success) {
            setMessage("Logged in successfully");
            setIsError(false);
        } else {
            setMessage("Invalid credentials");
            setIsError(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Log In" />
            </form>
            {message && <p style={{ color: isError ? "red" : "green" }}>{message}</p>}
        </div>
    );
}

export default LoginPage