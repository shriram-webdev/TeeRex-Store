import './nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='nav'>
      <div><h1><Link to='/' className='link'>TeeRex Store</Link></h1></div>
      <div className='nav-links'>
        <h3><Link to='/' className='link'>Home</Link></h3>
        <h3><Link to='/cart' className='link'>Cart</Link></h3>
      </div>
    </div>
  )
}

export default Nav
