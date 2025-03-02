import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-xl">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Learning Centres</a></li>
          <li>
            <a>Products</a>
            <ul className="p-2">
              <li><a>Ashna - a1</a></li>
              <li><a>Travel Genie</a></li>
              <li><a>Coming Soon</a></li>
            </ul>
          </li>
          <li><a>Pricing</a></li>
          <li><a > For Developers</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Ashna AI</a>
    </div>
    <div className="navbar-center hidden lg:flex mx-48">
      <ul className="menu menu-horizontal px-1">
        <li className='font-bold'><a>Learning Centres</a></li>
        <li>
          <details>
            <summary className='font-bold'>Products</summary>
            <ul className="p-2">
              <li><a>Ashna - a1</a></li>
              <li><a>Travel Genie</a></li>
              <li><a >Coming Soon</a></li>
            </ul>
          </details>
        </li>
        <li className='font-bold'><a>Pricing</a></li>
        <li className='font-bold'><a>For Developers</a></li>
      </ul>
    </div>
    <div className="btn hover:bg-pink-300">
 
    <button>Login</button>
 
  <div>
    <h2 className="bg-gradient-to-r from-red-500 via-red-600 to-red-700  p-2 rounded-xl text-black">
      Try for free ➡️
    </h2>
  </div>
</div>

  </div>
  )
}

export default Navbar
