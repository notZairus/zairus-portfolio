import NavButton from "./NavButton";
import { House, Info, BriefcaseBusiness, Send } from "lucide-react";

export default function MobileNavigation() {
  return (
    <nav
      className="flex md:hidden items-center gap-8 px-8 py-4 rounded-xl 
    bg-[#2F2F2F]/50 backdrop-blur-md border border-white/10 
    shadow-md text-white font-medium"
    >
      <NavButton path="/">
        <House />
      </NavButton>

      <NavButton path="/about">
        <Info />
      </NavButton>

      <NavButton path="/projects">
        <BriefcaseBusiness />
      </NavButton>

      <NavButton path="/contact">
        <Send />
      </NavButton>
    </nav>
  );
}
