import {useState} from 'react'

function Login() {
    const [formData, setFormData] = useState({email: "", password: ""})

    function onLogin() {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(r => {
            if (r.email) {
                localStorage.removeItem("error")
                localStorage.email = r.email
            } else {
                localStorage.error = "invalid email/password combination"
            }
            setFormData({email: "", password: ""})
        })
    }

    function logout() {
        fetch("http://localhost:3000/logout")
        .then(setFormData({email: "", password: ""}))
        localStorage.removeItem("email")
    }

    return(
        localStorage.email ?
        <p>logged in as {localStorage.email} <button onClick={() => logout()}>logout</button></p>
        :
        <div>
            <p>
                <b><small>{localStorage.error ? localStorage.error : null}</small></b><br />
                <small>username:</small><input type="text" name="email" id="email" value={formData["email"]} onChange={(e) => setFormData({...formData, email: e.target.value})}></input><br />
                <small>password:</small><input type="password" name="password" id="password" value={formData["password"]} onChange={(e) => setFormData({...formData, password: e.target.value})}></input><br />
                <button onClick={() => onLogin()}>login</button>
            </p>
        </div>
    )
}

export default Login