import React from 'react'
import { NavLink } from 'react-router-dom'
import search from "../assets/nav_icons/search.png"
import cart from "../assets/nav_icons/cart.png"
import notify from "../assets/nav_icons/notify.png"


const Navbar = () => {
  return (
    <header className="w-full fixed top-0 h-[48px] my-5">
        <nav className='flex flex-row justify-around w-full items-center h-[48px]'>
            <h1 className="text-[var(--main-color)] font-bold text-[32px]">ARTSY</h1>
            <ul className="flex flex-row gap-6">
                <li><NavLink path ="">Home</NavLink></li>
                <li><NavLink path ="market">MarketPlace</NavLink></li>
                <li><NavLink path ="auction">Auctions</NavLink></li>
                <li><NavLink path ="drop">Drop</NavLink></li>
            </ul>
            <article className="flex flex-row">
                <img src={search} alt="" className="px-2" />
                <img src={cart} alt="" className="px-2" />
                <img src={notify} alt="" className="px-2" />
            </article>
        </nav>
    </header>
  )
}

export default Navbar