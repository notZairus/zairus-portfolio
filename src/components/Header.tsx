import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  return (
    <header className='w-full min-h-10 flex justify-between px-8 py-4 items-center fixed top-0 left-0 right-0'>
        <div className='aspect-square w-12 bg-white rounded-full overflow-hidden'>
          <img src="https://imgs.search.brave.com/9XHXpZoWrWDCRXvqC6S26W_suvveaHy-AuGhZP_7nk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3F1YXNoLmlvL3N0/YXRpYy9pbWFnZXMv/dHV0b3JpYXNfZGVm/YXVsdF9pbWFnZS5q/cGc" alt="" />
        </div>        
        
        <DesktopNavigation />
        <MobileNavigation />
        
    </header>
  )
}
