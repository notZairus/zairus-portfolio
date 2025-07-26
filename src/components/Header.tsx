import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='w-full min-h-10 flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0 z-20'>
        <Link to="/">
          <div className='aspect-square w-12 bg-white rounded-full overflow-hidden'>
            <img src="/zairus.jpg" alt="" />
          </div>      
        </Link>  
        
        <DesktopNavigation />
        <MobileNavigation />
    </header>
  )
}
