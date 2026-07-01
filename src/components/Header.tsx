import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full min-h-10 flex justify-between p-4 items-center fixed top-0 left-0 right-0 z-20 lg:px-20 ">
      <Link to="/">
        <div
          className="aspect-square flex items-center justify-center w-12 rounded-full overflow-hidden bg-[#2F2F2F]/20 backdrop-blur-md border border-white/10 
shadow-md"
        >
          <h1 className="text-blue-400 font-black text-2xl">
            Z<span className="text-white">B</span>
          </h1>
        </div>
      </Link>

      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}
