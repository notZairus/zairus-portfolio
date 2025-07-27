import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='w-full min-h-10 flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0 z-20'>
        <Link to="/">
          <div className='aspect-square flex items-center justify-center w-12 rounded-full overflow-hidden'>
            <h1 className="text-blue-400 font-black text-2xl"><span className="text-white">Z</span>B</h1>
          </div>      
        </Link>  
        
        <DesktopNavigation />
        <MobileNavigation />
    </header>
  )
}
