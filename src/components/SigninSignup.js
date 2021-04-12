import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import "../css/signin-signup-style.css"

const LandingPage = props => {
    const nicknameSignupRef = useRef()
    const fullNameSignupRef = useRef()
    const emailSignupRef = useRef()
    const passwordSignupRef = useRef()
    const phoneSignupRef = useRef()
    const roleSignupRef = useRef()
    const emailSignInRef = useRef()
    const passwordSignInRef = useRef()
    const { signup } = useAuth()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [isContainerActive, setIsContainerActive] = React.useState(false)
    const history = useHistory()

    const signUpButton = async () => {
        setIsContainerActive(false)
    }

    const signInButton = async () => {
        setIsContainerActive(true)
    }

    const loginEvent = async () => {
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

            axios.post("https://ecibastas-app.herokuapp.com/createNewUser", {
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

        setLoading(false)
    }

    return(
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Nickname" ref={nicknameSignupRef} />
                    <input type="text" placeholder="Full Name" ref={fullNameSignupRef} />
                    <input type="text" placeholder="Phone Number" ref={phoneSignupRef} />
                    <input type="email" placeholder="Email" ref={emailSignupRef} />
                    <input type="password" placeholder="Password" ref={passwordSignupRef} />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" ref={emailSignInRef} />
                    <input type="password" placeholder="Password" ref={passwordSignInRef} />
                    <button>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us.</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage