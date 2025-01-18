import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <li><Link href={{
          pathname: "/home",
          query: {
            q: 'hassan'
          }
        }}>Home</Link></li>
        <li><Link href="/about">About us</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact us</Link></li>
    </nav>
  )
}

export default NavBar