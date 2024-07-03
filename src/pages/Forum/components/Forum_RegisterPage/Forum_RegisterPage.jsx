import { useState } from 'react'
import axios from 'axios'

const RegisterPage = () => {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('/api/register', { username, password, email })

            if (response.data.success) {
                alert('Registration successful')
            } else {
                alert('Registration failed')
            }
        } catch (error) {
            console.error('Error registering user:', error)
            alert('An error occurred during registration')
        }
    }
    return (
        <div className="RegisterPage">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegisterPage