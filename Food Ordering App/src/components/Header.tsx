import logo from "../assets/images/logo-black.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="header" className='bg-black text-white'>
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
        <div className='logo-wrapper pl-4 flex items-center'>
          <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl w-28 h-28">
            <img src={logo} className="" alt='logo' />
          </Link>
        </div>
        <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
          <Link to="/home" className="text-xl">Home</Link>
          <Link to="#about" className="text-xl">About</Link>
        </div>
        <div className='flex items-center justify-center space-x-4'>
          <Link to="/cart" className="w-6 h-6 bg-white">
            <img src={cartIcon} alt="cart" />
          </Link>
          <Link to="/login" className="text-xl">Log In</Link>
          <Link to="/signup" className="text-xl">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;
