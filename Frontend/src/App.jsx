import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../utils/firebase'

const App =() => {

  const googleLogin=async ()=>{
    const data=await signInWithPopup(auth, googleProvider)

    console.log(data)
  }

  return (
    <div className="w-full h-screen bg-black justify-center items-center flex">
      <button className="w-50 h-14 bg-white" onClick={googleLogin}>
        Continue with Google
      </button>
    </div>
  )
}

export default App
