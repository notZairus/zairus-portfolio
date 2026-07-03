import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full h-dvh min-h-dvh  flex flex-col bg-background pt-20 scrollbar-hidden">
      <Header />
      <main className="w-full flex-1  px-4 py-8 sm:py-20 sm:px-40 scrollbar-hidden">
        <Outlet />
      </main>
    </div>
  );
}
