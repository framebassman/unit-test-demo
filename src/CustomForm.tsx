import React from 'react';
import { useNavigate } from "react-router-dom";
import './CustomForm.css';

export const CustomForm = () => {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    return navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="form-example">
      <div className="form-example">
        <label htmlFor="name">Enter your name: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-example">
        <label htmlFor="email">Enter your email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="form-example">
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  )
}
