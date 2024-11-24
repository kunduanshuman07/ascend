import React from 'react'
import AuthenticationComp from '../components/AuthenticationComp'

const SignInPage = () => {
    
    return (
        <div style={{ minHeight: "100vh", background: "#1e2222", display: "flex", width: "100%" }}>
            <AuthenticationComp type={1}/>
        </div>
    )
}

export default SignInPage