import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5"
import NavButton from "./NavButton"


export default function MobileNavigation() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
            <IoMenu color="white" size={36} />
        </SheetTrigger>
        
        <SheetContent 
          className="bg-[#222222] text-white border-l-white/20 w-[240px] pb-4" 
          heading="Navigations"
          
        >
          <nav className="flex flex-col text-xl px-4 space-y-2">
            <NavButton path="/">Home</NavButton>
            <NavButton path="/about">About</NavButton>
            <NavButton path="/projects">Projects</NavButton>
            <NavButton path="/contact">Contact</NavButton>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
