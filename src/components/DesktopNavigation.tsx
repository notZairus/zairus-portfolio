import NavButton from "./NavButton"

export default function DesktopNavigation() {
  return (
    <nav className='hidden lg:block md:block min-w-20 min-h-5 bg-[#2F2F2F] border border-white/15 space-x-12 px-12 py-2 rounded-lg text-white font-semibold'>
        <NavButton path="/">Home</NavButton>
        <NavButton path="/about">About</NavButton>
        <NavButton path="/projects">Projects</NavButton>
        <NavButton path="/contact">Contact</NavButton>
    </nav>
  )
}
