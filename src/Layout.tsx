import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";


export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div className='w-full h-dvh min-h-dvh flex flex-col bg-primary pt-20 scrollbar-hidden'>
        <Header />
          <main 
            className="w-full flex-1 bg-primary px-8 py-4 scrollbar-hidden"
          >
            <Outlet />
          </main>
    </div>
  )
}
