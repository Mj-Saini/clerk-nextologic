
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-10">
  
    <Link to="/sign-in" className='border border-black px-8 py-2 rounded-lg text-lg font-medium'>
      <button className="login-button">User Login</button>
    </Link>
    <Link to="/admin-login" className='border border-black px-8 py-2 rounded-lg text-lg font-medium'>
      <button className="login-button">Admin Login</button>
    </Link>
  </div>
  )
}

export default LandingPage