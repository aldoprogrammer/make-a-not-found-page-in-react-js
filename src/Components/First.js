import React from 'react'
import { useNavigate } from 'react-router-dom'

function First() {
    const navigate = useNavigate();
  return (
    <div>
    <h1>Ini adalah Home</h1>
    <button onClick={() => navigate('/about')}>About</button>
    </div>
  )
}

export default First