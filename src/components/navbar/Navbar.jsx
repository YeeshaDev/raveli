import {FaSearch} from 'react-icons/fa'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
        <nav>
         <figure>
         <img src='https://askproject.net/raveli/wp-content/uploads/sites/130/2023/02/logo_Asset-3.png' alt='logo' width={150} height="auto" className='logo'/>
         </figure>
         <ul className='nav-list'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
         </ul>
         <div className='nav-btns'>
            <FaSearch />
            <button>Download</button>
         </div>
        </nav>
        <hr />
    </header>
  )
}
