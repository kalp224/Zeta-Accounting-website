import React from 'react'
import "./Home.css"
import '../App.css'

function Home() {
  return (
    <div className='Home-container'>
      <video src="./asset/video1.mp4" autoPlay loop muted />
      <h1>ZETA ACCOUNTING</h1>
      <p>---Finances In Check---</p>
    </div>
  )
}

export default Home
