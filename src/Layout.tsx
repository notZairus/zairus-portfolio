import { Outlet } from "react-router-dom"
import Header from "./components/Header"

export default function Layout() {
  return (
    <div className='w-full h-dvh min-h-dvh flex flex-col bg-primary pt-20 scrollbar-hidden'>
        <Header />
        <main className="w-full flex-1 bg-primary px-8 py-4 scrollbar-hidden">
          <Outlet />
        </main>
    </div>
  )
}
