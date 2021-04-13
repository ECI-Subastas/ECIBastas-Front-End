import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
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
    const roleSignupRef = useRef()
    const emailSignInRef = useRef()
    const passwordSignInRef = useRef()
    const containerRef = React.createRef()
    const { signup } = useAuth()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const signUpButton = async () => {
        const containerNode = containerRef.current
        containerNode.classList.add("right-panel-active")
    }

    const signInButton = async () => {
        const containerNode = containerRef.current
        containerNode.classList.remove("right-panel-active")
    }

    const signInEvent = async () => {
        try {
            setError("")
            setLoading(true)

            await login(emailSignInRef.current.value, passwordSignInRef.current.value)

            history.push("/dashboard")
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
        } catch(error) {
            setError("Error during user register.")
        }

        history.push("/")

        setLoading(false)
    }

    return(
        <div class="container" id="container" ref={containerRef}>
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Nickname" ref={nicknameSignupRef} maxLength="100" required />
                    <input type="text" placeholder="Full Name" ref={fullNameSignupRef} maxLength="100" required />
                    <input type="text" placeholder="Phone Number" ref={phoneSignupRef} minLength="10" maxLength="10" required />
                    <input type="email" placeholder="Email" ref={emailSignupRef} maxLength="100" required />
                    <input type="password" placeholder="Password" ref={passwordSignupRef} required />
                    <button type="submit" onClick={signupEvent}>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" ref={emailSignInRef} required />
                    <input type="password" placeholder="Password" ref={passwordSignInRef} required />
                    <button type="submit" onClick={signInEvent}>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <img src={logo2} />
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn" onClick={signInButton}>Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <img src={logo} />
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us.</p>
                        <button class="ghost" id="signUp" onClick={signUpButton}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage