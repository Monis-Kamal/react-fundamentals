import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
  return (
    <form className="form">
      <label className="form-label">Enter Full Name Here:</label>
      <input placeholder="Full Name Here " className="form-input" />
      <label className="form-label">Username:</label>
      <input placeholder="username " className="form-input" />
      <label className="form-label">Email:</label>
      <input type="email" placeholder="Email" className="form-input" />
      <label className="form-label">Password:</label>
      <input type="password" placeholder="Password " className="form-input" />
      <label className="form-label">Confirm Password:</label>
      <input type="password" placeholder="Confirm Password " className="form-input" />
      <button className="form-btn">Submit</button>
    </form>
  )
}
export default App
