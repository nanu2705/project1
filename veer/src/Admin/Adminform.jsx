import React, { useContext} from 'react';
import './Adminform.scss';
import MyContext from '../Common/Context/MyContext';

const Adminform = () => {

    const{setUsername,error,setError,username,Navigate}=useContext(MyContext)
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === 'veer@2238') {
        setError('');
        Navigate('/admin');
      } else {
        setError('Invalid username. Please try again.');
      }
    };
  
  return (
    <div className="login-form">
    <form onSubmit={handleSubmit}>
      <h2>Veer Consultancy Admin Panel</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Adminform
