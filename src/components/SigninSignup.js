import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import axios from "axios"
import "../css/signin-signup-style.css"
import logo from "../images/logo.png"
import logo2 from "../images/logo2.png"


const LandingPage = props => {
    const nicknameSignupRef = useRef()
    const fullNameSignupRef = useRef()
    const emailSignupRef = useRef()
    const passwordSignupRef = useRef()
    const phoneSignupRef = useRef()
    const emailSignInRef = useRef()
    const passwordSignInRef = useRef()
    const containerRef = React.createRef()
    const history = useHistory()
    const { currentUser } = useAuth()
    const { signup } = useAuth()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const signUpButton = () => {
        const containerNode = containerRef.current
        containerNode.classList.add("right-panel-active")
    }

    const signInButton = () => {
        const containerNode = containerRef.current
        containerNode.classList.remove("right-panel-active")
    }

    const signInEvent = async () => {
        try {
            setError('')
            setLoading(true)

            await login(emailSignInRef.current.value, passwordSignInRef.current.value)

            console.log(currentUser)

            history.push('/dashboard')
        } catch(error) {
            setError("Sign In Failed.")
        }

        setLoading(false)
    }

    const signupEvent = async () => {
        try {
            setError("")
            setLoading(true)

            await signup(emailSignupRef.current.value, passwordSignupRef.current.value)

            axios.post("https://ecibastas-app.herokuapp.com/user/createNewUser", {
                nickname: nicknameSignupRef.current.value,
                fullName: fullNameSignupRef.current.value,
                email: emailSignupRef.current.value,
                phone: phoneSignupRef.current.value,
                role: "User"
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(`Error: ${error}`)
            })

            history.push("/")
        } catch(error) {
            setError("Error during user register.")
        }

        setLoading(false)
    }

    return(
        <div className="body">
            <div class="container" id="container" ref={containerRef}>
                <div class="form-container sign-up-container">
                    <div className="form">
                        <h1>Create Account</h1>
                        <input class="input" type="text" placeholder="Nickname" ref={nicknameSignupRef} maxLength="100" required />
                        <input class="input" type="text" placeholder="Full Name" ref={fullNameSignupRef} maxLength="100" required />
                        <input class="input" type="text" placeholder="Phone Number" ref={phoneSignupRef} minLength="10" maxLength="10" required />
                        <input class="input" type="email" placeholder="Email" id="Sign-Up-Email" ref={emailSignupRef} maxLength="100" required />
                        <input class="input" type="password" placeholder="Password" id="Sign-Up-Password" ref={passwordSignupRef} minLength="6" required />
                        <button class="button" type="submit" disabled={loading} onClick={signupEvent}>Sign Up</button>
                    </div>            
                </div>
                <div class="form-container sign-in-container">
                    <div className="form">
                        <h1 className="h1">Sign in</h1>
                        <input class="input" type="email" placeholder="Email" ref={emailSignInRef} />
                        <input class="input" type="password" placeholder="Password" ref={passwordSignInRef} />
                        <button class="button" type="submit" disabled={loading} onClick={signInEvent}>Sign In</button>
                    </div>        
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1 class="h1">Welcome Back!</h1>
                            <p class="p">To keep connected with us please login with your personal info</p>
                            <button class="button ghost" id="signIn" onClick={signInButton}>Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <img src={logo} />
                            <h1 class="h1">Hello, Friend!</h1>
                            <p class="p">Enter your personal details and start journey with us.</p>
                            <button class="button ghost" id="signUp" onClick={signUpButton}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage