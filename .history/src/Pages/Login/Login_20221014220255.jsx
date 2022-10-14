import React from 'react'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title text-2xl text-bold">Login</h2>
          <div className="divider">OR</div>
          <button className="btn btn-outline">Continue With Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
