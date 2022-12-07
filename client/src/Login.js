import {useState} from 'react'

function Login() {
    const [formData, setFormData] = useState({email: "", password: ""})

    function onLogin() {
        console.log(JSON.stringify(formData))
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
    }

    return(
        false ?
        <p>logged in</p>
        :
        <div>
            <p>
                <small>username:</small><input type="text" name="email" id="email" value={formData["email"]} onChange={(e) => setFormData({...formData, email: e.target.value})}></input><br />
                <small>password:</small><input type="password" name="password" id="password" value={formData["password"]} onChange={(e) => setFormData({...formData, password: e.target.value})}></input><br />
                <button onClick={() => onLogin()}>login</button>
            </p>
        </div>
    )
}

export default Login