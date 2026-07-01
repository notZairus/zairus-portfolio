import NavButton from "./NavButton";

export default function DesktopNavigation() {
  return (
    <nav
      className="hidden md:flex lg:flex items-center gap-8 px-8 py-4 rounded-xl 
bg-[#2F2F2F]/50 backdrop-blur-md border border-white/10 
shadow-md text-white font-medium"
    >
      <NavButton path="/">Home</NavButton>

      <NavButton path="/about">About</NavButton>

      <NavButton path="/projects">Projects</NavButton>

      <NavButton path="/contact">Contact</NavButton>
    </nav>
  );
}
