import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Sample() {
  const navigate=useNavigate();
  const submitHandle=(e)=>{
      e.preventDefault();
      navigate('/build');
  }
  return (
    <div>
      <h1>Welcome to Getinfy Solutions</h1>
      <Link to="/build" className="btn btn-link ms-auto">build</Link>
    </div>
  )
}
