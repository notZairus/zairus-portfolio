import React from 'react';
import { Link } from 'react-router-dom';



const currentPath = window.location.pathname;

type NavButtonProps = {
  path: string,
  children: string
}

function NavButton({ path, children }: NavButtonProps): React.ReactNode {
  return (
    <Link to={path} className={path === currentPath ? "text-blue-400" : ""}>{children}</Link>
  )
}

export default function Header() {
  return (
    <header className='w-full min-h-10 flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0 border-b border-white/10'>
        <div className='aspect-square w-12 bg-white rounded-full overflow-hidden'>
          <img src="https://imgs.search.brave.com/9XHXpZoWrWDCRXvqC6S26W_suvveaHy-AuGhZP_7nk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3F1YXNoLmlvL3N0/YXRpYy9pbWFnZXMv/dHV0b3JpYXNfZGVm/YXVsdF9pbWFnZS5q/cGc" alt="" />
        </div>        
        <nav className='hidden lg:block mg:block min-w-20 min-h-5 bg-white/15 space-x-12 px-12 py-2 rounded-lg text-white font-semibold'>
          <NavButton path="/">Home</NavButton>
          <NavButton path="/about">About</NavButton>
          <NavButton path="/projects">Projects</NavButton>
          <NavButton path="/contact">Contact</NavButton>
        </nav>
    </header>
  )
}
